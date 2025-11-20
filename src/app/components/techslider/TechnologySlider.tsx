"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, easeOut, easeInOut } from "framer-motion";

const TechSlider: React.FC = () => {
  const technologies = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [introDone, setIntroDone] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto scroll AFTER intro animation
  useEffect(() => {
    if (!isVisible || !introDone) return;
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % technologies.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [isVisible, introDone]);

  // Variants for headings
  const headingLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };
  const headingRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };
  const border = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut, delay: 0.9 },
    },
  };

  // Card intro animation
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -150 },
    hiddenRight: { opacity: 0, x: 150 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: easeOut },
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: easeInOut },
    },
  };

  return (
    <div ref={sectionRef} className="w-full pt-16 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-4">
            <motion.div
              variants={headingLeft}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="text-4xl md:text-6xl font-bold text-black"
            >
              Technologies We
            </motion.div>
            <motion.div
              variants={headingRight}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="text-4xl md:text-6xl font-bold text-black"
            >
              Use Every Day
            </motion.div>
          </div>
          <motion.div
            variants={border}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="w-32 h-1 bg-black mx-auto rounded-full origin-center"
          />
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{ x: -sliderIndex * 176 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            onAnimationComplete={() => setIntroDone(true)}
          >
            {technologies.map((tech, index) => {
              const isLeft = index % 6 < 3;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial={isLeft ? "hiddenLeft" : "hiddenRight"}
                  animate={isVisible ? "visible" : isLeft ? "hiddenLeft" : "hiddenRight"}
                  whileHover="hover"
                  className="flex-shrink-0 w-32 md:w-40 lg:w-48"
                >
                  <div className="relative p-6 md:p-8 rounded-2xl bg-white transition-all duration-300 group cursor-pointer">
                    <div className="text-center">
                      <div className="flex justify-center items-center mb-4 h-16 md:h-20">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 md:w-16 md:h-16 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-gray-600 font-medium text-sm md:text-base lg:text-lg group-hover:text-gray-800 transition-colors duration-300 text-center">
                        {tech.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gray-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechSlider;
