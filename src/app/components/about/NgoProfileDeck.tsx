"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileDown,
  FileText,
  Building2,
  Trophy,
  Users,
  Target,
  Handshake,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { generateNgoProfilePdf } from "@/lib/generateNgoProfilePdf";
import {
  NGO_NAME,
  NGO_TAGLINE,
  NGO_LOGO_PATH,
  profileDeckSections,
} from "@/lib/ngoProfileData";

const NgoProfileDeck: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setDownloading(true);
    setError(null);
    setDownloadSuccess(false);

    try {
      await generateNgoProfilePdf();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch {
      setError("Unable to generate PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const sectionIcons = [FileText, Building2, Target, Trophy, Users, Target, Handshake];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#94231E]/10 text-[#94231E] text-sm font-semibold mb-4">
              Official Document
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#94231E] mb-4">
              NGO Profile Deck
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Download our professional 10-page PDF profile — complete introduction, registration,
              all programs, achievements, beneficiaries, future goals, and partnership proposal.
            </p>
            <p className="text-lg md:text-xl text-[#B5423D] italic mt-3 font-medium">
              {NGO_TAGLINE}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
            {/* Preview card */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="bg-white rounded-2xl shadow-xl border border-[#94231E]/10 overflow-hidden flex flex-col h-full">
                <div className="bg-gradient-to-br from-[#94231E] to-[#6B1915] p-8 text-white text-center">
                  <div className="relative w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={NGO_LOGO_PATH}
                      alt={`${NGO_NAME} logo`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{NGO_NAME}</h3>
                  <p className="text-sm italic text-white/90 mb-4">{NGO_TAGLINE}</p>
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    NGO Profile Deck — PDF
                  </p>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm text-gray-500 border-b border-gray-100 pb-2">
                      <span>Format</span>
                      <span className="font-medium text-gray-800">PDF (A4)</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 border-b border-gray-100 pb-2">
                      <span>Pages</span>
                      <span className="font-medium text-gray-800">10 Pages</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 border-b border-gray-100 pb-2">
                      <span>Programs Covered</span>
                      <span className="font-medium text-gray-800">8 Categories</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Language</span>
                      <span className="font-medium text-gray-800">English</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#94231E] text-white font-semibold text-base hover:bg-[#B5423D] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {downloading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generating PDF...
                      </>
                    ) : downloadSuccess ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Downloaded Successfully
                      </>
                    ) : (
                      <>
                        <FileDown className="w-5 h-5" />
                        Download Profile Deck (PDF)
                      </>
                    )}
                  </button>

                  {error && (
                    <p className="text-red-600 text-sm text-center mt-3">{error}</p>
                  )}
                  <p className="text-xs text-gray-400 text-center mt-3">
                    File: MAAPA-Foundation-NGO-Profile-Deck.pdf
                  </p>
                </div>
              </div>
            </div>

            {/* Contents list */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-[#94231E] mb-6">What&apos;s Inside the Deck</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {profileDeckSections.map((section, index) => {
                  const Icon = sectionIcons[index] ?? FileText;
                  return (
                    <div
                      key={section.title}
                      className="flex gap-4 p-4 md:p-5 bg-white rounded-xl border border-gray-100 hover:border-[#94231E]/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#94231E]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#94231E]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#B5423D] mb-0.5">
                          Section {index + 1}
                        </p>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          {section.title}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-5 bg-[#94231E]/5 rounded-xl border border-[#94231E]/10">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#94231E]">All 8 program categories</span>{" "}
                  are documented in full detail: Hunger Relief, Education, Environment, Youth
                  Skills, Senior Support, Divyang Inclusion, Disaster Relief, and Blood Donation &
                  Medical Camps — ideal for donors, CSR partners, and institutional collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NgoProfileDeck;
