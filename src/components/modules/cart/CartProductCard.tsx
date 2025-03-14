"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  decrementOrderQuantity,
  incrementOrderQuantity,
  removeMedicine,
} from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IMedicine } from "@/types";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function CartProductCard({ product }: { product: IMedicine }) {
  const dispatch = useAppDispatch();

  const handleIncrementQuantity = () => {
    dispatch(incrementOrderQuantity(product._id));
  };
  const handleDecrementQuantity = () => {
    dispatch(decrementOrderQuantity(product._id));
  };
  const handleRemoveQuantity = () => {
    dispatch(removeMedicine(product._id));
  };

  const subTotal = Number(product?.order_quantity) * product.price;
  return (
    <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row p-5 gap-3">
      <div className="w-full md:w-28 rounded-md overflow-hidden">
        <Image
          src={product?.medi_image}
          height={200}
          width={200}
          alt="product"
          className="w-full md:h-full md:w-auto object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">{product?.name}</h1>
            <div className="flex gap-2 md:gap-3 my-2 text-sm md:text-base">
              <p>
                <span className="text-gray-500">Stock Availability:</span>{" "}
                <span className="font-semibold">{product?.stock}</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-sm md:text-base">
              Unit Price:{" "}
              <strong className="font-semibold">
                {currencyFormatter(product?.price)}
              </strong>
            </h2>
          </div>
        </div>
        <hr className="my-1" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-sm md:text-base">
            Total:{" "}
            <strong className="font-semibold">
              {currencyFormatter(subTotal)}
            </strong>
          </h2>
          <div className="flex items-center gap-2 mt-3 md:mt-0">
            <p className="text-gray-500 font-semibold text-sm md:text-base">
              Quantity
            </p>
            <Button
              onClick={handleDecrementQuantity}
              variant="outline"
              className="size-8 rounded-sm cursor-pointer"
            >
              <Minus />
            </Button>
            <p className="font-semibold text-lg p-2">{product?.order_quantity}</p>
            <Button
              onClick={handleIncrementQuantity}
              variant="outline"
              className="size-8 rounded-sm cursor-pointer"
            >
              <Plus />
            </Button>
            <Button
              onClick={handleRemoveQuantity}
              variant="outline"
              className="size-8 rounded-sm cursor-pointer"
            >
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
