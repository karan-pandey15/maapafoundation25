"use client";
import React from "react";
import {
  Heart,
  Target,
  Eye,
  Shield,
  Award,
  Users,
  Sparkles,
} from "lucide-react";
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

export default function MissionPage() {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion & Love",
      description: "We serve the underprivileged with empathy, understanding, and deep respect for human dignity.",
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "We run our operations with complete integrity, accountability, and openness in all initiatives.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We prioritize collective growth, collaborating closely with local communities to understand and resolve their challenges.",
    },
    {
      icon: Award,
      title: "Quality Support",
      description: "Whether it is education, health, or nutrition, we believe in delivering the highest quality of care and resources.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mt-8 relative bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bS00IDB2Mmgydi0yaC0yem0wIDRoMnYtMmgtMnYyem0wIDRoMnYtMmgtMnYyem0tNCA0aDJ2LTJoLTJ2MnptOC04aDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTQgNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem00LThoMnYtMmgtMnYyem0tOCA0aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white mb-6 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Driven by purpose
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-4 italic">
              Empowering those in need, fostering sustainable development.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              MAAPA Foundation is dedicated to addressing systemic poverty, lack of education, healthcare disparities, and hunger. We design programs that provide immediate relief and long-term empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Image Left, Text Right */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image/thumbnail.jpeg"
                  alt="MAAPA Foundation Mission Image"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#94231E]/30 to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#94231E]/10 rounded-full mb-4">
                <Target className="w-6 h-6 text-[#94231E]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-6">
                Our Core Mission
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  Our mission is to create a society where no one is left behind due to financial constraints or lack of resources. We work to support, heal, and empower individuals by offering sustainable pathways to self-reliance.
                </p>
                <p className="text-base md:text-lg">
                  Through active community intervention, we focus on delivering nutrition to the hungry, basic and advanced education to children, accessible medical support, and emergency relief during critical situations.
                </p>
                <p className="text-base md:text-lg">
                  By bringing together donors, volunteers, and local institutions, we build a supportive network that turns kindness into measurable, positive changes in thousands of lives every day.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/donate">
                  <Button variant="primary" size="large">
                    Support Our Mission
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Text Left, Image Right */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#94231E]/10 rounded-full mb-4">
                <Eye className="w-6 h-6 text-[#94231E]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-6">
                Our Long-term Vision
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  We envision a world where every individual, regardless of their socioeconomic background, enjoys equal access to health, nutrition, and growth opportunities. We aspire to build self-sustaining, resilient communities.
                </p>
                <p className="text-base md:text-lg">
                  By establishing robust educational frameworks and career readiness programs, we hope to raise a generation of educated, skilled, and independent youth who can lead their families out of poverty.
                </p>
                <p className="text-base md:text-lg">
                  We look forward to expanding our presence to more regions, designing scalable models of social impact, and continuing to serve as a beacon of hope and support for the marginalized.
                </p>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image/secindimag.jpeg"
                  alt="MAAPA Foundation Vision Image"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#94231E]/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-4">
              Our Values & Philosophy
            </h2>
            <p className="text-lg text-gray-600">
              The fundamental principles that guide our everyday decisions and drive our mission forward.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#94231E]/10 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-[#94231E]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Help Us Reach Our Goal
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Your support powers our mission. Partner with us, volunteer your time, or donate to bring hope and essential care to those who need it.
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
