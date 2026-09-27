import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const GlobalLoading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#0d0e12] text-white">
      <Image
        src={logo}
        alt="Fitlog logo"
        width={40}
        height={40}
        className="object-contain animate-pulse"
      />
      <span className="loading loading-spinner loading-lg text-[#d4ff26]"></span>
      <p className="text-gray-400 text-sm font-medium">
        Loading...
      </p>
    </div>
  );
};

export default GlobalLoading;