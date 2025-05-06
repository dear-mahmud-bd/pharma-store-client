import Image from "next/image";
import React from "react";
import person1 from "@/app/assets/customers/person_1.jpg";
import person2 from "@/app/assets/customers/person_2.jpg";
import person3 from "@/app/assets/customers/person_3.jpg";
import person4 from "@/app/assets/customers/person_4.jpg";
import person5 from "@/app/assets/customers/person_5.jpg";
import person6 from "@/app/assets/customers/person_6.jpg";

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
      "Amazing experience! The team was highly professional \nand exceeded my expectations. I would definitely recommend \nthem to anyone looking for quality service.",
  },
  {
    name: "David Johnson",
    image: person2,
    feedback:
      "Very satisfied with the service. Prompt responses \nand excellent quality! They truly care about their \ncustomers and go above and beyond.",
  },
  {
    name: "Sophia Martinez",
    image: person3,
    feedback:
      "The support team was incredibly helpful. I felt \nvalued as a customer. Their quick assistance made \nmy entire experience seamless and stress-free.",
  },
  {
    name: "Michael Lee",
    image: person4,
    feedback:
      "Great attention to detail. Highly recommended for \nanyone seeking reliability. The entire process was \nsmooth, and I am very happy with the outcome.",
  },
  {
    name: "Emma Wilson",
    image: person5,
    feedback:
      "Professional and efficient. The process was smooth \nand hassle-free. I appreciate their dedication to \ncustomer satisfaction and high standards.",
  },
  {
    name: "Daniel Brown",
    image: person6,
    feedback:
      "Excellent service! I will definitely return for \nfuture needs. Their team is knowledgeable and \nensures that every detail is perfect.",
  },
];

const CustomerFeedback: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold uppercase text-gray-800 mb-10">
          Customer Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
