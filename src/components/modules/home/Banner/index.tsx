import Link from "next/link";
import styles from "./BannerSection.module.css";

const Banner = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <div className={`${styles.banner} relative bg-cover bg-center h-[500px]`}>
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="max-w-2xl text-center">
            <h2 className="text-lg text-green-800 font-semibold">
              Trusted Pharmaceuticals, Quality Healthcare
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Welcome to Pharma
            </h1>
            <p className="text-white mt-4">
              Discover a wide range of effective medicines and healthcare products.  
              Your well-being is our priority.
            </p>
            <p className="mt-6">
              <Link
                href="/medicines"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Shop Now
              </Link>
            </p>
          </div>
        </div>
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
