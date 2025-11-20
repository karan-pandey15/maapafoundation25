"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, Transition } from "framer-motion";
import Footer from "../components/footer/Footer";
import Button from "../components/Button/Button";
import ChatNow from "../components/chatnow/page";

// Define interfaces for country and flag icon props
interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: React.FC<FlagIconProps>;
}

interface FlagIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
}

const Pricing: React.FC = () => {
  // State with TypeScript types
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showThankYouModal, setShowThankYouModal] = useState<boolean>(false);

  const IndianFlagIcon: React.FC<FlagIconProps> = ({
    width = "22",
    height = "22",
    ...props
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
        {...props}
      >
        <g clipPath="url(#clip0_10686_74417)">
          <path
            d="M10.932 0.6875C6.46328 0.6875 2.64766 3.575 1.23828 7.5625H20.6945C19.2508 3.575 15.4352 0.6875 10.932 0.6875Z"
            fill="#F2B200"
          />
          <path
            d="M10.932 21.3125C15.4352 21.3125 19.2508 18.4594 20.6602 14.4375H1.23828C2.64766 18.4594 6.46328 21.3125 10.932 21.3125Z"
            fill="#83BF4F"
          />
          <path
            d="M1.23672 7.5625C0.858594 8.62812 0.652344 9.79688 0.652344 11C0.652344 12.2031 0.858594 13.3719 1.23672 14.4375H20.693C21.0711 13.3719 21.2773 12.2031 21.2773 11C21.2773 9.79688 21.0711 8.62812 20.693 7.5625H1.23672Z"
            fill="white"
          />
          <path
            d="M10.9297 13.75C12.4485 13.75 13.6797 12.5188 13.6797 11C13.6797 9.48122 12.4485 8.25 10.9297 8.25C9.4109 8.25 8.17969 9.48122 8.17969 11C8.17969 12.5188 9.4109 13.75 10.9297 13.75Z"
            fill="#428BC1"
          />
          <path
            d="M10.9297 13.4062C12.2586 13.4062 13.3359 12.3289 13.3359 11C13.3359 9.67106 12.2586 8.59375 10.9297 8.59375C9.60075 8.59375 8.52344 9.67106 8.52344 11C8.52344 12.3289 9.60075 13.4062 10.9297 13.4062Z"
            fill="white"
          />
          <path
            d="M10.0352 8.9375C10.1301 8.9375 10.207 8.86055 10.207 8.76562C10.207 8.6707 10.1301 8.59375 10.0352 8.59375C9.94023 8.59375 9.86328 8.6707 9.86328 8.76562C9.86328 8.86055 9.94023 8.9375 10.0352 8.9375Z"
            fill="#428BC1"
          />
          <path
            d="M9.48828 9.24689C9.58321 9.24689 9.66016 9.16994 9.66016 9.07501C9.66016 8.98009 9.58321 8.90314 9.48828 8.90314C9.39336 8.90314 9.31641 8.98009 9.31641 9.07501C9.31641 9.16994 9.39336 9.24689 9.48828 9.24689Z"
            fill="#428BC1"
          />
          <path
            d="M9.03906 9.69376C9.13399 9.69376 9.21094 9.61681 9.21094 9.52188C9.21094 9.42696 9.13399 9.35001 9.03906 9.35001C8.94414 9.35001 8.86719 9.42696 8.86719 9.52188C8.86719 9.61681 8.94414 9.69376 9.03906 9.69376Z"
            fill="#428BC1"
          />
          <path
            d="M8.73047 10.2437C8.82539 10.2437 8.90234 10.1668 8.90234 10.0719C8.90234 9.97694 8.82539 9.89999 8.73047 9.89999C8.63554 9.89999 8.55859 9.97694 8.55859 10.0719C8.55859 10.1668 8.63554 10.2437 8.73047 10.2437Z"
            fill="#428BC1"
          />
          <path
            d="M8.55859 10.8625C8.65352 10.8625 8.73047 10.7855 8.73047 10.6906C8.73047 10.5957 8.65352 10.5187 8.55859 10.5187C8.46367 10.5187 8.38672 10.5957 8.38672 10.6906C8.38672 10.7855 8.46367 10.8625 8.55859 10.8625Z"
            fill="#428BC1"
          />
          <path
            d="M8.55859 11.4813C8.65352 11.4813 8.73047 11.4043 8.73047 11.3094C8.73047 11.2145 8.65352 11.1375 8.55859 11.1375C8.46367 11.1375 8.38672 11.2145 8.38672 11.3094C8.38672 11.4043 8.46367 11.4813 8.55859 11.4813Z"
            fill="#428BC1"
          />
          <path
            d="M8.73047 12.1C8.82539 12.1 8.90234 12.0231 8.90234 11.9281C8.90234 11.8332 8.82539 11.7563 8.73047 11.7563C8.63554 11.7563 8.55859 11.8332 8.55859 11.9281C8.55859 12.0231 8.63554 12.1 8.73047 12.1Z"
            fill="#428BC1"
          />
          <path
            d="M9.03906 12.65C9.13399 12.65 9.21094 12.573 9.21094 12.4781C9.21094 12.3832 9.13399 12.3062 9.03906 12.3062C8.94414 12.3062 8.86719 12.3832 8.86719 12.4781C8.86719 12.573 8.94414 12.65 9.03906 12.65Z"
            fill="#428BC1"
          />
          <path
            d="M9.48828 13.0969C9.58321 13.0969 9.66016 13.0199 9.66016 12.925C9.66016 12.8301 9.58321 12.7531 9.48828 12.7531C9.39336 12.7531 9.31641 12.8301 9.31641 12.925C9.31641 13.0199 9.39336 13.0969 9.48828 13.0969Z"
            fill="#428BC1"
          />
          <path
            d="M10.0352 13.4062C10.1301 13.4062 10.207 13.3293 10.207 13.2344C10.207 13.1395 10.1301 13.0625 10.0352 13.0625C9.94023 13.0625 9.86328 13.1395 9.86328 13.2344C9.86328 13.3293 9.94023 13.4062 10.0352 13.4062Z"
            fill="#428BC1"
          />
          <path
            d="M10.6211 13.5438C10.716 13.5438 10.793 13.4668 10.793 13.3719C10.793 13.277 10.716 13.2 10.6211 13.2C10.5262 13.2 10.4492 13.277 10.4492 13.3719C10.4492 13.4668 10.5262 13.5438 10.6211 13.5438Z"
            fill="#428BC1"
          />
          <path
            d="M11.1016 13.4063C11.1016 13.3031 11.1703 13.2344 11.2391 13.2C11.3422 13.2 11.4109 13.2688 11.4453 13.3375C11.4453 13.4406 11.3766 13.5094 11.3078 13.5438C11.1703 13.5781 11.1016 13.5094 11.1016 13.4063Z"
            fill="#428BC1"
          />
          <path
            d="M11.8594 13.4062C11.9543 13.4062 12.0312 13.3293 12.0312 13.2344C12.0312 13.1395 11.9543 13.0625 11.8594 13.0625C11.7645 13.0625 11.6875 13.1395 11.6875 13.2344C11.6875 13.3293 11.7645 13.4062 11.8594 13.4062Z"
            fill="#428BC1"
          />
          <path
            d="M12.4102 13.0969C12.5051 13.0969 12.582 13.0199 12.582 12.925C12.582 12.8301 12.5051 12.7531 12.4102 12.7531C12.3152 12.7531 12.2383 12.8301 12.2383 12.925C12.2383 13.0199 12.3152 13.0969 12.4102 13.0969Z"
            fill="#428BC1"
          />
          <path
            d="M12.8555 12.65C12.9504 12.65 13.0273 12.573 13.0273 12.4781C13.0273 12.3832 12.9504 12.3062 12.8555 12.3062C12.7605 12.3062 12.6836 12.3832 12.6836 12.4781C12.6836 12.573 12.7605 12.65 12.8555 12.65Z"
            fill="#428BC1"
          />
          <path
            d="M13.1641 12.1C13.259 12.1 13.3359 12.0231 13.3359 11.9281C13.3359 11.8332 13.259 11.7563 13.1641 11.7563C13.0691 11.7563 12.9922 11.8332 12.9922 11.9281C12.9922 12.0231 13.0691 12.1 13.1641 12.1Z"
            fill="#428BC1"
          />
          <path
            d="M13.3359 11.4813C13.4309 11.4813 13.5078 11.4043 13.5078 11.3094C13.5078 11.2145 13.4309 11.1375 13.3359 11.1375C13.241 11.1375 13.1641 11.2145 13.1641 11.3094C13.1641 11.4043 13.241 11.4813 13.3359 11.4813Z"
            fill="#428BC1"
          />
          <path
            d="M13.3352 10.8625C13.232 10.8625 13.1633 10.7937 13.1289 10.725C13.1289 10.6219 13.1977 10.5531 13.2664 10.5187C13.3695 10.5187 13.4383 10.5875 13.4727 10.6562C13.507 10.7594 13.4383 10.8281 13.3352 10.8625Z"
            fill="#428BC1"
          />
          <path
            d="M13.1641 10.2437C13.259 10.2437 13.3359 10.1668 13.3359 10.0719C13.3359 9.97694 13.259 9.89999 13.1641 9.89999C13.0691 9.89999 12.9922 9.97694 12.9922 10.0719C12.9922 10.1668 13.0691 10.2437 13.1641 10.2437Z"
            fill="#428BC1"
          />
          <path
            d="M12.8555 9.69376C12.9504 9.69376 13.0273 9.61681 13.0273 9.52188C13.0273 9.42696 12.9504 9.35001 12.8555 9.35001C12.7605 9.35001 12.6836 9.42696 12.6836 9.52188C12.6836 9.61681 12.7605 9.69376 12.8555 9.69376Z"
            fill="#428BC1"
          />
          <path
            d="M12.4102 9.24689C12.5051 9.24689 12.582 9.16994 12.582 9.07501C12.582 8.98009 12.5051 8.90314 12.4102 8.90314C12.3152 8.90314 12.2383 8.98009 12.2383 9.07501C12.2383 9.16994 12.3152 9.24689 12.4102 9.24689Z"
            fill="#428BC1"
          />
          <path
            d="M12.0305 8.83438C11.9961 8.9375 11.893 8.97188 11.7898 8.9375C11.6867 8.90313 11.6523 8.8 11.6867 8.69688C11.7211 8.59375 11.8242 8.55938 11.9273 8.59375C12.0305 8.6625 12.0648 8.76563 12.0305 8.83438ZM11.4117 8.62813C11.4117 8.73125 11.3086 8.8 11.2055 8.76563C11.1023 8.76563 11.0336 8.6625 11.068 8.55938C11.068 8.45625 11.1711 8.3875 11.2742 8.42188C11.3773 8.45625 11.4461 8.55938 11.4117 8.62813ZM10.793 8.59375C10.793 8.69688 10.7242 8.76563 10.6555 8.8C10.5523 8.8 10.4836 8.73125 10.4492 8.6625C10.4492 8.55938 10.518 8.49063 10.5867 8.45625C10.6898 8.42188 10.793 8.49063 10.793 8.59375Z"
            fill="#428BC1"
          />
          <path
            d="M10.9297 11.5156C11.2145 11.5156 11.4453 11.2848 11.4453 11C11.4453 10.7152 11.2145 10.4844 10.9297 10.4844C10.6449 10.4844 10.4141 10.7152 10.4141 11C10.4141 11.2848 10.6449 11.5156 10.9297 11.5156Z"
            fill="#428BC1"
          />
          <path
            d="M10.9312 8.59375L10.8625 10.0719L10.9312 11L11.0344 10.0719L10.9312 8.59375ZM10.3125 8.6625L10.6219 10.1406L10.9312 11L10.7937 10.0719L10.3125 8.6625Z"
            fill="#428BC1"
          />
          <path
            d="M9.72734 8.90314L10.4148 10.2438L10.9305 11L10.5523 10.1406L9.72734 8.90314ZM9.24609 9.28126L10.243 10.4156L10.9305 11L10.3461 10.2781L9.24609 9.28126Z"
            fill="#428BC1"
          />
          <path
            d="M8.86719 9.79688L10.1047 10.6219L10.9297 11L10.1734 10.45L8.86719 9.79688Z"
            fill="#428BC1"
          />
          <path
            d="M8.62656 10.3813L10.0359 10.8281L10.9297 11L10.0703 10.6906L8.62656 10.3813ZM8.52344 11L10.0359 11.0688L10.9297 11L10.0359 10.9313L8.52344 11Z"
            fill="#428BC1"
          />
          <path
            d="M8.62891 11.6187L10.0727 11.3094L10.932 11L10.0383 11.1719L8.62891 11.6187ZM8.86953 12.2031L10.1758 11.55L10.932 11L10.107 11.3781L8.86953 12.2031Z"
            fill="#428BC1"
          />
          <path
            d="M9.24609 12.6844L10.3461 11.7219L10.9305 11L10.243 11.5844L9.24609 12.6844ZM9.72734 13.0969L10.5523 11.825L10.9305 11L10.4148 11.7563L9.72734 13.0969Z"
            fill="#428BC1"
          />
          <path
            d="M10.3125 13.3375L10.7937 11.9281L10.9312 11L10.6219 11.8594L10.3125 13.3375ZM10.9312 13.4062L11.0344 11.9281L10.9312 11L10.8625 11.9281L10.9312 13.4062ZM11.55 13.3375L11.275 11.8594L10.9312 11L11.1031 11.9281L11.55 13.3375Z"
            fill="#428BC1"
          />
          <path
            d="M12.1328 13.0969L11.4797 11.7563L10.9297 11L11.3422 11.8594L12.1328 13.0969ZM12.6484 12.6844L11.6516 11.5844L10.9297 11L11.5484 11.7219L12.6484 12.6844Z"
            fill="#428BC1"
          />
          <path
            d="M13.0266 12.2031L11.7891 11.3781L10.9297 11L11.6859 11.55L13.0266 12.2031ZM13.2672 11.6188L11.8578 11.1719L10.9297 11L11.8234 11.3094L13.2672 11.6188ZM13.3359 11L11.8578 10.8969L10.9297 11L11.8578 11.0688L13.3359 11ZM13.2672 10.3813L11.8234 10.6906L10.9297 11L11.8578 10.8281L13.2672 10.3813Z"
            fill="#428BC1"
          />
          <path
            d="M13.0266 9.79686L11.6859 10.45L10.9297 11L11.7891 10.6219L13.0266 9.79686ZM12.6484 9.31561L11.5484 10.2781L10.9297 11L11.6516 10.4156L12.6484 9.31561Z"
            fill="#428BC1"
          />
          <path
            d="M12.1328 8.90314L11.3422 10.175L10.9297 11L11.4797 10.2438L12.1328 8.90314Z"
            fill="#428BC1"
          />
          <path
            d="M11.5828 8.66251L11.1016 10.0719L10.9297 11L11.2734 10.1406L11.5828 8.66251Z"
            fill="#428BC1"
          />
        </g>
        <defs>
          <clipPath id="clip0_10686_74417">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: "IN",
    name: "India",
    dialCode: "+91",
    flag: IndianFlagIcon,
  });
  const [showCountryDropdown, setShowCountryDropdown] =
    useState<boolean>(false);
  const [countrySearch, setCountrySearch] = useState<string>("");

  // Animation refs
  const pricingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(pricingRef, { once: true });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const features: string[] = [
    "Application",
    "WebSite",
    "UI/UX",
    "SEO",
    "Others",
  ];

  const countries: Country[] = [
    { code: "IN", name: "India", dialCode: "+91", flag: IndianFlagIcon },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      } as Transition,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      } as Transition,
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      } as Transition,
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      } as Transition,
    },
  };

  const getProgressPercentage = (): number => {
    switch (currentStep) {
      case 1:
        return 0;
      case 2:
        return 20;
      case 3:
        return 40;
      case 4:
        return 60;
      case 5:
        return 80;
      default:
        return 100;
    }
  };

  const handleNext = (): void => {
    if (currentStep === 1 && selectedFeatures.length > 0) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!validateEmail(email)) {
        setEmailError("Email must include '@' and domain");
      } else {
        setCurrentStep(3);
      }
    } else if (currentStep === 3 && organization) {
      setCurrentStep(4);
    } else if (currentStep === 4 && name) {
      setCurrentStep(5);
    } else if (currentStep === 5 && phoneNumber) {
      setCurrentStep(6);
    }
  };

  const handleSubmit = (): void => {
    console.log("Complete form with:", {
      selectedFeatures,
      email,
      organization,
      name,
      phoneNumber,
    });
    setShowThankYouModal(true);
    setCurrentStep(1);
    setSelectedFeatures([]);
    setEmail("");
    setEmailError("");
    setOrganization("");
    setName("");
    setPhoneNumber("");
  };

  const handleBack = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFeatureToggle = (feature: string): void => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setEmail(value);

    if (emailError) {
      setEmailError("");
    }
  };

  const filteredCountries: Country[] = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.dialCode.includes(countrySearch)
  );

  const handleCountrySelect = (country: Country): void => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    setCountrySearch("");
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
        setCountrySearch("");
      }
    };

    if (showCountryDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCountryDropdown]);

  return (
    <>
      <div className="py-8 md:py-12 mt-[50px] lg:mt-[105px]">
        <motion.div
          ref={pricingRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C252E] mb-2 md:mb-4"
            variants={itemVariants}
          >
            Simple Pricing for Every Development
          </motion.h1>
          <motion.p
            className="text-[#1C252E] text-base md:text-lg mb-2"
            variants={itemVariants}
          >
            Choose the plan that fits your development and scale with ease
          </motion.p>
          <motion.div
            className="p-2 max-w-sm sm:max-w-md mx-auto"
            variants={itemVariants}
          >
            {/* Progress Bar */}
            <div className="mb-2 flex flex-col items-center">
              <div className="flex items-center justify-between w-[300px] mb-4 md:mb-4">
                <div className="flex-1 bg-gray-200 rounded-full h-[8px] mr-3">
                  <div
                    className="bg-[#6A75D1] h-[8px] rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500">
                  {getProgressPercentage()}%
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* Step 2: Features Selection */}
              {currentStep === 1 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="text-base sm:text-lg font-medium text-[#1C252E] mb-4 md:mb-4">
                    Which development are you interested in?
                  </h3>

                  <div className="space-y-2 sm:space-y-3 mb-4 md:mb-4 flex flex-col items-center">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`w-[300px] p-2 sm:p-3 border-2 rounded-lg text-center cursor-pointer transition-colors text-sm sm:text-base ${
                          selectedFeatures.includes(feature)
                            ? "border-black bg-gray-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handleFeatureToggle(feature)}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center gap-4 mb-4">
                    <Button
                      variant="primary"
                      size="medium"
                      className="px-8"
                      onClick={handleNext}
                      disabled={selectedFeatures.length === 0}
                    >
                      Next
                    </Button>
                    <Button
                      variant="secondary"
                      size="medium"
                      className="px-8"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Email Input */}
              {currentStep === 2 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="text-base sm:text-lg font-medium text-[#1C252E] mb-4 md:mb-4">
                    Which email should we use to send the details?
                  </h3>

                  <div className="mb-4 md:mb-4 flex justify-center">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="example@company.com"
                      className={`w-[300px] p-3 border-2 rounded-lg text-base focus:outline-none transition-colors ${
                        emailError
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-black"
                      }`}
                    />
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-sm mt-2 mb-4 md:mb-4">
                      {emailError}
                    </p>
                  )}
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <Button
                      variant="primary"
                      size="medium"
                      className="px-8"
                      onClick={handleNext}
                      disabled={!email.trim()}
                    >
                      Next
                    </Button>
                    <Button
                      variant="secondary"
                      size="medium"
                      className="px-8"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Organization Name */}
              {currentStep === 3 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="text-base sm:text-lg font-medium text-[#1C252E] mb-4 md:mb-4">
                    Can you tell us the name of your organization?
                  </h3>

                  <div className="mb-4 md:mb-4 flex justify-center">
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="your organisation"
                      className="w-[300px] p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="flex justify-center items-center gap-4 mb-4">
                    <Button
                      variant="primary"
                      size="medium"
                      className="px-8"
                      onClick={handleNext}
                      disabled={!organization.trim()}
                    >
                      Next
                    </Button>
                    <Button
                      variant="secondary"
                      size="medium"
                      className="px-8"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Name Input */}
              {currentStep === 4 && (
                <motion.div
                  key="step5"
                  variants={stepVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="text-base sm:text-lg font-medium text-[#1C252E] mb-4 md:mb-4">
                    We&apos;re almost there—what should we call you?
                  </h3>

                  <div className="mb-4 md:mb-4 flex justify-center">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-[300px] p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="flex justify-center items-center gap-4 mb-4">
                    <Button
                      variant="primary"
                      size="medium"
                      className="px-8"
                      onClick={handleNext}
                      disabled={!name.trim()}
                    >
                      Next
                    </Button>
                    <Button
                      variant="secondary"
                      size="medium"
                      className="px-8"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 6: Phone Number Input */}
              {currentStep === 5 && (
                <motion.div
                  key="step6"
                  variants={stepVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="text-base sm:text-lg font-medium text-[#1C252E] mb-4 md:mb-4">
                    Lastly, can we get your phone number?
                  </h3>

                  <div className="mb-4 md:mb-4 flex justify-center">
                    <div className="relative w-[300px]" ref={dropdownRef}>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Mobile Number"
                        className="w-full p-3 pl-14 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#6A75D1] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowCountryDropdown(!showCountryDropdown)
                        }
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 hover:bg-gray-50 rounded px-1 py-1 transition-colors focus:outline-none"
                      >
                        <selectedCountry.flag width="16" height="16" />
                        <svg
                          className={`w-3 h-3 text-gray-400 transition-transform ${
                            showCountryDropdown ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-hidden">
                          <div className="p-2 border-b border-gray-200">
                            <div className="relative">
                              <input
                                type="text"
                                value={countrySearch}
                                onChange={(e) =>
                                  setCountrySearch(e.target.value)
                                }
                                placeholder="Search"
                                className="w-full p-2 pr-8 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#6A75D1]"
                              />
                              <svg
                                className="absolute right-2 top-2.5 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                              >
                                <path
                                  d="M5.2 0.5C6.57913 0.5 7.90177 1.04786 8.87696 2.02304C9.85215 2.99823 10.4 4.32087 10.4 5.7C10.4 6.988 9.928 8.172 9.152 9.084L9.368 9.3H10L14 13.3L12.8 14.5L8.8 10.5V9.868L8.584 9.652C7.64029 10.4572 6.44052 10.8996 5.2 10.9C3.82087 10.9 2.49823 10.3521 1.52304 9.37696C0.547855 8.40177 0 7.07913 0 5.7C0 4.32087 0.547855 2.99823 1.52304 2.02304C2.49823 1.04786 3.82087 0.5 5.2 0.5ZM5.2 2.1C3.2 2.1 1.6 3.7 1.6 5.7C1.6 7.7 3.2 9.3 5.2 9.3C7.2 9.3 8.8 7.7 8.8 5.7C8.8 3.7 7.2 2.1 5.2 2.1Z"
                                  fill="#1C252E"
                                />
                              </svg>
                            </div>
                          </div>

                          <div className="max-h-40 overflow-y-auto">
                            {filteredCountries.map((country) => (
                              <button
                                key={country.code}
                                onClick={() => handleCountrySelect(country)}
                                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-[#E8E8E7] transition-colors text-left"
                              >
                                <country.flag width="22" height="19" />
                                <div className="flex-1">
                                  <div className="font-medium text-sm">
                                    {country.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {country.code} ({country.dialCode})
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-4 mb-4">
                    <Button
                      variant="primary"
                      size="medium"
                      className="px-8"
                      onClick={handleSubmit}
                      disabled={!phoneNumber.trim()}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="secondary"
                      size="medium"
                      className="px-8"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <p className="text-xs text-[#6E6E73EE] leading-relaxed px-2 font-body max-w-2xl mx-auto">
            I accept my personal data shall be processed in accordance with the
            Digiente&apos;s privacy policy, which also includes information in relation
            to my rights. I agree that Digiente may contact me about their
            products and services.
          </p>
        </motion.div>
      </div>

      <ChatNow />
      <AnimatePresence>
        {showThankYouModal && (
          <motion.div
            className="fixed inset-0 bg-[rgba(255,255,255,0.20)] backdrop-blur-[5px] flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowThankYouModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md mx-auto text-center shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              } as Transition}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#1C252E] mb-3 font-body">
                Thanks for joining us!
              </h3>
              <p className="text-[#5C6268] text-sm md:text-base leading-relaxed mb-4 font-body">
                We will contact you soon with more information about how
                Digiente can help optimize your query.
              </p>

              <Button
                variant="primary"
                size="medium"
                className="px-6"
                onClick={() => setShowThankYouModal(false)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Pricing;