// app/product/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function ProductPage() {
  // Product data
  const products = [
    {
      id: 1,
      name: 'Rustic Bloom Box',
      price: 'Rp 800.000',
      image: "/RusticBloomBox.png",
    },
    {
      id: 2,
      name: 'Lavender Serenity',
      price: 'Rp 650.000',
      image: '/LavenderSerenity (1).png',
    },
    {
      id: 3,
      name: 'Blushing Elegance',
      price: 'Rp 850.000',
      image: '/BlushingElegance.png',
    },
    {
      id: 4,
      name: 'Peach Perfection',
      price: 'Rp 750.000',
      image: '/PeachPerfection.png',
    },
    {
      id: 5,
      name: 'Pastel Dreams',
      price: 'Rp 700.000',
      image: '/PastelDreams.png',
    },
    {
      id: 6,
      name: 'Classic Arrangement',
      price: 'Rp 900.000',
      image: '/ClassicArrangement.png',
    },
  ];

  return (
    <div className="bg-[#f8f3ea] min-h-screen pb-16">
      <div className="container mx-auto px-12 mt-6">
        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
            href = '/Customer/detail-cus'>
            <div key={product.id} className="flex flex-col">
            <div className="rounded-3xl overflow-hidden mb-4 bg-[#f0e9e0] aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-lg">{product.price}</p>
              </div>
              <button className="bg-transparent border-none">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10H5V7H3V10H0V12H3V15H5V12H8V10Z"
                    fill="black"
                    transform="translate(16, 0) scale(0.8)"
                  />
                  <path
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
}