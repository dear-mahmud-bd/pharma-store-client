import AllOrders from "@/components/modules/order/AllOrders";
import { getAllOrders } from "@/services/Orders";
import React from "react";

const AllOrdersPage = async () => {
  const { data: orders } = await getAllOrders();
  // console.log(orders);
  return (
    <div className="mb-20">
      <AllOrders orders={orders}></AllOrders>
    </div>
  );
};

export default AllOrdersPage;
