"use client";
  
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Globe, Star } from "lucide-react";

interface Testimonial {
  id: number;
  company: string;
  quote: string;
  name: string;
  title: string;
  website?: string;
  gradient: string;
}

 const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Pro11",
    quote:
      "Digiente did an amazing job creating Pro11. The app is user-friendly, visually appealing, and exactly what I envisioned. Their team was professional, responsive, and a pleasure to work with. Highly recommended!",
    name: "Sachin Mishra",
    title: "Product Manager",
    website: "https://play.google.com/store/apps/details?id=com.progroww",
    gradient: "from-blue-100 via-indigo-100 to-purple-100",
  },
   {
    id: 2,
    company: "SuryaEcommerce",
    quote:
      "The team did an excellent job creating my ecommerce website. They perfectly captured my brand vision, delivered smooth functionality, and ensured a seamless shopping experience. I'm extremely happy with the results!",
    name: "Surya Aggarwal",
    title: "Founder of SuryaEcommerce",
    website: "https://suryaecommerce.com",
    gradient: "from-amber-100 via-orange-100 to-red-100",
  },
  
  {
    id: 3,
    company: "Gavnic",
    quote:
      "I wanted a basic website for my shop, and the team made the process simple, professional, and stress-free. They truly understood my requirements and delivered beyond my expectations!",
    name: "Om Prakash",
    title: "Shop Owner",
    website: "https://gavnic.com",
    gradient: "from-pink-100 via-rose-100 to-red-100",
  },
  {
    id: 4,
    company: "zariin",
    quote:
   "I run a jewelry boutique and wanted a website that reflects the elegance and craftsmanship of my pieces. The team beautifully captured my brand’s essence — from the design to the shopping experience. Their professionalism and attention to detail made the entire process seamless, and the results have been stunning!",  name: "Ranjeet",
    title: "Retailer",
    website: "https://zariin.com/",
    gradient: "from-violet-100 via-purple-100 to-fuchsia-100",
  },

   {
    id: 5,
    company: "SelfAccountingToday",
    quote:
      "The team did an excellent job creating my accounting website. They perfectly matched my theme, understood my requirements, and delivered a professional, user-friendly site. I'm very satisfied with their work!",
    name: "Kishor Raj",
    title: "Founder of SelfAccountingToday",
    website: "https://selfaccountingtoday.com",
    gradient: "from-amber-100 via-orange-100 to-red-100",
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const avatarGradients = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
  "from-violet-500 to-purple-600",
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewportSize, setViewportSize] = useState('sm');

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewportSize('sm');
      } else if (width < 1024) {
        setViewportSize('md');
      } else {
        setViewportSize('lg');
      }
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const slidesPerView = viewportSize === 'sm' ? 1 : viewportSize === 'md' ? 2 : 3;

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="mt-12 flex flex-col items-center justify-center px-4 py-6   min-h-[70vh]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Discover why businesses trust us
        </p>
      </div>

      <div className="w-[90%] max-w-5xl relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-transparent group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" />
        </button>

        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-transparent group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" />
        </button>

        {/* Testimonial Grid */}
        <div className="px-6">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl shadow-lg border border-white p-4 flex flex-col hover:shadow-xl hover:scale-102 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group`}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>

                {/* Company Name */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold tracking-wide text-gray-900">
                    {testimonial.company}
                  </h2>
                </div>

                {/* Quote Icon */}
                <div className="mb-3">
                  <svg
                    className="w-8 h-8 text-gray-400 opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <div className="mb-4 flex-grow">
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white border-opacity-50">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradients[testimonial.id - 1]} flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-white ring-opacity-50`}>
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-xs font-medium">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 300);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8 shadow-md"
                  : "bg-gray-400 hover:bg-gray-500 w-2 hover:w-4"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}