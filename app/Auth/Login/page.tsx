'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin123' && password === '12345') {
      router.push('/Admin/home-ad'); // Redirect to admin dashboard
    } else if (username === 'user123' && password === '12345') {
      router.push('/Customer/home-cus'); // Redirect to user dashboard
    } else {
      setErrorMessage('Username or password is incorrect.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f7f0e8]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-[#3c2c1e]">Florea</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#7f56d9] text-white font-semibold rounded-md hover:bg-[#6b46c1] transition"
          >
            LOGIN
          </button>
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
          )}
          
          <div className="mt-4 text-right">
            <Link href="/Auth/Forgot">
            Forgot password?
            </Link>
          </div>
        
          <div className="mt-4 text-center">
          <p className="text-sm text-[#3c2c1e]">
            Belum punya akun? {' '}
            <Link href="/Auth/Register">
            Buat akun
            </Link>
          </p>
          </div>
          {/* <div className="flex justify-between items-center mt-4">
            <a href="/Auth/Forgot" className="text-[#6d9dff] text-sm">Forgot password?</a>
            <a href="/Auth/Register" className="text-[#6d9dff] text-sm">belum punya akun? Buat akun</a>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
