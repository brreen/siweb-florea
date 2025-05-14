"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/app/lib/prisma";

// Tipe hasil fungsi
type ActionResult = { success: true } | { error: string };

// Add a new product
export async function addProduct(formData: FormData): Promise<ActionResult> {
  const nama_produk = formData.get("nama_produk") as string;
  const harga = parseFloat(formData.get("harga") as string);
  const image_url = formData.get("image_url") as string | null;

  if (!nama_produk || isNaN(harga)) {
    return {
      error: "Invalid product data. Please check the form fields.",
    };
  }

  try {
    await prisma.products.create({
      data: {
        nama_produk,
        harga,
        image_url: image_url || "",
      },
    });

    revalidatePath("/dashboard/products");
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      error: "Failed to create product.",
    };
  }
}

// Delete a product by ID
export async function deleteProduct(id: number): Promise<ActionResult> {
  try {
    await prisma.products.delete({
      where: {
        id_product: id,
      },
    });

    revalidatePath("/dashboard/products");
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      error: "Failed to delete product.",
    };
  }
}

// Update an existing product
export async function updateProduct(id: number, formData: FormData): Promise<ActionResult> {
  const nama_produk = formData.get("nama_produk") as string;
  const harga = parseFloat(formData.get("harga") as string);
  const image_url = formData.get("image_url") as string | null;

  if (!nama_produk || isNaN(harga)) {
    return {
      error: "Invalid product data. Please check the form fields.",
    };
  }

  try {
    await prisma.products.update({
      where: {
        id_products: id,
      },
      data: {
        nama_produk,
        harga,
        image_url: image_url || "",
      },
    });

    revalidatePath("/dashboard/products");
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      error: "Failed to update product.",
    };
  }
}
