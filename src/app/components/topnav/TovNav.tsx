"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

interface ContactInfo {
  phone: string;
  email: string;
  flagEmoji: string;
  flagImg: string;
}

const contactData: ContactInfo[] = [
  {
    phone: "+91 95691 25048",
    email: "sales@Digiente.com",
    flagEmoji: "🇮🇳",
    flagImg: "/flags/india.png",
  },
  {
    phone: "+91 97180 92114",
    email: "sales@franticpro.com",
    flagEmoji: "🇮🇳",
    flagImg: "/flags/india.png",
  },
  {
    phone: "+1 (888) 552-0055",
    email: "sales@karanpandey.com",
    flagEmoji: "🇺🇸",
    flagImg: "/flags/usa.png",
  },
];

const FlagImage: React.FC<{
  src: string;
  alt: string;
  emoji: string;
  width: number;
  height: number;
  className?: string;
}> = ({ src, alt, emoji, width, height, className = "" }) => {
  const [imageError, setImageError] = React.useState(false);

  if (imageError) {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${width * 0.8}px`,
        }}
      >
        {emoji}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} object-contain`}
      onError={() => setImageError(true)}
      loading="lazy"
    />
  );
};

const TopNav: React.FC = () => {
  const handlePhoneClick = (phone: string): void => {
    window.open(`tel:${phone}`, "_self");
  };

  const handleEmailClick = (email: string): void => {
    window.open(`mailto:${email}`, "_self");
  };
  const handleWhatsAppClick = (phone: string): void => {
    const message = "Hi! I am interested in your services.";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // opens in a new tab
  };

  return (
    <nav className="hidden lg:block w-full bg-[#fff]">
      {/* Hidden on phone + tablet, shown on desktop (lg and up) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {contactData.map((contact, index) => (
              <motion.button
                key={index}
                onClick={() => handlePhoneClick(contact.phone)}
                className="relative flex items-center space-x-1 text-[#000] hover:text-[#333] transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Call ${contact.phone}`}
              >
                <FlagImage
                  src={contact.flagImg}
                  alt={`${contact.flagEmoji} Flag`}
                  emoji={contact.flagEmoji}
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <Phone className="h-3.5 w-3.5" />
                <span className="text-[13px] font-[500]">{contact.phone}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#000] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleEmailClick(contactData[0].email)}
              className="relative flex items-center space-x-1 text-[#000] hover:text-[#333] transition-colors duration-200 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Email ${contactData[0].email}`}
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="text-[13px] font-[500]">
                {contactData[0].email}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#000] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <motion.button
              onClick={() => handleWhatsAppClick(contactData[0].phone)}
              className="px-3 py-1 bg-[#000] text-white text-[13px] font-bold rounded-full hover:bg-[#333] transition-colors duration-200 animate-pulse-subtle flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Chat Now"
            >
              {/* Shaking chat icon */}
              <motion.span
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              >
                <MessageCircle size={16} className="text-white" />
              </motion.span>
              Chat Now
            </motion.button>

            <motion.button
              onClick={() => handlePhoneClick(contactData[0].phone)}
              className="px-3 py-1 bg-[#FFFFFF] text-[#000] border border-[#000] text-[13px] font-[500] rounded-full hover:bg-[#F0F0F0] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Book a Call"
            >
              Book a Call
            </motion.button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
          }
        }
        .animate-pulse-subtle {
          animation: subtle-pulse 2s infinite;
        }
      `}</style>
    </nav>
  );
};

export default TopNav;
