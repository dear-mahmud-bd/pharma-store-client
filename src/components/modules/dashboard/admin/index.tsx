import { getAllUsers } from "@/services/Users";
import TotalUsers from "./TotalUser";
import AdminCustomer from "./AdminCustomer";
import OrdersOverview from "./OrdersOverview";
import { getAllOrders } from "@/services/Orders";

const AdminDahsboard = async () => {
  const { data: users } = await getAllUsers();
    const { data: orders } = await getAllOrders();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
        <AdminCustomer users={users} />
        <TotalUsers users={users} />
      </div>
      <OrdersOverview orders={orders} />
    </>
  );
};

export default AdminDahsboard;
