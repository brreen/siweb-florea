// app/product-cus/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function FlowerShopReviewPage() {
  const reviews = [
    {
      id: 1,
      name: 'Robin',
      daysAgo: '4 Hari Lalu',
      rating: 5,
      comment: '"Bunganya Sangat Indah Dan Segar! Pengiriman Cepat, Dan Pelayanan Sangat Ramah. Pasti Akan Membeli Lagi!"',
      avatar: '/Profil.png'
    },
    {
      id: 2,
      name: 'Berren',
      daysAgo: '2 Hari Lalu',
      rating: 3,
      comment: '"Bunganya Cukup Bagus, Tapi Pengirimannya Agak Lama. Harap Bisa Ditingkatkan Lagi Ke Depannya."',
      avatar: '/Profil.png'
    },
    {
      id: 3,
      name: 'Evan',
      daysAgo: '7 Hari Lalu',
      rating: 4,
      comment: '"Layanan Luar Biasa! Bunga Dikemas Dengan Baik Dan Sesuai Dengan Foto. Sangat Puas Dengan Kualitasnya, Tapi Pengirimannya Lama."',
      avatar: '/Profil.png'
    },
    {
      id: 4,
      name: 'Dadang',
      daysAgo: '1 Tahun Lalu',
      rating: 1,
      comment: '"Sayangnya, Pengalaman Saya Kurang Baik. Bunga Datang Dalam Kondisi Kurang Segar Dan Pengiriman Sangat Lama."',
      avatar: '/Profil.png'
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-[#f7f2eb]">
      {/* Navigation Bar */}


      {/* Reviews Display */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16">
          {reviews.map((review) => (
            <div key={review.id} className="flex">
              {/* User Avatar */}
              <div className="mr-6">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt={`${review.name}'s avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Review Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold">{review.name}</h3>
                <p className="text-gray-600 mt-1">{review.daysAgo}</p>
                
                {/* Star Rating */}
                <div className="flex mt-1">
                  {renderStars(review.rating)}
                </div>
                
                {/* Review Comment */}
                <p className="mt-4 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}