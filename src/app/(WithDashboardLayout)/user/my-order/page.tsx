
import MyOrders from "@/components/modules/order/MyOrders";
import { getMyAllOrders } from "@/services/Orders";
import React from "react";

const MyOrderPage = async () => {
  const { data: orders } = await getMyAllOrders();
  // console.log(orders);
  return (
    <div className="mb-20">
      <MyOrders orders={orders}/>
    </div>
  );
};

export default MyOrderPage;
