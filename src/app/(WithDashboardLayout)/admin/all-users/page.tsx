import { getAllUsers } from "@/services/Users";
import React from "react";

const AllUsersPage = async () => {
  const { data } = await getAllUsers();
  console.log(data);
  return <div>All Users Page</div>;
};

export default AllUsersPage;
