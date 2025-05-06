"use client";

import { IMedicine } from "@/types";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { addMedicine } from "@/redux/features/cartSlice";
import { toast } from "sonner";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";

const MedicineDetails = ({ medicine }: { medicine: IMedicine }) => {
  // console.log(medicine);
  const dispatch = useAppDispatch();
  const handleAddMedicine = (medicine: IMedicine) => {
    dispatch(addMedicine(medicine));
    toast.success(`${medicine.name} added to the cart`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-xl border-gray-300 shadow-md my-5 w-full  mx-auto">
      <div className="flex justify-center">
        <Image
          src={medicine?.medi_image}
          alt={medicine?.name}
          width={800}
          height={800}
          className="rounded-md object-none w-full h-96 sm:max-h-full"
        />
      </div>
      <Card className="bg-white p-6 rounded-md border-gray-200 w-full">
        <CardContent className="space-y-7">
          <h2 className="font-bold text-2xl mb-4 text-center md:text-left">
            {medicine?.name}
          </h2>
          <h2 className="text-lg mb-4 text-center md:text-left">
            Type: {medicine?.category}
          </h2>
          <p className="text-gray-600 text-sm text-justify">
            {medicine?.description}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-between my-5 text-gray-500 text-xs gap-2">
            <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center gap-1">
              <Star className="w-4 h-4" fill="orange" stroke="orange" />
              {medicine?.requiresPrescription
                ? "Prescription Required"
                : "No Prescription Needed"}
            </p>
            <p className="rounded-full px-4 py-1 bg-gray-100">
              Stock: {medicine?.stock}
            </p>
            <p className="rounded-full px-4 py-1 bg-gray-100">
              Brand: {medicine?.manufacturer.name}
            </p>
          </div>
          <hr />
          <p className="my-4 font-bold text-xl text-green-600 text-center md:text-left">
            {currencyFormatter(medicine?.price)}
          </p>
          <hr />
          <h2 className="text-lg mb-4 text-center text-gray-500 font-bold md:text-left">
            Expire Data: {new Date(medicine?.expiryDate).toLocaleDateString()}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {medicine?.stock > 0 ? (
              <>
                <Button
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => handleAddMedicine(medicine)}
                >
                  Add to Cart
                </Button>
                <Link href={`/cart`} className=" text-white w-full">
                  <Button
                    className="cursor-pointer"
                    onClick={() => handleAddMedicine(medicine)}
                  >
                    Buy Now
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button className="w-full cursor-pointer text-white">Out of Stock</Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicineDetails;
