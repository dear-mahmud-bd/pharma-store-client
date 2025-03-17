import styles from "./ShopOverview.module.css";

const ShopOverview = () => {
  return (
    <section className={`bg-secondary bg-cover h-[550px] bg-center ${styles.bg_2} flex items-center`}>
      <div className="container mx-auto p-5">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/2 w-full mb-5 lg:mb-0 px-4">
            <div className={`h-full flex bg-cover bg-center ${styles.bg_1}`}>
              <div className="flex items-center justify-center h-full p-6 bg-opacity-100">
                <div className="py-10 text-gray-800 text-left">
                  <h2 className="text-3xl font-bold">Wide Range of Pharma Products</h2>
                  <p className="mt-2">
                    Explore our extensive collection of high-quality pharmaceutical products.  
                    From essential medicines to health supplements, we provide trusted solutions  
                    for your healthcare needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-5 lg:mb-0 px-4">
            <div className={`h-full flex bg-cover bg-center ${styles.bg_2}`}>
              <div className="flex items-center justify-center h-full p-6 bg-opacity-100">
                <div className="py-10 text-gray-800 text-right">
                  <h2 className="text-3xl font-bold">Expert-Approved & Trusted</h2>
                  <p className="mt-2">
                    Our products are tested and recommended by healthcare professionals.  
                    We ensure high safety and effectiveness standards, so you get only the  
                    best pharmaceutical care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopOverview;
