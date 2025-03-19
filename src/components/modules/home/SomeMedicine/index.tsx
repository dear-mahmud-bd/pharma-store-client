import MedicineCard from "@/components/ui/core/MedicineCard";
import { getAllMedicines } from "@/services/Medicine";
import { IMedicine } from "@/types";
import Link from "next/link";

const SomeMedicine = async () => {
  const {
    data: { medicines },
  } = await getAllMedicines("1", "6");

  return (
    <div className="mb-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Featured Medicines</h2>
        <p className="text-gray-600 mt-2">
          Explore some of our top-selling medicines handpicked for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {medicines?.slice(0, 6).map((medicine: IMedicine, idx: number) => (
          <MedicineCard key={idx} medicine={medicine} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link
          href="/medicines"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
        >
          Show All Medicines
        </Link>
      </div>
    </div>
  );
};

export default SomeMedicine;
