"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type CommonProps = {
  type: "button" | "text" | "image" | "video";
  content: React.ReactNode;  
  onClick?: () => void;
  className?: string;
};

const CommonComponent: React.FC<CommonProps> = ({
  type,
  content,
  onClick,
  className = "",
}) => {
  switch (type) {
    case "button":
      return (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className={`w-full bg-[#000] text-white px-3 py-1 rounded-[20px] font-body text-[14px]  cursor-pointer hover:bg-gray-800  ${className}`}
        >
          {content}
        </motion.button>
      );

    case "text":
      return (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-[14px] text-[#000] ${className}`}
        >
          {content}
        </motion.p>
      );

    case "image":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`relative w-full h-auto ${className}`}
        >
          <Image
            src={content as string}
            alt="Common Image"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </motion.div>
      );

    case "video":
      return (
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={content as string}
          autoPlay
          muted
          loop
          playsInline
          className={`rounded-lg shadow-md ${className}`}
        />
      );

    default:
      return null;
  }
};

export default CommonComponent;
