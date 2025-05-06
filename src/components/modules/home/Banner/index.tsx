import styles from "./BannerSection.module.css";
import HeroBanner from "./HeroBanner";

const Banner = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <div className={`${styles.banner} relative bg-cover px-2 md:px-0 bg-center h-[500px] md:h-[550px]`}>
        <HeroBanner/>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-500 text-white p-6 rounded-lg h-full flex flex-col justify-center">
              <div className="block text-center">
                <h5 className="text-2xl font-bold">
                  Free <br /> Shipping
                </h5>
                <p className="mt-3">
                  Enjoy free shipping on all orders above a certain amount.  
                  Get your medicines delivered to your doorstep hassle-free.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col justify-center">
              <div className="block text-center">
                <h5 className="text-2xl font-bold">
                  Seasonal <br /> Discounts Up to 50% Off
                </h5>
                <p className="mt-3">
                  Grab exciting discounts on top healthcare products.  
                  Limited-time offers on trusted medicines and supplements.
                </p>
              </div>
            </div>
            <div className="bg-yellow-500 text-white p-6 rounded-lg h-full flex flex-col justify-center">
              <div className="block text-center">
                <h5 className="text-2xl font-bold">
                  Buy <br /> A Gift Card
                </h5>
                <p className="mt-3">
                  Gift health and wellness to your loved ones.  
                  Our gift cards can be used to purchase any medicine or healthcare product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
