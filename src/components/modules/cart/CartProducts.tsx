"use client";

import Image from "next/image";
import emptyCart from "@/app/assets/empty_cart.png";
import CartProductCard from "./CartProductCard";
import { useAppSelector } from "@/redux/hooks";
import { orderedMedicinesSelector } from "@/redux/features/cartSlice";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartProducts() {
  const medicines = useAppSelector(orderedMedicinesSelector);
  return (
    <div className="border-2 border-gray-200 rounded-2xl h-full p-4 space-y-5">
      {medicines.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="mt-2 text-sm md:text-base">
            Looks like your cart is on vacation—bring it back to work by adding
            some items!
          </p>
          <div className="flex justify-center items-center">
            <Image src={emptyCart} alt="empty cart" className="h-full" />
          </div>
          <Link href={`/medicines`}>
            <Button className="text-white cursor-pointer">Shop Now</Button>
          </Link>
        </div>
      )}
      {medicines?.map((product, idx) => (
        <CartProductCard key={idx} product={product} />
      ))}
    </div>
  );
}
