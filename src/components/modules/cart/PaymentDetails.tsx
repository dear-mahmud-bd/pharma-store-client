"use client";

import { useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { getProfileData } from "@/services/AuthService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  grandTotalSelector,
  orderedMedicinesSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { IOrder } from "@/types";

export default function PaymentDetails() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      prescription_img_url: "",
    },
  });

  const subTotal = useAppSelector(grandTotalSelector);

  const cartItems = useAppSelector(orderedMedicinesSelector);
  const hasPrescriptionRequired = cartItems.some(
    (item) => item.requiresPrescription
  );
  console.log(hasPrescriptionRequired);

  const shippingCost = cartItems.length > 0 ? 100 : 0;
  const discountAmount = 0;
  const grandTotal = subTotal + shippingCost - discountAmount;

  const currentUser = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getProfileData();
        reset({
          name: data?.data?.name || "",
          email: data?.data?.email || "",
          phone: data?.data?.phone || "",
          street: data?.data?.address?.street || "",
          city: data?.data?.address?.city || "",
          state: data?.data?.address?.state || "",
          zip: data?.data?.address?.zip || "",
          country: data?.data?.address?.country || "",
          prescription_img_url: "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (currentUser?.user) {
      fetchUserData();
    }
  }, [currentUser, reset]);

  const onSubmit = async (data: FieldValues) => {
    const orderData:IOrder = {
      user: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: {
          street: data.street,
          city: data.city,
          state: data.state,
          zip: data.zip,
          country: data.country,
        },
      },
      items: cartItems.map((item) => ({
        medicine: item._id,
        quantity: item.order_quantity,
      })),
    };
    if (hasPrescriptionRequired) {
      orderData.prescription_img_url = data.prescription_img_url;
    }

    console.log("CartItem : ", cartItems);
    console.log("Order Data:", orderData);
    toast.success("Order placed successfully!");
  };

  return (
    <>
      <div className="border-2 border-white bg-gray-300 brightness-105 rounded-2xl h-fit p-5 mb-5">
        <h1 className="text-lg md:text-2xl font-bold">Payment Details</h1>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between text-sm md:text-base">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-semibold">{currencyFormatter(subTotal)}</p>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <p className="text-gray-500">Discount</p>
            <p className="font-semibold">{currencyFormatter(discountAmount)}</p>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <p className="text-gray-500">Shipment Cost</p>
            <p className="font-semibold">{currencyFormatter(shippingCost)}</p>
          </div>
        </div>
        <div className="flex justify-between mt-10 mb-5 text-sm md:text-base">
          <p className="text-gray-500">Grand Total</p>
          <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
        </div>
      </div>

      <div className="p-5 border border-gray-300 rounded-xl bg-white">
        <h2 className="text-lg font-bold mb-4">Billing Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("name")} placeholder="Full Name" required />
          <Input
            {...register("email")}
            type="email"
            placeholder="Email"
            required
          />
          <Input
            {...register("phone")}
            type="tel"
            placeholder="Phone Number"
            required
          />
          <Input
            {...register("street")}
            placeholder="Street Address"
            required
          />
          <div className="grid grid-cols-3 gap-4">
            <Input {...register("city")} placeholder="City" required />
            <Input {...register("state")} placeholder="State" required />
            <Input {...register("zip")} placeholder="ZIP Code" required />
          </div>
          <Input {...register("country")} placeholder="Country" required />
          <Input
            {...register("prescription_img_url", {
              required: hasPrescriptionRequired,
              pattern: {
                value: /\.(jpeg|jpg|png|gif|bmp|webp)$/i,
                message:
                  "Please provide a valid image URL (jpeg, jpg, png, gif, bmp, webp)",
              },
            })}
            placeholder="Prescription Image URL (if required)"
          />

          {cartItems.length > 0 ? (
            <Button
              type="submit"
              className="w-full font-semibold text-white cursor-pointer py-3"
            >
              Confirm Order
            </Button>
          ) : (
            <Link href={`/medicines`}>
              <Button className="w-full text-white cursor-pointer">
                Shop Now
              </Button>
            </Link>
          )}
        </form>
      </div>
    </>
  );
}
