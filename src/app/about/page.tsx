"use client";
import React from "react";
import { Heart, Users, Target, TrendingUp, Award, Calendar, MapPin, Building2, Handshake, Globe } from "lucide-react";
import Link from "next/link";
import Footer from "../components/footer/Footer";

// Button Component
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
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-body";

  const variants: Record<"primary" | "secondary", string> = {
    primary:
      "bg-[#94231E] text-white border border-[#94231E] hover:bg-[#B5423D] focus:ring-[#94231E]",
    secondary:
      "bg-white text-[#94231E] border border-[#94231E] hover:bg-gray-50 focus:ring-[#94231E]",
  };

  const sizes: Record<"small" | "medium" | "large", string> = {
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
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default function AboutUs() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Lives Touched" },
    { icon: Heart, value: "500+", label: "Volunteers" },
    { icon: Handshake, value: "50+", label: "Partners" },
    { icon: Globe, value: "15+", label: "Cities" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding for those in need"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Every action we take is focused on creating meaningful change"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Transparency and accountability guide everything we do"
    },
    {
      icon: Users,
      title: "Community",
      description: "Together, we build stronger communities through collective action"
    }
  ];

  const initiatives = [
    {
      icon: "🍽️",
      title: "Food Security",
      description: "Providing nutritious meals to families facing hunger and food insecurity"
    },
    {
      icon: "👕",
      title: "Clothing Drive",
      description: "Distributing essential clothing to underprivileged communities"
    },
    {
      icon: "💉",
      title: "Blood Donation",
      description: "Organizing blood donation camps to save lives across communities"
    },
    {
      icon: "📚",
      title: "Education Support",
      description: "Empowering children through educational resources and support"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bS00IDB2Mmgydi0yaC0yem0wIDRoMnYtMmgtMnYyem0wIDRoMnYtMmgtMnYyem0tNCA0aDJ2LTJoLTJ2MnptOC04aDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTQgNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem00LThoMnYtMmgtMnYyem0tOCA0aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              About MAAPA Foundation
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-4 italic">
              Support Who Can not Afford
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering communities, transforming lives, and building a future where everyone has access to basic necessities and opportunities to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section - Image Left, Text Right */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image/firstimage.jpeg"
                  alt="MAAPA Foundation Story"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#94231E]/30 to-transparent"></div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-6">
                How We Started
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  MAAPA Foundation was born from a simple yet powerful vision: to create a society where no one is left behind due to financial constraints. Incorporated on <span className="font-semibold text-[#94231E]">June 16, 2022</span>, we began our journey with a commitment to serve those who need it most.
                </p>
                <p className="text-base md:text-lg">
                  Registered with the <span className="font-semibold">Registrar of Companies in Delhi</span>, MAAPA Foundation operates as a Non-government company with a clear mission: to bridge the gap between privilege and poverty through compassionate action and sustainable initiatives.
                </p>
                <p className="text-base md:text-lg">
                  What started as a small group of dedicated volunteers has grown into a movement that touches thousands of lives across multiple cities, providing food, clothing, healthcare support, and educational opportunities.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/donate">
                  <Button variant="primary" size="large">
                    Join Our Mission
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#94231E]/10 rounded-full mb-4">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#94231E]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#94231E] mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do Section - Text Left, Image Right */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-6">
                What We Do
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                At MAAPA Foundation, we work tirelessly to address the most pressing needs of underprivileged communities. Our multi-faceted approach ensures comprehensive support for those who need it most.
              </p>
              
              <div className="space-y-6">
                {initiatives.map((initiative, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-3xl flex-shrink-0">{initiative.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-[#94231E] mb-1">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="primary" size="large">
                  Support Our Work
                </Button>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image/secondimage.jpeg"
                  alt="MAAPA Foundation Activities"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#94231E]/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-4">
              Our Core Values
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission and shape every decision we make
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#94231E] rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#94231E] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#94231E] mb-6 text-center">
              Legal Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <Calendar className="w-6 h-6 text-[#94231E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Incorporation Date</p>
                  <p className="text-gray-600">June 16, 2022</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <MapPin className="w-6 h-6 text-[#94231E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Registration</p>
                  <p className="text-gray-600">Registrar of Companies, Delhi</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-6 h-6 text-[#94231E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Company Type</p>
                  <p className="text-gray-600">Non-government Company</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#94231E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Status</p>
                  <p className="text-[#94231E] font-semibold">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Every contribution, big or small, helps us create lasting change in the lives of those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus">
                <Button variant="secondary" size="large" className="bg-white text-[#94231E] hover:bg-gray-100">
                  Become a Volunteer
                </Button>
              </Link>
              <Link href="/donate">
                <Button variant="primary" size="large" className="bg-white/20 border-white text-white hover:bg-white/30">
                  Make a Donation 
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}