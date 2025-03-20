import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { IOrder, IOrderItem } from "@/types";
import Link from "next/link";

interface ShowOrderDetailsModalProps {
  order: IOrder;
  isOpen: boolean;
  onClose: () => void;
}

const ShowOrderDetailsModal: React.FC<ShowOrderDetailsModalProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg sm:rounded-lg bg-white p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Order Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-800 font-medium">
              <strong>Name:</strong> {order.user.name}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {order.user.email}
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> {order.user.phone}
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> {order.user.address.street},
              {order.user.address.city}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-800 font-medium">
              <strong>Medicine:</strong>
            </p>
            <div className="space-y-2">
              {order.items.map((item: IOrderItem, idx) => (
                <div key={idx} className="text-gray-600">
                  <p className="flex justify-between">
                    <span>
                      {typeof item.medicine === "object" &&
                      item.medicine !== null ? (
                        <Link href={`/medicines/${item.medicine._id}`}>
                          <strong>Name:</strong> {item.medicine.name}
                        </Link>
                      ) : (
                        <span>Invalid Medicine Data</span>
                      )}
                    </span>
                    <span>
                      <strong>Quantity:</strong> {item.quantity}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-800 font-medium">
              <strong>Total Price:</strong>{" "}
              {currencyFormatter(order.sub_total as number)}
            </p>
            <p className="text-gray-600">
              <strong>Order Placed Time:</strong>{" "}
              {new Date(order.createdAt || "").toLocaleString()}
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong> {order.status}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowOrderDetailsModal;
