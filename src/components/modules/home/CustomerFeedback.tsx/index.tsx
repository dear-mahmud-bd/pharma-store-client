/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import person1 from "../../../../app/assets/customers/person_1.jpg";
import person2 from "../../../../app/assets/customers/person_2.jpg";
import person3 from "../../../../app/assets/customers/person_3.jpg";
import person4 from "../../../../app/assets/customers/person_4.jpg";

interface Testimonial {
  name: string;
  image: any;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kelly Holmes",
    image: person1,
    feedback:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.",
  },
  {
    name: "Rebecca Morando",
    image: person2,
    feedback:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.",
  },
  {
    name: "Lucas Gallone",
    image: person3,
    feedback:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.",
  },
  {
    name: "Andrew Neel",
    image: person4,
    feedback:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.",
  },
];

const CustomerFeedback: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold uppercase text-gray-800 mb-10">
          Customer Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                height={100}
                width={100}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <blockquote className="italic text-gray-700">
                &quot;{testimonial.feedback}&quot;
              </blockquote>
              <p className="mt-4 font-semibold">&mdash; {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
