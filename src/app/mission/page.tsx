"use client";
import React from "react";
import Footer from "../components/footer/Footer";
import InitiativeCard from "../components/about/InitiativeCard";
import { initiatives } from "@/data/initiatives";

export default function MissionPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80 mb-4">
              Our Mission
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              MAAPA Foundation Community Impact
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Our mission is to support underprivileged communities through sustained relief, inclusive education, emergency response, and accessible healthcare. We commit to creating lasting change by delivering compassionate, comprehensive support where it is needed most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-6">
                What We Do
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At MAAPA Foundation we work tirelessly to address the most pressing needs of underprivileged communities. From hunger relief and education to disaster response and healthcare camps our programs deliver comprehensive support where it matters most. Tap Read More on any card to see full details and photos.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/image/secindimag.jpeg"
                alt="MAAPA Foundation community programs"
                className="w-full h-full min-h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#94231E]/50 via-[#94231E]/20 to-transparent" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {initiatives.map((initiative) => (
              <InitiativeCard key={initiative.slug} initiative={initiative} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
