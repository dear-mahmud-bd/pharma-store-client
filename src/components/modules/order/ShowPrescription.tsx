import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IOrder } from "@/types";
import Image from "next/image";

interface ShowOrderDetailsModalProps {
  order: IOrder;
  isOpen: boolean;
  onClose: () => void;
}

const ShowPrescription: React.FC<ShowOrderDetailsModalProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg sm:rounded-lg bg-white p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Prescription Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {order?.prescription_img_url ? (
            <Image
              className="w-1/2"
              src={order?.prescription_img_url}
              height={100}
              width={100}
              alt="Prescription"
            />
          ) : (
            <p>No Prescription Needed</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowPrescription;
