"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CodingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [2.1, 1.2]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#FFFFFF] mt-[10px]"
    >
      {/* Text Content */}
      <div className="w-full flex flex-col items-center justify-center text-center mb-8 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#000] mb-4"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            Code the Future
          </motion.h1>

          <motion.div
            className="h-1 bg-[#000]"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.span
            className="text-2xl sm:text-4xl font-bold text-[#000]"
            initial={{ opacity: 0, translateX: -30 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Innovate
          </motion.span>
        </div>

        <motion.p
          className="text-[#000] text-base sm:text-xl leading-relaxed font-medium mb-8 max-w-7xl"
          initial={{ opacity: 0, translateX: -30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Build cutting-edge solutions with our community of developers,
          creating innovative software for a connected world.
        </motion.p>
        <Link href="/contactus" passHref>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button className="flex items-center gap-2 border border-[#000] text-[#000] px-6 py-3 rounded-full font-medium hover:bg-white/10 transition text-base">
              <ArrowRight size={18} />
              Join Now
            </button>
          </motion.div>
        </Link>
      </div>

      {/* Sticky Custom iPhone Mockup */}
      <div className="sticky bottom-0 top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale }}
          className="relative w-[90vw] max-w-[800px]"
        >
          {/* Desktop Landscape */}
          <div className="hidden md:block w-full aspect-[19/9]">
            <div className="relative w-full h-full rounded-[2.5rem] border-[12px] border-black bg-black overflow-hidden shadow-2xl">
              {/* Inner video */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/Coding.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Notch (left center) */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-[14px] h-[80px] rounded-full bg-black/80" />

              {/* Bottom button (bottom center) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[6px] rounded-full bg-black/70" />
            </div>
          </div>

          {/* Mobile Portrait */}
          <div className="block md:hidden w-full aspect-[9/19]">
            <div className="relative w-full h-full rounded-[2.5rem] border-[12px] border-black bg-black overflow-hidden shadow-2xl">
              {/* Inner video */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/Coding.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Notch (top center) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[12px] rounded-full bg-black/80" />

              {/* Bottom button */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[6px] rounded-full bg-black/70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingPage;
