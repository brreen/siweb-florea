// app/product/rustic-bloom-box/page.jsx
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function RusticBloomBoxPage() {
  const [quantity, setQuantity] = useState(2);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const price = 800000;
  const totalPrice = price * quantity;

  return (
    <div className="min-h-screen bg-[#f8f3ea] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Product Section */}
        <div className="flex flex-col md:flex-row gap-8 pt-4">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/RusticBloomBox.png"
                alt="Rustic Bloom Box"
                width={500}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800">Rustic Bloom Box</h1>
            <p className="text-2xl font-medium mt-2 text-gray-800">Rp 800.000</p>

            {/* Flower Composition Section */}
            <div className="mt-6">
              <h2 className="flex items-center text-lg font-medium">
                <span className="mr-2">🌸</span> Komposisi Bunga:
              </h2>
              <ul className="mt-2 space-y-1 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span> Mawar Lokal Warna Nude & Peach
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Eustoma Putih
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Baby's Breath
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Daun Eucalyptus
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Aksen Dried Flowers Untuk Nuansa Rustic
                </li>
              </ul>
            </div>

            {/* Packaging Section */}
            <div className="mt-6">
              <h2 className="flex items-center text-lg font-medium">
                <span className="mr-2">📦</span> Kemasan:
              </h2>
              <ul className="mt-2 space-y-1 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span> Box Kayu Natural Premium
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Pita Satin Earthy Tone
                </li>
              </ul>
            </div>

            {/* Order Section */}
            <div className="mt-12 p-6 bg-amber-100/50 rounded-lg border border-amber-200">
              <div className="flex items-center justify-between mb-4">
                {/* Quantity Selector */}
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-600 rounded-l"
                  >
                    −
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-12 h-10 text-center border-t border-b border-gray-300 bg-white"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-600 rounded-r"
                  >
                    +
                  </button>
                  
                  <span className="ml-4 text-gray-800">Stok: 99</span>
                </div>

                <button className="px-8 py-3 bg-white text-gray-800 rounded-md font-medium hover:bg-gray-100 transition">
                  Pesan
                </button>
              </div>

              {/* Total Price */}
              <div className="text-xl font-medium text-gray-800">
                Rp {totalPrice.toLocaleString('id-ID')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}