// This is a Server Component
import React, { JSX } from "react";
import Link from "next/link";
import { fetchProductsPrisma } from "@/app/lib/prisma";
import ProductTable from "./ProductTable";
import { formatCurrency } from "@/app/lib/utils";

// Tentukan tipe data produk berdasarkan skema dari Prisma
type Product = {
  id_product: number; // atau string jika pakai UUID
  nama_produk: string;
  harga: number;
  image_url: string;
};

const formattedProducts = s.map((product: { id_product: any; nama_produk: any; harga: number; image_url: any; }) => ({
  id: product.id_product,
  nama_produk: product.nama_produk,
  harga: product.harga,
  harga_formatted: formatCurrency(product.harga),
  image_url: product.image_url,
}));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Katalog Produk</h1>
        <Link
          href="/dashboard/products/add"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Tambah Produk
        </Link>
      </div>

      {error ? (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <ProductTable products={products} />
      )}
    </div>
  );
}
