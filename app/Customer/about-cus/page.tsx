'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  // Data pengembang dengan informasi gambar profil
  const developers = [
    {
      name: "Robin Jauhari",
      username: "Username",
      imageSrc: "/Profil.png", // Ganti dengan path gambar yang sebenarnya
      bgColor: "bg-green-500" // Fallback jika gambar gagal dimuat
    },
    {
      name: "Evan Abel Lesmana",
      username: "Username",
      imageSrc: "/Profil.png", // Ganti dengan path gambar yang sebenarnya
      bgColor: "bg-red-500" // Fallback jika gambar gagal dimuat
    },
    {
      name: "Berren Vesra Wibowo",
      username: "Username",
      imageSrc: "/Profil.png", // Ganti dengan path gambar yang sebenarnya
      bgColor: "bg-red-600" // Fallback jika gambar gagal dimuat
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f3e8]">
      {/* Navigation */}

      {/* Main Content */}
      <main className="px-8 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="md:col-span-5 space-y-6">
          {/* Developer Profiles Section */}
          <div className="bg-white rounded-3xl p-4">
            <h2 className="text-xl font-semibold mb-4">Developer Profiles</h2>
            
            {/* Map through developers array to render profiles */}
            {developers.map((developer, index) => (
              <div 
                key={index} 
                className={`flex items-center mb-6 pb-4 ${
                  index < developers.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4 relative">
                  {/* Use Next.js Image component with proper error handling */}
                  <Image
                    src={developer.imageSrc}
                    alt={`${developer.name} profile photo`}
                    fill
                    sizes="80px"
                    className="object-cover"
                    onError={(e) => {
                      // Fallback styling happens via CSS when image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback if image fails to load */}
                  <div className={`${developer.bgColor} w-full h-full absolute inset-0 flex items-center justify-center -z-10`}>
                    <span className="text-white text-xs">Profile Photo</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-500 text-sm">Username</p>
                  <p className="font-medium">{developer.name}</p>
                </div>
                <button className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Find Us Section */}
          <div className="bg-white rounded-3xl p-4">
            <h2 className="text-xl font-semibold mb-2">Find Us</h2>
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-gray-200 relative">
              {/* Replaced placeholder with actual map image */}
              <Image 
                src="/map.png" // Path to your map image in public folder
                alt="Our location on map"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                onError={(e) => {
                  // Fallback if map image fails to load
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const container = target.parentElement;
                  if (container) {
                    const fallback = document.createElement('div');
                    fallback.className = 'absolute inset-0 flex items-center justify-center text-gray-500';
                    fallback.innerHTML = 'Map location placeholder';
                    container.appendChild(fallback);
                  }
                }}
              />
              {/* Optional: Add a marker or overlay on the map */}
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
                <p className="text-sm font-medium">Floréa Shop</p>
                <p className="text-xs text-gray-600">Jl. Contoh No. 123, Jakarta</p>
              </div>
            </div>
          </div>

          {/* Our Store Section */}
          <div className="bg-white rounded-3xl p-4">
            <h2 className="text-xl font-semibold mb-2">Our Store</h2>
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-gray-100 relative">
              {/* Store image */}
              <Image 
                src="/Toko.png" // Ganti dengan path gambar toko yang sebenarnya
                alt="Our store"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 space-y-6">
          {/* Mission Section */}
          <div className="bg-white rounded-3xl p-6">
            <h2 className="text-xl font-semibold mb-2">MISI</h2>
            <p className="text-lg leading-relaxed">
              Menyebarkan Kebahagiaan Melalui Bucket Bunga Yang Indah Dan Bermakna Dengan Desain Kreatif, 
              Kualitas Terbaik, Layanan Prima, Serta Penggunaan Bahan Ramah Lingkungan, 
              Sehingga Setiap Momen Spesial Pelanggan Menjadi Lebih Berkesan.
            </p>
          </div>

          {/* Business Section */}
          <div className="bg-white rounded-3xl p-6">
            <h2 className="text-xl font-semibold mb-2">BISNIS KAMI</h2>
            <div className="mb-6">
              <p className="text-lg font-medium">Kami Menyediakan Bucket Bunga Dengan Pilihan Yang Lengkap</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xl font-bold">300+</p>
                <p className="text-sm text-gray-600">Jenis Bunga Yang Tersedia</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">500+</p>
                <p className="text-sm text-gray-600">Produk Yang Tersedia</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">99%</p>
                <p className="text-sm text-gray-600">Kota Terjangkau</p>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="text-center">
                <p className="text-xl font-bold">99%</p>
                <p className="text-sm text-gray-600">Pengiriman Tepat Waktu</p>
              </div>
              <div className="w-full bg-gray-200 h-1 rounded-full mt-2">
                <div className="bg-black h-1 rounded-full w-[99%]"></div>
              </div>
            </div>
          </div>

          {/* Contact Us Section - WhatsApp & Email */}
          <div className="bg-white rounded-3xl p-6">
            <h2 className="text-xl font-semibold mb-4">HUBUNGI KAMI</h2>
            
            {/* WhatsApp Contact */}
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium text-lg">WhatsApp</p>
                <a href="https://wa.me/6281221830798" className="text-green-600 hover:underline">+62 812-2183-0798</a>
              </div>
            </div>
            
            {/* Email Contact */}
            <div className="flex items-center">
              <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-lg">Email</p>
                <a href="mailto:florea@gmail.com" className="text-blue-600 hover:underline">florea@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-white rounded-3xl p-6">
            <h2 className="text-xl font-semibold mb-4">MEDIA SOSIAL</h2>
            <div className="flex justify-center gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-pink-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <p className="mt-2">@Floréa</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <p className="mt-2">@Floréa</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <p className="mt-2">@Floréa</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}