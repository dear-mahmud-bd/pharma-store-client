import Image from "next/image";
import Logo from "@/app/assets/bg/bg_1.jpg";

const AboutUs = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-white wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="lg:flex items-center justify-between overflow-hidden">
                <div className="lg:max-w-[565px] xl:max-w-[640px] w-full">
                  <span className="text-sm font-medium text-white py-2 px-5 bg-primary inline-block mb-5">
                    About PHARMA
                  </span>
                  <h2 className="font-bold text-3xl sm:text-4xl 2xl:text-[40px] sm:leading-snug text-dark mb-6">
                    Your Trusted Online Medicine Store
                  </h2>
                  <p className="text-base text-body-color mb-9 leading-relaxed">
                    PHARMA is a modern e-commerce platform designed to provide
                    a seamless and secure way to purchase medicines online. We
                    ensure compliance with medical regulations, secure payment
                    methods, and user-friendly navigation for the best shopping
                    experience.
                  </p>
                  <p className="text-base text-body-color mb-9 leading-relaxed">
                    Our platform offers easy medicine search, prescription
                    uploads, secure checkout, and real-time order tracking to
                    ensure a hassle-free experience for our customers.
                  </p>
                </div>
                <div className="text-center">
                  <div className="py-10">
                    <Image
                      width={500}
                      height={500}
                      src={Logo}
                      alt="About PHARMA"
                      className="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
              About More
            </h2>
            <p className="mt-4 max-w-4xl text-lg text-gray-600 mx-auto">
              PHARMA is a reliable e-commerce platform for purchasing
              medicines online. We offer a user-friendly experience with secure
              payments, prescription verification, and fast order tracking.
            </p>
          </div>

          <div className="mt-10">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <p className="text-lg font-bold text-gray-700">
                  Secure Shopping
                </p>
                <p className="mt-2 text-base text-gray-500">
                  We ensure secure transactions with encrypted payment gateways,
                  keeping your data safe.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-700">
                  Prescription Verification
                </p>
                <p className="mt-2 text-base text-gray-500">
                  Easily upload prescriptions for medicines that require
                  approval, ensuring compliance with healthcare regulations.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-700">
                  Fast & Reliable Delivery
                </p>
                <p className="mt-2 text-base text-gray-500">
                  Get your medicines delivered quickly with real-time tracking
                  of your orders.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-700">
                  24/7 Customer Support
                </p>
                <p className="mt-2 text-base text-gray-500">
                  Our support team is available around the clock to assist you
                  with your queries and orders.
                </p>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
