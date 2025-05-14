'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/Admin/home-ad' },
    { name: 'Product', path: '/Admin/Product-ad' },
    { name: 'Transaction Report', path: '/Admin/Transaction' },
  ];
  
  return (
    <div className="w-64 border-r border-gray-200 h-screen  bg-white">
      <div className="flex flex-col py-8 px-6 space-y-12">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-xl font-serif ${
              pathname === item.path ? 'font-medium text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}