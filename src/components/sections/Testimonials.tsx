"use client";

import { useState } from "react";
import Icon from "../global/Icon";
import testimonials from "@/data/testimonials";

const Testimonials = () => {
  const categories = ["individuals", "businesses"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-[120px]">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end gap-5">
        <div className="max-w-[831px] text-center md:text-left">
          <h2 className="font-medium text-[28px] md:text-[38px] text-white leading-[150%]">
            Our <span className="text-green">Testimonials</span>
          </h2>
          <p className="text-grey-70 font-light text-sm mt-2.5">
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        <div className="p-3 rounded-full bg-grey-11 border border-grey-15 flex items-center shrink-0">
          {categories.map((category) => {
            return (
              <div
                key={category}
                className={`py-2.5 px-[18px] rounded-full capitalize cursor-pointer text-sm transition-colors duration-100 ease-in-out ${
                  category === selectedCategory
                    ? "bg-green text-grey-11"
                    : "bg-transparent text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                For {category}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between mt-20 gap-8 md:gap-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

interface TestimonialType {
  name: string;
  testimony: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <div className="max-w-sm md:w-1/3 md:min-h-72 flex flex-col">
      <div className="flex items-center gap-4">
        <span className="border-t border-grey-15 w-full"></span>
        <Icon name="testimonial" size={6} />
        <span className="border-t border-grey-15 w-full"></span>
      </div>

      <p className="text-white leading-6 text-center mt-4 md:mt-10">
        {testimonial.testimony}
      </p>

      <p className="font-medium text-green text-center mt-auto">
        {testimonial.name}
      </p>
    </div>
  );
};
