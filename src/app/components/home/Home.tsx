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
    image: "/image/banner1.jpeg",
    campaign: "Food Donation",
  },
  {
    id: 2,
    title: "Clothe with Compassion",
    description:
      "Help us distribute warm clothing to those facing harsh winters. Your support brings comfort and dignity.",
    image: "/image/banner2.jpeg",
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
  
   {
    id: 4,
    title: "Heal Through Medical Aid",
    description:
      "Support our mission to provide healthcare services to underprivileged communities. Your donation enables us to offer free medical check-ups and treatment.",
    image: "/image/banner3.jpeg",
    campaign: "Medical Donation",
  },
  
   {
    id: 5,
    title: "Educate for Tomorrow",
    description:
      "Invest in education and help us provide quality schooling to children in need. Together, we can build brighter futures.",
    image: "/image/banner4.jpeg",
    campaign: "Education Donation",
  },
  
   {
    id: 6,
    title: "Shelter with Dignity",
    description:
      "Help us build safe homes for homeless families. Your support provides not just shelter, but hope and stability.",
    image: "/image/banner19.jpeg",
    campaign: "Housing Donation",
  },
  
   {
    id: 7,
    title: "Emergency Relief",
    description:
      "Be there when disaster strikes. Your quick support helps us provide immediate relief to affected communities.",
    image: "/image/banner18.jpeg",
    campaign: "Disaster Relief",
  },
  
   {
    id: 8,
    title: "Care for Our Elders",
    description:
      "Show respect and compassion to senior citizens. Help us provide healthcare, nutrition, and companionship to our elderly community.",
    image: "/image/banner7.jpeg",
    campaign: "Elder Care",
  },
  
   {
    id: 9,
    title: "Protect Our Children",
    description:
      "Every child deserves a safe and nurturing environment. Support our orphan care centers and give children a second chance at life.",
    image: "/image/banner8.jpeg",
    campaign: "Child Welfare",
  },
  
   {
    id: 10,
    title: "Mental Health Matters",
    description:
      "Break the stigma and support mental health awareness. Your contribution helps us provide counseling and support services.",
    image: "/image/banner9.jpeg",
    campaign: "Mental Health",
  },
  
   {
    id: 11,
    title: "Empower Through Skills",
    description:
      "Give vocational training to help people become self-reliant. Support our skill development programs for marginalized communities.",
    image: "/image/banner10.jpeg",
    campaign: "Skill Development",
  },
  
   {
    id: 12,
    title: "Clean Water for All",
    description:
      "Access to clean water is a basic right. Help us build water purification systems in remote villages.",
    image: "/image/banner11.jpeg",
    campaign: "Water Initiative",
  },
  
   {
    id: 13,
    title: "Environmental Action",
    description:
      "Join us in protecting our planet. Support environmental conservation and green initiatives for a sustainable future.",
    image: "/image/banner12.jpeg",
    campaign: "Environment",
  },
  
   {
    id: 14,
    title: "Hunger-Free Communities",
    description:
      "Provide nutritious meals to prevent malnutrition. Your donation ensures no one goes to bed hungry.",
    image: "/image/banner13.jpeg",
    campaign: "Food Security",
  },
  
   {
    id: 15,
    title: "Women Empowerment",
    description:
      "Support women in achieving their dreams. Help us provide training, resources, and opportunities for women's independence.",
    image: "/image/banner14.jpeg",
    campaign: "Women Support",
  },
   {
    id: 16,
    title: "Disability Support",
    description:
      "Ensure people with disabilities have equal opportunities. Support our programs for rehabilitation and inclusion.",
    image: "/image/banner15.jpeg",
    campaign: "Disability Care",
  }, {
    id: 17,
    title: "Community Development",
    description:
      "Build stronger communities together. Your support helps us create sustainable programs that transform lives.",
    image: "/image/banner16.jpeg",
    campaign: "Community Aid",
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

     
    </div>
  );
}
