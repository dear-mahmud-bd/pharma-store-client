import { IMedicine } from "@/types";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const MedicineDetails = ({ medicine }: { medicine: IMedicine }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-xl border-gray-300 shadow-md my-5 w-full  mx-auto">
      <div className="flex justify-center">
        <Image
          src={medicine.medi_image}
          alt={medicine.name}
          width={500}
          height={500}
          className="rounded-md w-full object-cover max-h-80 sm:max-h-full"
        />
      </div>
      <Card className="bg-white p-6 rounded-md border-gray-200 w-full">
        <CardContent className="space-y-5">
          <h2 className="font-bold text-2xl mb-4 text-center md:text-left">
            {medicine.name}
          </h2>
          <p className="text-gray-600 text-sm text-justify">
            {medicine.description}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-between my-5 text-gray-500 text-xs gap-2">
            <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center gap-1">
              <Star className="w-4 h-4" fill="orange" stroke="orange" />
              {medicine.requiresPrescription
                ? "Prescription Required"
                : "No Prescription Needed"}
            </p>
            <p className="rounded-full px-4 py-1 bg-gray-100">
              Stock: {medicine.stock}
            </p>
            <p className="rounded-full px-4 py-1 bg-gray-100">
              Brand: {medicine.manufacturer.name}
            </p>
          </div>
          <hr />
          <p className="my-4 font-bold text-xl text-green-600 text-center md:text-left">
            Price: ${medicine.price}
          </p>
          <hr />
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="w-full sm:w-1/2">
              Add To Cart
            </Button>
            <Button className="w-full sm:w-1/2">Buy Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicineDetails;
