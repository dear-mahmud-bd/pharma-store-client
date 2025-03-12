import AllMedicine from "@/components/modules/adminMedicineShop";
import { getAllMedicines } from "@/services/Medicine";
import React from "react";

const MedicineShopPage = async () => {
  const { data: medicines } = await getAllMedicines();
  return (
    <div className="mb-20">
      <AllMedicine medicines={medicines}></AllMedicine>
    </div>
  );
};

export default MedicineShopPage;
