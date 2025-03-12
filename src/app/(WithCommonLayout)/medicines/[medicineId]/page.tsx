import MedecineDetails from "@/components/modules/medicine/medicineDetails";
import { getSingleMedicine } from "@/services/Medicine";

const MedicineDetailsPage = async ({
  params,
}: {
  params: Promise<{ medicineId: string }>;
}) => {
  const { medicineId } = await params;
  const { data: medicine } = await getSingleMedicine(medicineId);

  return (
    <div>
      <MedecineDetails medicine={medicine}></MedecineDetails>
    </div>
  );
};

export default MedicineDetailsPage;
