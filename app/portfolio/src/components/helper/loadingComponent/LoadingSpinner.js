import React from 'react';

const LoadingSpinner = () => {
  return (
    <div class="fixed top-0 left-0 w-full h-full z-10 bg-black opacity-30 flex items-center justify-center">
  <div class="w-8 h-8 border-4 border-gray-300 rounded-full animate-spin border-blue-600"></div>
</div>
  );
};

export default LoadingSpinner;