"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  bgColor: string;
  iconColor: string;
}

const OurService = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Website Design & Development",
      description:
        "Full-stack web development using modern technologies like React, Node.js, and cloud platforms for scalable solutions.",
      details: [
        "Frontend built with React.js, Next.js, and Tailwind CSS for responsive design.",
        "Backend development using Node.js, Express.js, and databases like MongoDB or PostgreSQL.",
        "Deployed on scalable cloud platforms such as AWS, Vercel, or Netlify.",
      ],
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-400",
      iconColor: "text-white",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: "Mobile App Development",
      description:
        "Cross-platform and native apps built with Flutter, React Native, Swift, and Kotlin to deliver seamless mobile experiences.",
      details: [
        "Native iOS and Android apps with Swift and Kotlin.",
        "Cross-platform apps using React Native and Flutter for faster delivery.",
        "API integration and secure backend powered by Node.js or Firebase.",
      ],
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-400",
      iconColor: "text-white",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M11 8v6l4 2" />
        </svg>
      ),
      title: "SEO & Search Engine Ranking",
      description:
        "Advanced on-page, off-page, and technical SEO strategies using tools like Ahrefs, SEMrush, and Google Search Console to boost rankings.",
      details: [
        "On-page SEO: optimized content, schema markup, and technical fixes.",
        "Off-page SEO: link-building, guest posting, and authority signals.",
        "Tools: Ahrefs, SEMrush, and Google Search Console for performance tracking.",
      ],
      bgColor: "bg-gradient-to-br from-orange-500 to-amber-400",
      iconColor: "text-white",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
      ),
      title: "Lead Generation & Conversion",
      description:
        "High-converting landing pages, automation tools, and analytics to attract qualified leads and increase sales.",
      details: [
        "Landing page optimization with A/B testing and heatmaps.",
        "Automation through HubSpot, ActiveCampaign, or Mailchimp.",
        "Conversion tracking via Google Analytics and Tag Manager.",
      ],
      bgColor: "bg-gradient-to-br from-red-500 to-rose-400",
      iconColor: "text-white",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          <path d="M15 5l3 3" />
        </svg>
      ),
      title: "Digital Marketing & Branding",
      description:
        "Targeted campaigns across Google Ads, Meta, and LinkedIn combined with content marketing to grow brand visibility.",
      details: [
        "Paid ads across Google, Facebook, Instagram, and LinkedIn.",
        "Content marketing: blogs, video, and social campaigns.",
        "Brand design using tools like Canva, Adobe Creative Suite, and Figma.",
      ],
      bgColor: "bg-gradient-to-br from-indigo-500 to-blue-400",
      iconColor: "text-white",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 01-4 4h-2z" />
          <path d="M9 5l6 0" />
          <circle cx="9" cy="17" r="1" />
          <circle cx="15" cy="17" r="1" />
        </svg>
      ),
      title: "Business Consulting & Growth Strategy",
      description:
        "Data-driven consulting with market research, competitor analysis, and digital transformation strategies to scale businesses.",
      details: [
        "Market research and competitor analysis to identify growth opportunities.",
        "Digital transformation strategies leveraging AI, cloud, and automation tools.",
        "Business roadmaps designed for scaling operations and revenue.",
      ],
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-400",
      iconColor: "text-white",
    },
  ];

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <section className=" px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-black mx-auto rounded-full origin-center mb-6"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          />
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We provide modern, scalable, and user-friendly digital solutions to
            help businesses grow in today&apos;s competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() => handleCardClick(service)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 h-full flex flex-col">
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl ${service.bgColor} flex items-center justify-center ${service.iconColor} shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 text-center min-h-[56px] flex items-center justify-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-6 md:p-8 lg:p-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-md w-full mx-auto text-center shadow-2xl max-h-[calc(100vh-96px)] overflow-y-auto"
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-24 h-24 rounded-2xl ${selectedService.bgColor} flex items-center justify-center ${selectedService.iconColor} shadow-xl`}
                  >
                    {selectedService.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {selectedService.title}
                </h3>

                {/* Details as bullet points */}
                <ul className="text-gray-700 text-sm mb-8 leading-relaxed text-left space-y-2">
                  {selectedService.details.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-black">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={closePopup}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurService;