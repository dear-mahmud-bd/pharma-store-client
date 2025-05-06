"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import square from "../../../../app/assets/company/square.png";
import beximco from "../../../../app/assets/company/beximco.png";
import incepta from "../../../../app/assets/company/incepta.png";
import aci from "../../../../app/assets/company/aci.png";
import eskayef from "../../../../app/assets/company/eskayef.png";
import renata from "../../../../app/assets/company/renata.png";

const brands = [
  { name: "Square", image: square },
  { name: "Beximco", image: beximco },
  { name: "Incepta", image: incepta },
  { name: "ACI", image: aci },
  { name: "Eskayef", image: eskayef },
  { name: "Renata", image: renata },
];

const BrandMarquee = () => {
  return (
    <div className="mx-auto my-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Trusted Bangladeshi Brands
      </h2>
      <p className="text-center text-gray-600 mb-5 max-w-4xl mx-auto">
        We collaborate with Bangladesh&apos;s top pharmaceutical manufacturers to
        ensure the availability of high-quality and authentic medicines for our
        users.
      </p>
      <Marquee speed={50} gradient={false}>
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center mx-10"
          >
            <Image
              height={500}
              width={500}
              src={brand.image}
              alt={brand.name}
              className="h-40 w-auto object-contain"
            />
            <p className="text-sm text-gray-600 mt-1">{brand.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
