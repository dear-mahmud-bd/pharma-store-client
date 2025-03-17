import AllUsers from "@/components/modules/allUsers/AllUsers";
import { getAllUsers } from "@/services/Users";
import React from "react";

const AllUsersPage = async () => {
  const { data: users } = await getAllUsers();
  
  return (
    <div className="mb-20">
      <AllUsers users={users} />
    </div>
  );
};

export default AllUsersPage;
