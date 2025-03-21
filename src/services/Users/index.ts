"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/users`, {
      next: {
        tags: ["USERS"],
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

export const updateUserProfile = async (updatedData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/update-profile`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify(updatedData),
      }
    );
    revalidateTag("PROFILE");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateUserRole = async (userId: string, role: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users/${userId}/update-role`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify({ role }),
      }
    );
    revalidateTag("USERS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateUserStatus = async (userId: string, isBlocked: boolean) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users/${userId}/block-status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify({ isBlocked }),
      }
    );
    revalidateTag("USERS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateUserPassword = async (updatedData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/change-password`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify(updatedData),
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
