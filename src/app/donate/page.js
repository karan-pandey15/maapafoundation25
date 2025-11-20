"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  CreditCard, 
  Smartphone, 
  QrCode, 
  Building2, 
  Users, 
  Wallet,
  CheckCircle,
  Copy,
  Check,
  ArrowRight,
  Shield,
  TrendingUp,
  Gift,
  UserPlus,
  DollarSign,
  IndianRupee,
  Award
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/footer/Footer"; // Import the Footer componen

// Button Component
const Button = ({
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

  const variants = {
    primary:
      "bg-[#94231E] text-white border border-[#94231E] hover:bg-[#B5423D] focus:ring-[#94231E]",
    secondary:
      "bg-white text-[#94231E] border border-[#94231E] hover:bg-gray-50 focus:ring-[#94231E]",
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
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function DonationPage() {
  const [copiedField, setCopiedField] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("online");

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const donationAmounts = [500, 1000, 2500, 5000, 10000];

  const impactStats = [
    { icon: Users, value: "1 Meal", amount: "₹50", description: "Feeds one person" },
    { icon: Heart, value: "10 Meals", amount: "₹500", description: "Feeds a family" },
    { icon: Gift, value: "Clothes Set", amount: "₹1000", description: "Provides clothing" },
    { icon: TrendingUp, value: "Blood Drive", amount: "₹5000", description: "Organizes camp" }
  ];

  const whyDonate = [
    {
      icon: Users,
      title: "Fight Hunger",
      description: "Help us provide nutritious meals to thousands of families struggling with food insecurity",
      image: "/image/secondimage.jpeg"
    },
    {
      icon: Heart,
      title: "Provide Clothing",
      description: "Your donations help us distribute essential clothing to those facing harsh conditions",
      image: "/image/thirdimage.jpeg"
    },
    {
      icon: Shield,
      title: "Healthcare Support",
      description: "Enable life-saving blood donation camps and medical assistance programs",
      image: "/image/firstimage.jpeg"
    },
    {
      icon: TrendingUp,
      title: "Build Communities",
      description: "Support sustainable programs that create lasting positive change",
      image: "/image/WhatsApp Image 2025-11-16 at 12.34.01 AM.jpeg"
    }
  ];

  const volunteerBenefits = [
    "Make a direct impact in your community",
    "Gain valuable experience and skills",
    "Join a passionate team of changemakers",
    "Flexible volunteering opportunities",
    "Certificate of appreciation",
    "Be part of something meaningful"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bS00IDB2Mmgydi0yaC0yem0wIDRoMnYtMmgtMnYyem0wIDRoMnYtMmgtMnYyem0tNCA0aDJ2LTJoLTJ2MnptOC04aDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTQgNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem00LThoMnYtMmgtMnYyem0tOCA0aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Heart className="w-10 h-10 text-white" fill="currentColor" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Your Generosity Changes Lives
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Every contribution brings hope, dignity, and opportunity to those who need it most
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Need Your Support */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-4">
              Why We Need Your Support
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Your donations directly fund our programs and help us reach more people in need
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
          >
            {whyDonate.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#94231E]/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#94231E]/10 rounded-full mb-3 -mt-8 relative">
                      <Icon className="w-6 h-6 text-[#94231E]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#94231E] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white border-2 border-[#94231E]/20 p-4 md:p-6 rounded-xl text-center hover:border-[#94231E] transition-colors"
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#94231E] mx-auto mb-2" />
                  <p className="text-xl md:text-2xl font-bold text-[#94231E] mb-1">
                    {stat.amount}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Donation Type Selector */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDonationType("online")}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                donationType === "online"
                  ? "bg-[#94231E] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <CreditCard className="w-6 h-6 mx-auto mb-2" />
              Donate Online
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDonationType("offline")}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                donationType === "offline"
                  ? "bg-[#94231E] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Building2 className="w-6 h-6 mx-auto mb-2" />
              Bank Transfer
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDonationType("volunteer")}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                donationType === "volunteer"
                  ? "bg-[#94231E] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <UserPlus className="w-6 h-6 mx-auto mb-2" />
              Volunteer
            </motion.button>
          </div>
        </div>
      </section>

      {/* Online Donation */}
      {donationType === "online" && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left: Amount Selection */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#94231E] mb-6">
                    Select Donation Amount
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {donationAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                          selectedAmount === amount
                            ? "bg-[#94231E] text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200"
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </motion.button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        placeholder="Enter amount"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#94231E] focus:outline-none text-lg"
                      />
                    </div>
                  </div>

                  <div className="bg-[#94231E]/5 border-2 border-[#94231E]/20 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-[#94231E]" />
                      <h4 className="font-bold text-[#94231E]">100% Secure</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Your donation is secure and will be used to directly support our programs
                    </p>
                  </div>

                  <Button 
                    variant="primary" 
                    size="large" 
                    className="w-full text-xl py-4"
                    disabled={!selectedAmount && !customAmount}
                  >
                    Proceed to Payment
                    <ArrowRight className="inline-block ml-2 w-6 h-6" />
                  </Button>
                </div>

                {/* Right: QR Code & UPI */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#94231E] mb-6">
                    Scan & Pay
                  </h3>

                  <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                      <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/image/maapaqr.jpeg" 
                          alt="Payment QR Code" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-center text-sm text-gray-600 font-medium">
                        Scan this QR code with any UPI app
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-5 h-5 text-[#94231E]" />
                          <div>
                            <p className="text-xs text-gray-500 font-medium">UPI ID</p>
                            <p className="text-sm font-bold text-gray-800">8887796224</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => copyToClipboard("maapa@upi", "upi")}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {copiedField === "upi" ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-600" />
                          )}
                        </motion.button>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                          <img src="/image/gpay.png" alt="Google Pay" className="h-8 object-contain" />
                        </div>
                        <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                          <img src="/image/phonepe.png" alt="PhonePe" className="h-8 object-contain" />
                        </div>
                        <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                          <img src="/image/paytm.png" alt="Paytm" className="h-8 object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> After payment, please share the transaction screenshot with us for receipt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Offline/Bank Transfer */}
      {donationType === "offline" && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#94231E] mb-8 text-center">
                Bank Transfer Details
              </h3>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 shadow-xl mb-6">
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Bank Name</p>
                        <p className="text-lg font-bold text-gray-800">Yes Bank</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => copyToClipboard("MAAPA FOUNDATION", "accname")}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {copiedField === "accname" ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                      </motion.button>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Account Number</p>
                        <p className="text-lg font-bold text-gray-800">044988700000151</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => copyToClipboard("044988700000151", "accno")}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {copiedField === "accno" ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                      </motion.button>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">IFSC Code</p>
                        <p className="text-lg font-bold text-gray-800">YESB0000449</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => copyToClipboard("YESB0000449", "ifsc")}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {copiedField === "ifsc" ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                      </motion.button>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Bank Name</p>
                        <p className="text-lg font-bold text-gray-800">Yes Bank</p>
                      </div>
                      <Building2 className="w-6 h-6 text-[#94231E]" />
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Branch</p>
                        <p className="text-lg font-bold text-gray-800">Moti Nagar Yes Bank</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> Please email the transaction receipt to <a href="mailto:donations@maapa.org" className="font-bold underline">donations@maapa.org</a> for official acknowledgment and 80G certificate.
                </p>
              </div>

              <div className="text-center">
                <Button variant="primary" size="large">
                  <Wallet className="inline-block mr-2 w-5 h-5" />
                  I've Completed the Transfer
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Volunteer Section */}
      {donationType === "volunteer" && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left: Image & Info */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#94231E] mb-6">
                    Join Our Team
                  </h3>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
                    <img
                      src="/image/secondimage.jpeg"
                      alt="Volunteers"
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#94231E]/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-3xl font-bold mb-1">500+</p>
                      <p className="text-sm">Active Volunteers</p>
                    </div>
                  </div>

                  <div className="bg-[#94231E]/5 rounded-xl p-6">
                    <h4 className="font-bold text-[#94231E] mb-4 text-lg">
                      Why Volunteer With Us?
                    </h4>
                    <ul className="space-y-3">
                      {volunteerBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#94231E] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Form */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#94231E] mb-6">
                    Volunteer Registration
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#94231E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#94231E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#94231E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        placeholder="Your city"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#94231E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Area of Interest
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#94231E] focus:outline-none">
                        <option>Select your interest</option>
                        <option>Food Distribution</option>
                        <option>Clothing Drive</option>
                        <option>Blood Donation Camps</option>
                        <option>Event Management</option>
                        <option>Social Media & Marketing</option>
                        <option>All of the above</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Why do you want to volunteer?
                      </label>
                      <textarea
                        placeholder="Tell us about your motivation..."
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#94231E] focus:outline-none resize-none"
                      ></textarea>
                    </div>

                    <Button variant="primary" size="large" className="w-full text-lg">
                      <UserPlus className="inline-block mr-2 w-5 h-5" />
                      Submit Application
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Other Ways to Help */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-4">
              Other Ways to Contribute
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Can't donate money right now? You can still make a difference!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="/image/thirdimage.jpeg" 
                  alt="Donate Goods"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#94231E]/40"></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="w-16 h-16 bg-[#94231E] rounded-full flex items-center justify-center mb-4 -mt-12 relative">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#94231E] mb-3">
                  Donate Goods
                </h3>
                <p className="text-gray-600 mb-4">
                  Contribute clothes, food items, or other essential supplies directly
                </p>
                <Button variant="secondary" size="medium">
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="/image/firstimage.jpeg" 
                  alt="Spread Awareness"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#94231E]/40"></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="w-16 h-16 bg-[#94231E] rounded-full flex items-center justify-center mb-4 -mt-12 relative">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#94231E] mb-3">
                  Spread Awareness
                </h3>
                <p className="text-gray-600 mb-4">
                  Share our mission on social media and help us reach more people
                </p>
                <Button variant="secondary" size="medium">
                  Share Now
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="/image/secondimage.jpeg" 
                  alt="Corporate Partnership"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#94231E]/40"></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="w-16 h-16 bg-[#94231E] rounded-full flex items-center justify-center mb-4 -mt-12 relative">
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-[#94231E] mb-3">
                  Corporate Partnership
                </h3>
                <p className="text-gray-600 mb-4">
                  Partner with us for CSR activities and employee engagement programs
                </p>
                <Button variant="secondary" size="medium">
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#94231E]/5 to-[#94231E]/10 rounded-2xl p-6 md:p-8 border-2 border-[#94231E]/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-[#94231E] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#94231E] mb-2">
                    80G Tax Benefits Available
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    All donations to MAAPA Foundation are eligible for tax deduction under Section 80G of the Income Tax Act. You'll receive an official receipt for your contribution.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-4">
              Voices of Change
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our donors and volunteers
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                name: "Priya Sharma",
                role: "Monthly Donor",
                text: "Contributing to MAAPA Foundation gives me immense satisfaction. I know my money is making a real difference in people's lives.",
                image: "/image/WhatsApp Image 2025-11-16 at 12.34.02 AM.jpeg",
                rating: 5
              },
              {
                name: "Rahul Verma",
                role: "Volunteer",
                text: "Volunteering here has been life-changing. The team is passionate and every event brings smiles to so many faces.",
                image: "/image/WhatsApp Image 2025-11-16 at 12.35.17 AM.jpeg",
                rating: 5
              },
              {
                name: "Anjali Desai",
                role: "Corporate Partner",
                text: "Our partnership with MAAPA has strengthened our CSR impact. Their transparency and dedication are commendable.",
                image: "/image/WhatsApp Image 2025-11-16 at 12.34.03 AM.jpeg",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#94231E]/10 rounded-full flex items-center justify-center -mt-10 relative border-4 border-white">
                      <Heart className="w-7 h-7 text-[#94231E]" fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Is my donation tax-deductible?",
                a: "Yes! All donations to MAAPA Foundation qualify for 80G tax deduction. You'll receive an official receipt via email."
              },
              {
                q: "How will my donation be used?",
                a: "Your donation directly funds our programs including food distribution, clothing drives, blood donation camps, and educational support."
              },
              {
                q: "Can I donate in kind instead of money?",
                a: "Absolutely! We accept donations of clothes, food items, and other essentials. Please contact us to arrange a donation."
              },
              {
                q: "How can I track the impact of my donation?",
                a: "We send regular updates to all donors via email and share impact stories on our social media channels."
              },
              {
                q: "Is there a minimum donation amount?",
                a: "No minimum amount required. Every contribution, no matter how small, makes a difference."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-[#94231E] mb-2 text-lg">
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-white" fill="currentColor" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Every Rupee Counts
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Your generosity today becomes someone's hope tomorrow. Join thousands of donors who are already making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="large" 
                className="bg-white text-[#94231E] hover:bg-gray-100 text-lg"
              >
                <Heart className="inline-block mr-2 w-5 h-5" />
                <Link href="/donate">
                  Donate Now
                </Link>
              </Button>
              <Button 
                variant="primary" 
                size="large" 
                className="bg-white/20 border-white text-white hover:bg-white/30 text-lg"
              >
                   <Link href="/contactus">
                  Contact Us  
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}