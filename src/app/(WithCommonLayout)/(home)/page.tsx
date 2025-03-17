import Banner from "@/components/modules/home/Banner";
import ShopOverview from "@/components/modules/home/ShopOverview";
import CustomerFeedback from "@/components/modules/home/CustomerFeedback.tsx";
import SomeMedicine from "@/components/modules/home/SomeMedicine";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <SomeMedicine></SomeMedicine>
      <ShopOverview></ShopOverview>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default HomePage;
