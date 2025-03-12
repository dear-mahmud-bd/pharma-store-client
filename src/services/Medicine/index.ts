"use server";

//get all categories
export const getAllMedicines = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/medicine`);
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleMedicine = async (medicineId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${medicineId}`
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
