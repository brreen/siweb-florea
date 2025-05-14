// app/product-cus/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function FlowerShopPage() {
  const flowerProducts = [
    // HEBAT
    {
      id: 1,
      name: 'Sunset Charm',
      price: 'Rp 200.000',
      sold: 101,
      rating: 4.9,
      ratingCount: 99,
      image: '/SunsetCharm.png',
      description: 'Bunga Ini Menjadi Favorit Pelanggan Karena Keindahannya Yang Tahan Lama. Cocok Untuk Dijadikan Hiasan Rumah Atau Hadiah Spesial Untuk Orang Terkasih. Dengan Kualitas Premium Dan Harga Yang Bersaing, Tak Heran Jika Banyak Yang Memilih Bunga Ini Untuk Mempercantik Suasana.'
    },
    {
      id: 2,
      name: 'Royal Harmony',
      price: 'Rp 200.000',
      sold: 201,
      rating: 4.8,
      ratingCount: 109,
      image: '/RoyalHarmony.png',
      description: 'Bunga Ini Adalah Pilihan Sempurna Bagi Pecinta Bunga Dengan Warna Yang Cerah Dan Daya Tahan Yang Luar Biasa. Banyak Pelanggan Yang Menyukai Keharumannya Yang Lembut Serta Tampilannya Yang Elegan. Sempurna Untuk Acara Formal Maupun Dekorasi Sehari-Hari.'
    },
    {
      id: 3,
      name: 'Rosy Embrace',
      price: 'Rp 690.000',
      sold: 111,
      rating: 4.9,
      ratingCount: 100,
      image: '/RosyEmbrace.png',
      description: 'Bunga Dengan Kombinasi Warna Pink Yang Menawan Dan Kualitas Unggulan. Produk Ini Laris Di Pasaran Karena Memberikan Kesan Mewah Dan Anggun. Banyak Digunakan Sebagai Dekorasi Di Berbagai Acara, Dari Pernikahan Hingga Perayaan Lainnya.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f2eb]">
      {/* Navigation Bar */}

      {/* Product Display */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flowerProducts.map((product) => (
            <div key={product.id} className="rounded-lg overflow-hidden">
              {/* Product Image - using the same style as in product/page.tsx */}
              <div className="rounded-3xl overflow-hidden mb-4 bg-[#f0e9e0] aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Product Details */}
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-xl font-medium mt-1">{product.price}</p>
                <div className="flex items-center mt-1">
                  <p className="text-gray-500">Terjual {product.sold}</p>
                  <div className="flex items-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1">{product.rating}</span>
                    <span className="text-gray-500 ml-1">({product.ratingCount} Rating)</span>
                  </div>
                </div>
                
                {/* Product Description */}
                <p className="mt-4 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}