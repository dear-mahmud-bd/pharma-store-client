import FilterSidebar from "@/components/modules/medicine/filterSidebar";
import MedicineCard from "@/components/ui/core/MedicineCard";
import { getAllMedicines } from "@/services/Medicine";
import { IMedicine } from "@/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const MedicinesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { data: medicines } = await getAllMedicines(query);
  // console.log(medicines);

  return (
    <div className="mx-auto my-5">
      <div className="">
        <div className="">
          <FilterSidebar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {medicines?.map((medicine: IMedicine, idx: number) => (
            <MedicineCard key={idx} medicine={medicine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicinesPage;
