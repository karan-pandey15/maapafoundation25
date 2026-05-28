import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Footer from "@/app/components/footer/Footer";
import {
  initiatives,
  getAllInitiativeSlugs,
  getInitiativeBySlug,
} from "@/data/initiatives";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllInitiativeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const program = getInitiativeBySlug(slug);

  if (!program) {
    return { title: "Program Not Found | MAAPA Foundation" };
  }

  return {
    title: `${program.title} | MAAPA Foundation`,
    description: program.preview,
  };
}

export default async function InitiativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getInitiativeBySlug(slug);

  if (!program) {
    notFound();
  }

  const Icon = program.icon;
  const otherPrograms = initiatives.filter((item) => item.slug !== slug);

  return (
    <div className="bg-white">
      <section className="relative mt-8 min-h-[320px] overflow-hidden md:min-h-[420px]">
        <img
          src={program.image}
          alt={program.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6B1915]/95 via-[#94231E]/85 to-[#94231E]/60" />
        <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Link
            href="/about"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to About
          </Link>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/80">
              {program.tagline}
            </p>
            <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {program.title}
            </h1>
            <p className="text-lg leading-relaxed text-white/90 md:text-xl">
              {program.preview}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-3">
            {program.highlights.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#94231E]" />
                <span className="text-sm font-medium leading-relaxed text-gray-700 md:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-14 md:space-y-20">
            {program.sections.map((section, index) => (
              <article key={section.heading}>
                <span className="mb-3 inline-block rounded-full bg-[#94231E]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#94231E]">
                  Part {index + 1}
                </span>
                <h2 className="mb-4 text-2xl font-bold text-[#94231E] md:text-3xl">
                  {section.heading}
                </h2>
                <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#94231E] md:text-3xl">
            Explore Our Other Programs
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPrograms.slice(0, 6).map((item) => {
              const OtherIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/about/initiatives/${item.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#94231E]/50" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 pr-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                        <OtherIcon className="h-5 w-5 text-[#94231E]" />
                      </div>
                      <span className="line-clamp-2 text-sm font-bold leading-tight text-white">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <p className="line-clamp-2 p-4 text-sm text-gray-600">
                    {item.preview}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#94231E] to-[#6B1915] py-14 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Support This Program
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Volunteer donate or partner with us to expand this work and reach more families who need help today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contactus"
              className="rounded-full bg-white px-8 py-3 font-semibold text-[#94231E] transition hover:bg-gray-100"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/donate"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
