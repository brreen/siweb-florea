// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // You could redirect to search results page:
    // router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  // Function to check if the link is active
  const isActive = (path: string) => {
    // Strip trailing slash for consistency
    const currentPath = pathname?.replace(/\/$/, '') || '';
    return currentPath.includes(path);
  };

  // Get link class based on active state
  const getLinkClass = (path: string) => {
    return isActive(path) 
      ? "font-bold border-b-2 border-black" 
      : "font-medium text-gray-500 hover:text-gray-800 transition-colors duration-200";
  };

  return (
    <nav className="py-6 px-12 bg-[#f8f3ea] flex justify-between items-center">
      {/* Logo on left */}
      <div className="flex items-center">
        <Image src="/logoflorea.png" alt="Florea logo" width={100} height={40} className="object-contain" />
      </div>
      
      {/* Navigation links centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-12">
        <Link href="/Customer/home-cus" className={getLinkClass('home-cus')}>Home</Link>
        <Link href="/Customer/product-cus" className={getLinkClass('product-cus')}>Product</Link>
        <Link href="/Customer/blog-cus" className={getLinkClass('blog-cus')}>Blog</Link>
        <Link href="/Customer/review-cus" className={getLinkClass('review-cus')}>Review</Link>
        <Link href="/Customer/about-cus" className={getLinkClass('about-cus')}>About Us</Link>
      </div>

      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-200 w-48 md:w-64"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          aria-label="Search"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </button>
      </form>
    </nav>
  );
}