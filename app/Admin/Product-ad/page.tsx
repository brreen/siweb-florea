// This is a Server Component
import React from "react";
import Link from "next/link";
import { fetchProductsPrisma } from "@/app/lib/prisma";
import ProductTable from "./ProductTable";
import { Product } from "@/app/lib/definitions";

export default async function ProductPage() {
  let products: Product[] = [];

  try {
    products = await fetchProductsPrisma();
  } catch (err) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600 font-semibold">
          Gagal memuat data produk: {(err as Error).message}
        </div>
      </div>
    );
  }

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

      <ProductTable products={products} />
    </div>
  );
}
