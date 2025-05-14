'use client'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#f8f3ea] min-h-screen">
      <Head>
        <title>Florea - Perfect gifts for you</title>
        <meta name="description" content="Send flowers to your favorite people" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="flex px-12 py-16">
          {/* Left Side Content */}
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-8xl font-serif text-[#3c3835] mb-6">
              Perfect gifts<br />for you
            </h1>
            <p className="text-2xl text-gray-500 mb-8">
              Send To Your Favorite Human With The Best Flower<br />
              Send
            </p>
          </div>

          {/* Right Side Image */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-full h-[550px] overflow-hidden relative">
              <Image 
                src="/PeachPerfection.png" 
                alt="Flower Bouquet" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}