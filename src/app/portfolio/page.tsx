"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";

interface AppCard {
  id: number;
  category: string;
  title: string;
  description: string;
  logo: string;
  mockupImages: string[];
  googlePlayLink: string;
  appStoreLink: string;
}

const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");

  const appCards: AppCard[] = [
    {
      id: 1,
      category: "Financial Services",
      title: "Add Rupees",
      description:
        "Addrupee is Distributor of secured and un secured loans. We have wide range of loans products like Personal Loans, Business Loan, Home Loan, Loans against Property, OD against Property, and Loan for Purchase of Commercial Property, Lease Rental Discounting, and Business Loans etc.",
      logo: "/image/AddRupees.png",
      mockupImages: ["/image/AddRupees1.png", "/image/AddRupees2.png", "/image/AddRupees3.png"],
      googlePlayLink: "https://play.google.com/store/apps/details?id=com.addrupees.demoappthree&pcampaignid=web_share",
      appStoreLink: "https://play.google.com/store/apps/details?id=com.addrupees.demoappthree&pcampaignid=web_share",
    },
    {
      id: 2,
      category: "Fantasy App",
      title: "Pro11",
      description:
        "Pro11 is a premier fantasy sports app that lets you build custom teams, compete in live contests, and win rewards. With real-time updates, detailed player stats, and an intuitive interface, Pro11 delivers a seamless, immersive fantasy experience for sports enthusiasts.",
      logo: "/image/Pro11.png",
      mockupImages: ["/image/Pro111.png", "/image/Pro112.png", "/image/Pro113.png", "/image/Pro114.png"],
      googlePlayLink: "https://play.google.com/store/apps/details?id=com.progroww",
      appStoreLink: "https://play.google.com/store/apps/details?id=com.progroww",
    },
    // {
    //   id: 3,
    //   category: "Social & Communication",
    //   title: "Connect Pro",
    //   description:
    //     "We developed Connect Pro, a social networking app that brings people together with innovative features and seamless communication tools.",
    //   logo: "/image/socialapp.png",
    //   mockupImages: [
    //     "https://via.placeholder.com/300x600/7C3AED/FFFFFF?text=Phone+1",
    //     "https://via.placeholder.com/300x600/7C3AED/FFFFFF?text=Phone+2",
    //   ],
    //   googlePlayLink: "https://play.google.com/store",
    //   appStoreLink: "https://www.apple.com/app-store/",
    // },
    // {
    //   id: 4,
    //   category: "Health & Fitness",
    //   title: "FitLife",
    //   description:
    //     "We created FitLife, a comprehensive fitness app that helps users achieve their health goals with personalized workout plans and nutrition tracking.",
    //   logo: "/image/socialapp.png",
    //   mockupImages: [
    //     "https://via.placeholder.com/300x600/059669/FFFFFF?text=Phone+1",
    //     "https://via.placeholder.com/300x600/059669/FFFFFF?text=Phone+2",
    //   ],
    //   googlePlayLink: "https://play.google.com/store",
    //   appStoreLink: "https://www.apple.com/app-store/",
    // },
  ];

  const openModal = (images: string[], index: number, title: string) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setCurrentTitle(title);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );
  };

  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 mt-[50px] lg:mt-[105px] py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="text-center">
            <h2 className="lg:mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#000] bg-clip-text  mb-4">
              Our Portfolio
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover our innovative mobile applications designed to transform
              user experiences
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {appCards.map((card, idx) => (
              <div
                key={card.id}
                className="group bg-white rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Card Content */}
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Content */}
                  <div className="flex-1 p-8 lg:p-10">
                    {/* Category Badge */}
                    <div className="mb-6 flex items-center space-x-2">
                      <span className="px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 text-[14px] font-bold tracking-[0.5px] rounded-full whitespace-nowrap">
                        {card.category}
                      </span>
                    </div>

                    {/* Logo and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={card.logo}
                          alt={card.title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                        {card.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                      {card.description}
                    </p>

                    {/* Action Button */}
                    <div className="mb-6">
                      <button
                        onClick={() =>
                          openModal(card.mockupImages, 0, card.title)
                        }
                        className="group/btn px-8 py-3 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-full text-sm font-bold hover:from-blue-800 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                      >
                        Explore Project
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={card.googlePlayLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <div className="bg-black text-white px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105">
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                          </svg>
                          <div className="text-left">
                            <div className="text-[14px] font-semibold">
                              Google Play
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right Side - Image Preview */}
                  <div className="relative lg:w-80 flex items-center justify-center p-8 lg:p-6  ">
                    <div className="relative group/img">
                      <div className="absolute inset-0   rounded-3xl group-hover/img:opacity-50 transition-opacity duration-500"></div>
                      <img
                        src={card.mockupImages[0]}
                        alt={`${card.title} mockup 1`}
                        className="relative w-full max-w-[200px] lg:max-w-[240px] h-auto object-contain shadow-2xl cursor-pointer hover:scale-105 transition-all duration-500 rounded-2xl"
                        onClick={() =>
                          openModal(card.mockupImages, 0, card.title)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-opacity-95 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4 lg:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ✖ Close Button */}

            {/* 🖋 Title */}
            <div className="absolute  top-[65px] lg:top-[125px] left-0 right-0 text-center text-white text-2xl md:text-3xl font-semibold tracking-wide drop-shadow-lg">
              {currentTitle}
            </div>
            <button
              onClick={closeModal}
              className="absolute top-[65px] lg:top-[125px] right-6 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all duration-300  hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-7 h-7" />
            </button>

            {/* ◀ Prev Button */}
            {currentImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white hover:scale-110 transition-all duration-300 backdrop-blur-md p-4 rounded-full shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            {/* 🖼 Main Image */}
            <div className="flex items-center justify-center w-full h-full py-32 lg:py-40 group">
              <img
                src={currentImages[currentImageIndex]}
                alt={`${currentTitle} - ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-110"
              />
            </div>

            {/* ▶ Next Button */}
            {currentImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white hover:scale-110 transition-all duration-300 backdrop-blur-md p-4 rounded-full shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}

            {/* 🧭 Thumbnail Navigation */}
            {currentImages.length > 1 && (
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20 px-6">
                {currentImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`relative overflow-hidden rounded-xl w-16 h-24 lg:w-20 lg:h-28 border-2 transition-all duration-300 transform ${index === currentImageIndex
                      ? "border-white scale-110 shadow-xl brightness-110"
                      : "border-transparent opacity-70 hover:opacity-100 hover:scale-105"
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}


      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default PortfolioPage;
