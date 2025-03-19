import MedicinesList from "@/components/modules/medicine/MedicinesList";
import FilterSidebar from "@/components/modules/medicine/filterSidebar";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const MedicinesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  return (
    <div className="mx-auto my-5">
      <div className="">
        <div className="">
          <FilterSidebar />
        </div>
        <MedicinesList searchParams={query} />
      </div>
    </div>
  );
};

export default MedicinesPage;
