import AllOrders from "@/components/modules/order/AllOrders";
import { getMyAllOrders } from "@/services/Orders";
import React from "react";

const MyOrderPage = async () => {
  const { data: orders } = await getMyAllOrders();
  // console.log(orders);
  return (
    <div className="mb-20">
      <AllOrders orders={orders}></AllOrders>
    </div>
  );
};

export default MyOrderPage;
