"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const getAllOrders = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/order`, {
      next: {
        tags: ["ORDERS"],
      },
      headers: {
        Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/${orderId}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify({ status }),
      }
    );
    revalidateTag("ORDERS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getMyAllOrders = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      next: {
        tags: ["ORDERS"],
      },
      headers: {
        Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const initializationOrderWithPayment = async (orders: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/initiate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify(orders),
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
