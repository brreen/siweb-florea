// formulir-tmpro/page.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AddProductForm() {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    image: null,
    imagePreview: null
  });

  const handleInputChange = () => {
    setProductData({
      ...productData
    });
  };

  const handleSubmit = () => {
    // Here you would handle the form submission to save the product
    console.log('Product data to submit:', productData);
    // You would typically send this data to your API
  };

  return (
    <div className="min-h-screen flex">

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div className="flex items-center space-x-2">
            <span>Evan</span>
          </div>
          <div className="text-lg font-medium">Dashboard</div>
          <div className="flex items-center">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {/* Product Image */}
            <div className="mb-6 w-64 h-64 relative">
              {productData.imagePreview ? (
                <Image
                  src={productData.imagePreview}
                  alt="Product Preview"
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                  <label htmlFor="image-upload" className="cursor-pointer text-center">
                    <div className="text-gray-500">Click to upload image</div>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="w-full max-w-md">
              <div className="mb-4 flex items-center">
                <label className="block w-1/3 text-sm font-medium">Name:</label>
                <div className="w-2/3 flex items-center">
                  <input
                    type="text"
                    name="name"
                    value={productData.name}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Royal Harmony"
                  />
                  <button type="button" className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <label className="block w-1/3 text-sm font-medium">Price:</label>
                <div className="w-2/3 flex items-center">
                  <input
                    type="text"
                    name="price"
                    value={productData.price}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Rp 210.000"
                  />
                  <button type="button" className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end mt-8 space-x-4">
                <button 
                  type="button" 
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md text-black"
                >
                  No
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-green-500 rounded-md text-white"
                >
                  Yes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}