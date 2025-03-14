import CartProducts from "@/components/modules/cart/CartProducts";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";

const CartPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-5">
      <div className="col-span-1 md:col-span-8">
        <CartProducts />
      </div>
      <div className="col-span-1 md:col-span-4">
        <PaymentDetails />
      </div>
    </div>
  );
};

export default CartPage;
