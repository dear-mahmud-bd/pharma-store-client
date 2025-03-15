import Link from "next/link";
import React from "react";

const Fail = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-full max-w-2xl p-12 mx-4 text-center border-2 border-gray-300 rounded-2xl">
        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-red-100 rounded-full">
          <svg
            className="w-12 h-12 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold text-red-600">
          Payment Failed!
        </h1>

        <p className="mb-8 text-xl text-gray-700">
          Oops! Something went wrong. Please try again.
        </p>
        
        <div className="mt-12">
          <Link
            href={`/cart`}
            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fail;
