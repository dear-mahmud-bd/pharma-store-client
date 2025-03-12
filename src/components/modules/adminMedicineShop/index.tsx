"use client";

import { NMTable } from "@/components/ui/core/MTable/index";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IMedicine } from "@/types";
import { deleteSingleMedicine } from "@/services/Medicine";
import { toast } from "sonner";

const AllMedicine = ({ medicines }: { medicines: IMedicine[] }) => {
  const router = useRouter();

  const handleView = (medicine: IMedicine) => {
    router.push(`/medicines/${medicine._id}`);
  };

  const handleDelete = async (medicineId: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this medicine?");
    if (!isConfirmed) return;
  
    try {
      const res = await deleteSingleMedicine(medicineId);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  

  const columns: ColumnDef<IMedicine>[] = [
    {
      accessorKey: "name",
      header: "Medicine Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.medi_image}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "manufacturer",
      header: "Manufacturer",
      cell: ({ row }) => (
        <div>
          <div>{row.original.manufacturer.name}</div>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>${row.original.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => <span>{row.original.stock}</span>,
    },
    {
      accessorKey: "expiryDate",
      header: "Expiry Date",
      cell: ({ row }) => (
        <span>{new Date(row.original.expiryDate).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
            title="View"
            onClick={() => handleView(row.original)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-green-500 cursor-pointer"
            title="Edit"
            onClick={() =>
              router.push(`/admin/medicine-shop/manage-medicine/${row.original._id}`)
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500 cursor-pointer"
            title="Delete"
            onClick={() => handleDelete(row.original._id as string)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">All Medicines</h1>
        <div className="flex items-center gap-2">
          <Button
            className="cursor-pointer text-white"
            onClick={() => router.push("/admin/medicine-shop/add-medicine")}
            size="sm"
          >
            Add Medicine
          </Button>
        </div>
      </div>
      <NMTable columns={columns} data={medicines || []} />
      {/* <TablePagination totalPage={meta?.totalPage} /> */}
    </div>
  );
};

export default AllMedicine;
