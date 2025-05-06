export const dynamic = "force-dynamic";

import Banner from "@/components/modules/home/Banner";
import ShopOverview from "@/components/modules/home/ShopOverview";
import CustomerFeedback from "@/components/modules/home/CustomerFeedback";
import SomeMedicine from "@/components/modules/home/SomeMedicine";
import MedicineCategory from "@/components/modules/home/MedicineCategory";
import BrandMarquee from "@/components/modules/home/CompanyBrand";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <MedicineCategory></MedicineCategory>
      <SomeMedicine></SomeMedicine>
      <BrandMarquee></BrandMarquee>
      <ShopOverview></ShopOverview>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default HomePage;
