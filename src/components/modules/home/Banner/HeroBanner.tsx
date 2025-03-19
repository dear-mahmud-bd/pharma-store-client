"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

const HeroBanner = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data:FieldValues) => {
    if (data.search.trim()) {
      router.push(`/medicines?search=${data.search.trim()}`);
      reset(); // Clear search field after submission
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center h-full">
      <div className="max-w-2xl text-center">
        <h2 className="text-lg text-green-800 font-semibold">
          Trusted Pharmaceuticals, Quality Healthcare
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mt-2">
          Welcome to Pharma
        </h1>
        <p className="text-white mt-4">
          Discover a wide range of effective medicines and healthcare products.
          Your well-being is our priority.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <input
            {...register("search")}
            type="text"
            placeholder="Find your medicines..."
            className="px-4 py-2 border rounded-lg outline-none w-64"
          />
          <button
            type="submit"
            className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Find
          </button>
        </form>
        <p className="mt-6">
          <Link
            href="/medicines"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Shop Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
