import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="py-[50px] bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
            Contact Us
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 px-2 sm:px-4">
            Ready to elevate your brand’s digital presence? Connect with
            Digiente today!
          </p>
        </div>

        {/* Description */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
         <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
  At Digiente, we create custom websites, apps, and digital marketing solutions that help your brand connect with audiences. Our expert team delivers impactful campaigns and web applications to drive success and growth. Contact us to start transforming your digital presence!
</p>

        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Phone Card 1 */}
          <a
            href="tel:+919569125048"
            className="border-2 border-gray-300 rounded-xl p-4 sm:p-5 md:p-6 hover:border-gray-400 transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-7 h-7 xs:w-8 xs:h-8 relative flex-shrink-0">
                <Image
                  src="/flags/india.png"
                  alt="India Flag"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 sm:gap-2 text-gray-700 font-semibold text-xs xs:text-sm sm:text-base">
                  <Phone className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <span className="hover:text-gray-900 transition-colors">
                    +91 95691 25048
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Phone Card 2 */}
          <a
            href="tel:+919718092114"
            className="border-2 border-gray-300 rounded-xl p-4 sm:p-5 md:p-6 hover:border-gray-400 transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-7 h-7 xs:w-8 xs:h-8 relative flex-shrink-0">
                <Image
                  src="/flags/india.png"
                  alt="India Flag"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 sm:gap-2 text-gray-700 font-semibold text-xs xs:text-sm sm:text-base">
                  <Phone className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <span className="hover:text-gray-900 transition-colors">
                    +91 97180 92114
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:info@Digiente.com"
            className="border-2 border-gray-300 rounded-xl p-4 sm:p-5 md:p-6 hover:border-gray-400 transition-all duration-300 hover:shadow-md cursor-pointer sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-700 flex-shrink-0" />
              <span className="text-gray-700 font-semibold hover:text-gray-900 transition-colors text-xs xs:text-sm sm:text-base break-all">
                info@Digiente.com
              </span>
            </div>
          </a>
        </div>

        {/* Additional Services Info */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-400 px-2 sm:px-4">
           From Websites to SEO, Marketing to Growth — we help your business succeed online.
          </p>
        </div>
      </div>
    </div>
  );
}
