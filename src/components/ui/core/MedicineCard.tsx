"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IMedicine } from "@/types";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { addMedicine } from "@/redux/features/cartSlice";
import { toast } from "sonner";
import { currencyFormatter } from "@/lib/currencyFormatter";

const MedicineCard = ({ medicine }: { medicine: IMedicine }) => {
  // console.log(medicine);
  const dispatch = useAppDispatch();
  const handleAddMedicine = (medicine: IMedicine) => {
    dispatch(addMedicine(medicine));
    toast.success(`${medicine.name} added to the cart`);
  };

  return (
    <Card className="w-full text-center border-gray-300 shadow-md p-4 mx-auto">
      <Image
        width={800}
        height={800}
        src={medicine.medi_image}
        alt={medicine.name}
        className="w-full h-full object-cover rounded-md"
      />
      <CardContent>
        <Link href={`/medicines/${medicine?._id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mt-3">
            {medicine.name}
          </h3>
        </Link>
        <p className="text-xl font-bold text-green-600">
          {currencyFormatter(medicine.price)}
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {medicine?.stock > 0 ? (
            <>
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => handleAddMedicine(medicine)}
              >
                Add to Cart
              </Button>
              <Link href={`/cart`} className=" text-white">
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
              <Button className="w-full text-white">Out of Stock</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicineCard;
