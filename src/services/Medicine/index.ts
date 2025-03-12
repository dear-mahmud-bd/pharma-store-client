"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const getAllMedicines = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/medicine`, {
      next: {
        tags: ["MEDICINE"],
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleMedicine = async (medicineId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${medicineId}`,
      {
        next: {
          tags: ["MEDICINE"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const deleteSingleMedicine = async (medicineId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${medicineId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
      }
    );
    revalidateTag("MEDICINE");
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const addAMedicine = async (medicine: FieldValues): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/medicine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
      },
      body: JSON.stringify(medicine),
    });
    revalidateTag("MEDICINE");
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateAMedicine = async (medicine: FieldValues, medicineId:string): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/medicine/${medicineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
      },
      body: JSON.stringify(medicine),
    });
    revalidateTag("MEDICINE");
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
