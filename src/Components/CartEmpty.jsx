import React from 'react';

export default function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="animate-spin mb-4">
        <svg
          className="w-12 h-12 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16z"
          ></path>
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-700">
        Oops! Your cart is empty.
      </h2>
      <p className="text-gray-500 mt-2">
        Please add some Products to display it here.
      </p>
    </div>
  );
}
