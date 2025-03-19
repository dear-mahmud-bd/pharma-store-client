"use client";

import { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { getProfileData } from "@/services/AuthService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  clearCart,
  grandTotalSelector,
  orderedMedicinesSelector,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { IOrder } from "@/types";
import { initializationOrderWithPayment } from "@/services/Orders";

export default function PaymentDetails() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
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
  // console.log(hasPrescriptionRequired);

  const shippingCost = cartItems.length > 0 ? 100 : 0;
  const discountAmount = 0;
  const grandTotal = subTotal + shippingCost - discountAmount;

  const [fechedUser, setFechedUser] = useState(null);
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
        setFechedUser(data?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (currentUser?.user) {
      fetchUserData();
    }
  }, [currentUser, reset]);

  // console.log("user now: ", fechedUser);

  const onSubmit = async (data: FieldValues) => {
    const orderLoading = toast.loading("Order is being placed");
    const orderData: IOrder = {
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

    try {
      const res = await initializationOrderWithPayment(orderData);
      // console.log(res);
      if (res.success) {
        toast.success("Order request successfully!", { id: orderLoading });
        dispatch(clearCart());
        window.location.replace(res.url);
      }
    } catch (error) {
      console.error(error);
    }
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
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email",
              },
            })}
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <Input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}

          <Input
            {...register("street", { required: "Street address is required" })}
            placeholder="Street Address"
          />
          {errors.street && (
            <p className="text-red-500 text-sm">{errors.street.message}</p>
          )}

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Input
                {...register("city", { required: "City is required" })}
                placeholder="City"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register("state", { required: "State is required" })}
                placeholder="State"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register("zip", { required: "ZIP Code is required" })}
                placeholder="ZIP Code"
              />
              {errors.zip && (
                <p className="text-red-500 text-sm">{errors.zip.message}</p>
              )}
            </div>
          </div>

          <Input
            {...register("country", { required: "Country is required" })}
            placeholder="Country"
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}

          <Input
            {...register("prescription_img_url", {
              required: hasPrescriptionRequired
                ? "Prescription image is required"
                : false,
              pattern: {
                value: /\.(jpeg|jpg|png|gif|bmp|webp)$/i,
                message:
                  "Please provide a valid image URL (jpeg, jpg, png, gif, bmp, webp) \n For testing 'https://i.ibb.co.com/rK7FSMm0/presentation.png'",
              },
            })}
            placeholder="Prescription Image URL (if required)"
          />
          {errors.prescription_img_url && (
            <p className="text-red-500 text-sm">
              {errors.prescription_img_url.message}
            </p>
          )}

          {cartItems.length > 0 ? (
            fechedUser !== null ? (
              <Button
                type="submit"
                className="w-full font-semibold text-white cursor-pointer py-3"
              >
                Confirm Order
              </Button>
            ) : (
              <Link href={`/login`}>
                <Button className="w-full text-white cursor-pointer">
                  Please Log In First
                </Button>
              </Link>
            )
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
