"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";

const CtaSection: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const isInViewCta = useInView(ctaRef, { once: false, amount: 0.3 }); // Fixed from previous error

  // Explicitly type the variants as Framer Motion's Variants
  const headingVariant: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paragraphVariant: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const buttonVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section className="pb-4 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[20px] py-12 text-center sm:px-6 lg:px-12">
          <motion.div
            ref={ctaRef}
            initial="hidden"
            animate={isInViewCta ? "visible" : "hidden"}
            className="max-w-3xl mx-auto flex flex-col items-center gap-6"
          >
            {/* Heading */}
            <motion.h2
              variants={headingVariant}
              className="text-[#1C252E] text-[48px] md:text-[56px] font-[600] leading-[1.1] font-body"
            >
              Start Building Today
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={paragraphVariant}
              className="text-[#5C6268] text-[16px] font-[400] leading-[27px] font-body"
            >
              Connect with our team to explore innovative software solutions and
              tools designed to empower developers and accelerate your tech
              projects.
            </motion.p>

            {/* Button */}
            <motion.div variants={buttonVariant}>
              <Link href="/contactus" scroll={false} shallow={true}>
                <button className="bg-[#1C252E] text-white px-8 py-4 rounded-full font-body text-[16px] font-[500] hover:bg-[#2C3540] transition-colors duration-300">
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;