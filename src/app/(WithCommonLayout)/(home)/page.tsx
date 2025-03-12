import Banner from "@/components/modules/home/Banner";
import ShopOverview from "@/components/modules/home/ShopOverview";
import CustomerFeedback from "@/components/modules/home/CustomerFeedback.tsx";


const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ShopOverview></ShopOverview>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default HomePage;
