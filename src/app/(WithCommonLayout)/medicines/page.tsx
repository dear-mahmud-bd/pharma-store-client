import MedicineCard from "@/components/ui/core/MedicineCard";
import { getAllMedicines } from "@/services/Medicine";
import { IMedicine } from "@/types";

const MedicinesPage = async () => {
  const { data: medicines } = await getAllMedicines();
  // console.log(medicines);

  return (
    <div className="mx-auto">
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {medicines?.map((medicine: IMedicine, idx: number) => (
          <MedicineCard key={idx} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default MedicinesPage;
