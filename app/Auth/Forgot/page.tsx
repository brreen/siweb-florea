// pages/forgot-password.tsx
import React from 'react';
import Link from 'next/link';

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f0e8] flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#3c2c1e]">Florea</h1>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-lg text-[#3c2c1e] mb-2" htmlFor="email">
              Masukkan kode dari email Anda
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md border-[#ddd] focus:ring-2 focus:ring-[#7f56d9] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg text-[#3c2c1e] mb-2" htmlFor="newPassword">
              Masukkan password baru
            </label>
            <input
              id="newPassword"
              type="password"
              placeholder="Password Baru"
              className="w-full px-4 py-2 border rounded-md border-[#ddd] focus:ring-2 focus:ring-[#7f56d9] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg text-[#3c2c1e] mb-2" htmlFor="confirmPassword">
              Konfirmasi password baru Anda
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Konfirmasi Password Baru"
              className="w-full px-4 py-2 border rounded-md border-[#ddd] focus:ring-2 focus:ring-[#7f56d9] focus:outline-none"
            />
          </div>

          <div className="text-sm text-[#3c2c1e]">
            <p>
              Kode belum masuk?{' '}
              <button className="text-[#7f56d9] hover:underline">Tekan untuk kirim ulang</button>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#7f56d9] text-white font-semibold rounded-md hover:bg-[#6b46c1] transition"
          >
            Konfirmasi
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
