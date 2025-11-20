"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#94231E] text-white border border-[#94231E] hover:bg-[#B5423D] focus:ring-[#94231E]",
    secondary:
      "bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500",
  };

  const sizes = {
    small: "py-2 px-4 text-sm rounded-full min-w-[80px]",
    medium: "py-3 px-6 text-base rounded-full min-w-[120px]",
    large: "py-3 px-8 text-lg rounded-full min-w-[140px]",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabledStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

// ---------------------------------
// Carousel Component
// ---------------------------------

const slides = [
  {
    id: 1,
    title: "Feed the Hungry",
    description:
      "Join us in our mission to provide nutritious meals to families in need. Every donation makes a difference.",
    image: "/image/food1.jpeg",
    campaign: "Food Donation",
  },
  {
    id: 2,
    title: "Clothe with Compassion",
    description:
      "Help us distribute warm clothing to those facing harsh winters. Your support brings comfort and dignity.",
    image: "/image/thumbnail.jpeg",
    campaign: "Cloth Donation",
  },
  {
    id: 3,
    title: "Save Lives Through Blood",
    description:
      "Become a blood donor today and be the reason someone gets a second chance at life. One donation saves three lives.",
    image: "/image/blood.jpeg",
    campaign: "Blood Donation",
  },
];

export default function HomePageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
              {slide.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large">
                <Link href="/donate">Donate Now</Link>
              </Button>

              
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 sm:h-3 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-white w-8 sm:w-12 shadow-lg"
                : "bg-white/50 hover:bg-white/75 w-2.5 sm:w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
