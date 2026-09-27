import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#0d0e12] text-white">
      <span className="loading loading-spinner loading-lg text-[#d4ff26]"></span>
      <p className="text-gray-400 text-sm font-medium">
        Loading workout details...
      </p>
    </div>
  );
};

export default Loading;