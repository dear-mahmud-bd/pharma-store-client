import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-full max-w-2xl p-12 mx-4 text-center border-2 border-gray-300 rounded-2xl">
        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full">
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold text-green-600">
          Payment Successful!
        </h1>

        <p className="mb-8 text-xl text-gray-700">
          Thank you for your purchase.
        </p>
        
        <div className="mt-12">
          <Link
            href={`/medicines`}
            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-green-600 rounded-lg hover:bg-green-700"
          >
            Shop More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
