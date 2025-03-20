"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { MTable } from "@/components/ui/core/MTable/index";
import { IOrder } from "@/types";
import ShowOrderDetailsModal from "./ShowOrderDetailsModal";
import { updateOrderStatus } from "@/services/Orders";
import { toast } from "sonner";
import { currencyFormatter } from "@/lib/currencyFormatter";

const MyOrders = ({ orders }: { orders: IOrder[] }) => {
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleView = (order: IOrder) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to cancle your order?"
    );
    if (!isConfirmed) return;
    // console.log("Updating order", orderId, "to", newStatus);
    try {
      const res = await updateOrderStatus(orderId, newStatus);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Failed to update order status", error);
    }
  };

  const columns: ColumnDef<IOrder>[] = [
    {
      accessorKey: "user.name",
      header: "Name",
      cell: ({ row }) => <span>{row.original.user.name}</span>,
    },
    {
      accessorKey: "user.email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.user.email}</span>,
    },
    {
      accessorKey: "sub_total",
      header: "Total Price",
      cell: ({ row }) => (
        <span>{currencyFormatter(row.original.sub_total as number)}</span>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Order Placed Time",
      cell: ({ row }) => (
        <span>{new Date(row.original.createdAt || "").toLocaleString()}</span>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <select
          className={`border p-2 rounded ${
            row.original.status === "delivered" ||
            row.original.status === "canceled"
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
          value={row.original.status}
          disabled={
            row.original.status === "canceled" ||
            row.original.status === "delivered"
          }
          onChange={(e) =>
            handleStatusChange(row.original._id as string, e.target.value)
          }
        >
          <option
            value="pending"
            disabled={
              row.original.status === "pending" ||
              row.original.status === "shipped" ||
              row.original.status === "processing"
            }
          >
            Pending
          </option>
          <option value="processing" disabled>
            Processing
          </option>
          <option value="shipped" disabled>
            Shipped
          </option>
          <option value="delivered" disabled>
            Delivered
          </option>
          <option
            value="canceled"
            disabled={
              row.original.status === "shipped" ||
              row.original.status === "processing"
            }
          >
            Canceled
          </option>
        </select>
      ),
    },
    {
      accessorKey: "payment",
      header: "Payment",
      cell: ({ row }) => (
        <span
          className={`p-2 rounded ${
            row.original.status === "pending" ||
            row.original.status === "canceled"
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {row.original.status === "pending" ||
          row.original.status === "canceled"
            ? "Fail"
            : "Successful"}
        </span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <button
          className="text-gray-500 hover:text-blue-500 cursor-pointer"
          title="View"
          onClick={() => handleView(row.original)}
        >
          <Eye className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">All Orders</h1>
      <MTable columns={columns} data={orders || []} />

      {selectedOrder && (
        <ShowOrderDetailsModal
          order={selectedOrder}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default MyOrders;
