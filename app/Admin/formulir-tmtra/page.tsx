// Transaction/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function TransactionDashboard() {
  const [transactionId, setTransactionId] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [transactionDate, setTransactionDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the transaction submission
    console.log({
      transactionId,
      transactionType,
      totalPrice,
      transactionDate
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
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
            <div className="mb-4">
              <label htmlFor="transactionId" className="block font-medium mb-1">Id Transaction:</label>
              <input
                type="text"
                id="transactionId"
                className="w-full border rounded p-2"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="transactionType" className="block font-medium mb-1">Transaction Type:</label>
              <input
                type="text"
                id="transactionType"
                className="w-full border rounded p-2"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="totalPrice" className="block font-medium mb-1">Total Price:</label>
              <input
                type="text"
                id="totalPrice"
                className="w-full border rounded p-2"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="transactionDate" className="block font-medium mb-1">Transaction Date:</label>
              <input
                type="text"
                id="transactionDate"
                className="w-full border rounded p-2"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              <button type="button" className="px-4 py-2 rounded bg-gray-200 text-black">No</button>
              <button type="submit" className="px-4 py-2 rounded bg-green-500 text-white">Yes</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}