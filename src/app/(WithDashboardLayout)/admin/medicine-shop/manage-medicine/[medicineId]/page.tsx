import UpdateMedicineForm from "@/components/modules/adminMedicineShop/UpdateMedicineForm";
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
      Update Medicine Things
      <UpdateMedicineForm medicine={medicine}></UpdateMedicineForm>
    </div>
  );
};

export default MedicineDetailsPage;
