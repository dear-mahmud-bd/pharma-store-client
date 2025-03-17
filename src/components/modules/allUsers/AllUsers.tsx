"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Ban, CheckCircle } from "lucide-react";
import { MTable } from "@/components/ui/core/MTable/index";
import { IProfile } from "@/types";
// import { updateUserStatus } from "@/services/Users";
import { toast } from "sonner";
import UserDetailsModal from "./UserDetailsModal";
import { Button } from "@/components/ui/button";
import { updateUserRole, updateUserStatus } from "@/services/Users";

const AllUsers = ({ users }: { users: IProfile[] }) => {
  const [selectedUser, setSelectedUser] = useState<IProfile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleView = (user: IProfile) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleRoleChange = async (userId: string, name: string) => {
    const confirmationMessage = `Are you sure you want to make '${name}' as admin?`;
    const isConfirmed = window.confirm(confirmationMessage);
    if (!isConfirmed) return;
    try {
      const res = await updateUserRole(userId, "admin");
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Failed to update user status", error);
      toast.error("Something went wrong!");
    }
  };

  const handleStatusChange = async (userId: string, isBlocked: boolean) => {
    const confirmationMessage = isBlocked
      ? "Are you sure you want to unblock this user?"
      : "Are you sure you want to block this user?";
    const isConfirmed = window.confirm(confirmationMessage);
    if (!isConfirmed) return;
    try {
      const res = await updateUserStatus(userId, !isBlocked);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Failed to update user status", error);
      toast.error("Something went wrong!");
    }
  };

  const columns: ColumnDef<IProfile>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <Button
          onClick={() => handleRoleChange(row.original._id, row.original.name)}
          disabled={row.original.role === "admin"}
          className={`px-2 py-1 rounded cursor-pointer ${
            row.original.role === "admin"
              ? "bg-blue-200 text-blue-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {row.original.role}
        </Button>
      ),
    },
    {
      accessorKey: "isVerified",
      header: "Verified",
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded ${
            row.original.isVerified
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {row.original.isVerified ? "Verified" : "Not Verified"}
        </span>
      ),
    },
    {
      accessorKey: "isBlocked",
      header: "Status",
      cell: ({ row }) => (
        <Button
          disabled={row.original.role === "admin"}
          className={`p-2 rounded cursor-pointer ${
            row.original.isBlocked
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          }`}
          onClick={() =>
            handleStatusChange(row.original._id, row.original.isBlocked)
          }
        >
          {row.original.isBlocked ? (
            <>
              <Ban className="w-4 h-4 inline-block mr-1" /> Blocked
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4 inline-block mr-1" /> Active
            </>
          )}
        </Button>
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
      <h1 className="text-xl font-bold mb-4">All Users</h1>
      <MTable columns={columns} data={users || []} />

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AllUsers;
