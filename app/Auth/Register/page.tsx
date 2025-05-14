// pages/register.tsx
import React from 'react';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f0e8] flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#3c2c1e]">Florea</h1>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-lg text-[#3c2c1e] mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md border-[#ddd] focus:ring-2 focus:ring-[#7f56d9] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg text-[#3c2c1e] mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md border-[#ddd] focus:ring-2 focus:ring-[#7f56d9] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg text-[#3c2c1e] mb-2" htmlFor="passwordConfirmation">
              Password Confirmation
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md border-[#ddd] focus:ring-2 focus:ring-[#7f56d9] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg text-[#3c2c1e] mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md border-[#ddd] focus:ring-2 focus:ring-[#7f56d9] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#7f56d9] text-white font-semibold rounded-md hover:bg-[#6b46c1] transition"
          >
            Daftar
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-[#3c2c1e]">
            Sudah punya akun?{' '}
            <Link href="/Auth/Login">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
