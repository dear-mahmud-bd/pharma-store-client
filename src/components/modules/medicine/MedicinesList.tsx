"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MedicineCard from "@/components/ui/core/MedicineCard";
import { getAllMedicines } from "@/services/Medicine";
import { IMedicine } from "@/types";

const MedicinesList = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [medicines, setMedicines] = useState<IMedicine[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  const queryString = JSON.stringify(searchParams);
  useEffect(() => {
    setPage(1);
    setMedicines([]);
    setHasMore(true);
  }, [queryString]);

  useEffect(() => {
    const fetchMedicines = async () => {
      const { data } = await getAllMedicines(
        page.toString(),
        "9",
        searchParams
      );
      if (data?.medicines?.length === 0) {
        setHasMore(false);
      } else {
        setMedicines((prev) => [...prev, ...data.medicines]);
      }
    };

    if (inView && hasMore) {
      fetchMedicines();
    }
  }, [inView, page, hasMore, searchParams]);
  useEffect(() => {
    if (inView && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore]);

  return (
    <div className="mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {medicines.map((medicine: IMedicine, idx: number) => (
          <MedicineCard key={idx} medicine={medicine} />
        ))}
      </div>
      {hasMore && (
        <div ref={ref} className="h-10 flex items-center justify-center my-5">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicinesList;
