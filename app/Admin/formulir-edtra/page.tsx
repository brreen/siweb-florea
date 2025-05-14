// Transaction/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function TransactionDashboard() {
  const [transactionId, setTransactionId] = useState('805123456789111');
  const [transactionType, setTransactionType] = useState('Debit');
  const [totalPrice, setTotalPrice] = useState('Rp 1.299.000');
  const [transactionDate, setTransactionDate] = useState('12 - 10 - 2024');
  const [inputAmount, setInputAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      transactionId,
      transactionType,
      totalPrice,
      transactionDate,
      inputAmount
    });
  };

  const handleEditClick = (field: string) => {
    console.log(`Editing ${field}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span>Evan</span>
        </div>
        <div className="flex items-center">
          <button className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sub Header */}
      <div className="border-b p-4 flex items-center">
        <Link href="/Admin/Transaction" className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-center flex-1 font-medium">Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">

        {/* Form */}
        <main className="flex-1 p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="transactionId" className="block font-medium mb-1">Id Transaction:</label>
              <div className="flex items-center">
                <span className="text-gray-800 text-lg">{transactionId}</span>
                <button 
                  type="button" 
                  className="ml-2"
                  onClick={() => handleEditClick('transactionId')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="transactionType" className="block font-medium mb-1">Transaction Type:</label>
              <div className="flex items-center">
                <span className="text-gray-800 text-lg">{transactionType}</span>
                <button 
                  type="button" 
                  className="ml-2"
                  onClick={() => handleEditClick('transactionType')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="totalPrice" className="block font-medium mb-1">Total Price:</label>
              <div className="flex items-center">
                <span className="text-gray-800 text-lg">{totalPrice}</span>
                <button 
                  type="button" 
                  className="ml-2 mr-2"
                  onClick={() => handleEditClick('totalPrice')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex border rounded">
                  <span className="bg-gray-100 px-3 py-2 border-r">Rp</span>
                  <input
                    type="text"
                    className="p-2 w-64"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <label htmlFor="transactionDate" className="block font-medium mb-1">Transaction Date:</label>
              <div className="flex items-center">
                <span className="text-gray-800 text-lg">{transactionDate}</span>
                <button 
                  type="button" 
                  className="ml-2"
                  onClick={() => handleEditClick('transactionDate')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button 
                type="button" 
                className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                No
              </button>
              <button 
                type="submit" 
                className="px-6 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                Yes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}