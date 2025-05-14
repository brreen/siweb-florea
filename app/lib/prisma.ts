import { PrismaClient } from "@/generated/prisma";
import { LatestInvoice } from "./definitions";
import { formatCurrency } from "./utils";

let prisma = new PrismaClient();

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Prevent multiple instances of Prisma Client in development
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;

export async function fetchRevenuePrisma() {
  try {
    const data = await prisma.revenue.findMany();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchLatestInvoicesPrisma() {
  try {
    // Fixing this query based on your schema
    // Your schema doesn't have a relation between invoices and customers
    const invoices = await prisma.invoices.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });

    // We need to fetch customers separately based on your current schema
    const latestInvoices = await Promise.all(
      invoices.map(async (invoice: { customer_id: any; amount: number; id: any; }) => {
        const customer = await prisma.customers.findUnique({
          where: {
            id: invoice.customer_id,
          },
          select: {
            name: true,
            image_url: true,
            email: true,
          },
        });

        return {
          amount: formatCurrency(invoice.amount),
          name: customer ? customer.name : 'Unknown Customer',
          image_url: customer ? customer.image_url : '',
          email: customer ? customer.email : '',
          id: invoice.id,
        };
      })
    ) as unknown as LatestInvoice[];

    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function fetchCardDataPrisma() {
  try {
    const invoiceCountPromise = prisma.invoices.count();
    const customerCountPromise = prisma.customers.count();
    const invoiceStatusPromise = prisma.invoices.groupBy({
      by: ["status"],
      _sum: {
        amount: true,
      },
    });

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const paid =
      data[2].find((status: { status: string; }) => status.status === "paid")?._sum.amount || 0;
    const pending =
      data[2].find((status: { status: string; }) => status.status === "pending")?._sum.amount || 0;

    return {
      numberOfCustomers: data[1],
      numberOfInvoices: data[0],
      totalPaidInvoices: formatCurrency(paid),
      totalPendingInvoices: formatCurrency(pending),
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

export async function fetchProductsPrisma() {
  try {
    // Corrected to use Products model instead of produk
    const products = await prisma.products.findMany({
      select: {
        id_product: true,
        nama_produk: true,
        harga: true,
        image_url: true,
      },
      orderBy: {
        // Note: createdAt doesn't exist in your schema
        // Instead, we'll order by id_product
        id_product: 'desc',
      },
    });

    // Format data for UI display
    const formattedProducts = products.map((product: { id_product: any; nama_produk: any; harga: number; image_url: any; }) => ({
      id: product.id_product,
      nama_produk: product.nama_produk,
      harga: product.harga,
      harga_formatted: formatCurrency(product.harga),
      image_url: product.image_url,
    }));

    return formattedProducts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

// Function to fetch product by ID
export async function fetchProductById(id: string) {
  try {
    const product = await prisma.products.findUnique({
      where: {
        id_product: id,
      },
    });

    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }

    return {
      id: product.id_product,
      nama_produk: product.nama_produk,
      harga: product.harga,
      harga_formatted: formatCurrency(product.harga),
      image_url: product.image_url,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch product with ID ${id}.`);
  }
}

// Function to search products by keyword
export async function searchProducts(query: string) {
  try {
    const products = await prisma.products.findMany({
      where: {
        OR: [
          {
            nama_produk: {
              contains: query,
              mode: 'insensitive', // Case-insensitive search if supported by DB
            },
          },
        ],
      },
      orderBy: {
        nama_produk: 'asc',
      },
    });

    const formattedProducts = products.map((product: { id_product: any; nama_produk: any; harga: number; image_url: any; }) => ({
      id: product.id_product,
      nama_produk: product.nama_produk,
      harga: product.harga,
      harga_formatted: formatCurrency(product.harga),
      image_url: product.image_url,
    }));

    return formattedProducts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to search products.");
  }
}

// Function to get product statistics
export async function getProductStats() {
  try {
    // Count total products
    const totalProducts = await prisma.products.count();

    // Calculate average price
    const avgPriceResult = await prisma.products.aggregate({
      _avg: {
        harga: true,
      },
    });
    const avgPrice = avgPriceResult._avg.harga || 0;

    // Get highest priced product
    const highestPricedProduct = await prisma.products.findFirst({
      orderBy: {
        harga: 'desc',
      },
    });

    return {
      totalProducts,
      avgPrice,
      avgPriceFormatted: formatCurrency(avgPrice),
      highestPricedProduct: highestPricedProduct ? {
        id: highestPricedProduct.id_product,
        nama_produk: highestPricedProduct.nama_produk,
        harga: highestPricedProduct.harga,
        harga_formatted: formatCurrency(highestPricedProduct.harga),
        image_url: highestPricedProduct.image_url,
      } : null,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to get product statistics.");
  }
}