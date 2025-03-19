"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const getAllMedicines = async (
  page: string,
  limit: string,
  query?: {
    [key: string]: string | string[] | undefined;
  }
) => {
  const params = new URLSearchParams();
  if (query?.search) {
    params.append("search", query?.search.toString());
  }
  if (query?.category) {
    params.append("category", query?.category.toString());
  }
  if (query?.prescription) {
    params.append("prescription", query?.prescription.toString());
  }
  if (query?.sortOrder) {
    params.append("sortOrder", query?.sortOrder.toString());
  }
  if (query?.minPrice) {
    params.append("minPrice", query?.minPrice.toString());
  }
  if (query?.maxPrice) {
    params.append("maxPrice", query?.maxPrice.toString());
  }

  params.append("page", page);
  params.append("limit", limit);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine?${params}`,
      {
        next: {
          tags: ["MEDICINE"],
        },
      }
    );
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

export const updateAMedicine = async (
  medicine: FieldValues,
  medicineId: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${medicineId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify(medicine),
      }
    );
    revalidateTag("MEDICINE");
    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
