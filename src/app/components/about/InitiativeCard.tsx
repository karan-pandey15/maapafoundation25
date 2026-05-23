"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Initiative } from "@/data/initiatives";

type InitiativeCardProps = {
  initiative: Initiative;
};

export default function InitiativeCard({ initiative }: InitiativeCardProps) {
  const Icon = initiative.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#94231E]/20 hover:bg-white hover:shadow-xl">
      <div className="relative h-36 overflow-hidden sm:h-40">
        <img
          src={initiative.image}
          alt={initiative.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6B1915]/80 via-[#94231E]/30 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 shadow-md transition-colors duration-300 group-hover:bg-[#94231E]">
          <Icon className="h-6 w-6 text-[#94231E] transition-colors duration-300 group-hover:text-white" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#B5423D]">
          {initiative.tagline}
        </p>
        <h3 className="mb-3 text-base font-bold leading-snug text-[#94231E] md:text-lg">
          {initiative.title}
        </h3>
        <p className="mb-5 flex-grow text-sm leading-relaxed text-gray-600">
          {initiative.preview}
        </p>
        <Link
          href={`/about/initiatives/${initiative.slug}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#94231E] bg-white px-4 py-2.5 text-sm font-semibold text-[#94231E] transition-colors duration-200 hover:bg-[#94231E] hover:text-white sm:w-auto"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
