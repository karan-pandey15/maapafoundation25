"use client";

import { useState } from "react";
import {
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  GraduationCap,
  Send,
  Users,
  Briefcase,
  Heart,
  Megaphone,
  ClipboardList,
} from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80";
const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";
const LEARN_IMAGE =
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80";

const tracks = [
  {
    icon: Heart,
    title: "Social Impact and Field Work",
    description:
      "Work on food drives medical camps and community outreach with our ground teams.",
  },
  {
    icon: Megaphone,
    title: "Events and Campaigns",
    description:
      "Plan drives awareness events and donor engagement activities across cities.",
  },
  {
    icon: BookOpen,
    title: "Content and Digital Media",
    description:
      "Create stories photos and social content that share our mission with the world.",
  },
  {
    icon: Briefcase,
    title: "Operations and Research",
    description:
      "Support reporting data entry partner coordination and program documentation.",
  },
];

const programSteps = [
  { step: "01", title: "Apply Online", detail: "Fill the enrollment form with your details and preferred track." },
  { step: "02", title: "Application Review", detail: "Our team reviews your profile within five working days." },
  { step: "03", title: "Interview", detail: "Short online or in person conversation about your goals and availability." },
  { step: "04", title: "Orientation", detail: "Welcome session on MAAPA values safety and your project plan." },
  { step: "05", title: "Active Internship", detail: "Hands on work with mentor check ins every week." },
  { step: "06", title: "Certificate", detail: "Completion certificate and recommendation letter for strong performers." },
];

const durations = ["4 Weeks", "8 Weeks", "12 Weeks"];
const studyYears = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Post Graduate", "Other"];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  course: string;
  studyYear: string;
  city: string;
  track: string;
  duration: string;
  startDate: string;
  motivation: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  course: "",
  studyYear: "",
  city: "",
  track: "",
  duration: "",
  startDate: "",
  motivation: "",
};

export default function InternshipProgram() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    let valid = true;

    if (!formData.fullName.trim()) {
      next.fullName = "Full name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      next.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = "Enter a valid email";
      valid = false;
    }
    if (!formData.phone.trim()) {
      next.phone = "Phone is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      next.phone = "Phone must be 10 digits";
      valid = false;
    }
    if (!formData.college.trim()) {
      next.college = "College or university is required";
      valid = false;
    }
    if (!formData.course.trim()) {
      next.course = "Course or degree is required";
      valid = false;
    }
    if (!formData.studyYear) {
      next.studyYear = "Select your year of study";
      valid = false;
    }
    if (!formData.city.trim()) {
      next.city = "City is required";
      valid = false;
    }
    if (!formData.track) {
      next.track = "Select an internship track";
      valid = false;
    }
    if (!formData.duration) {
      next.duration = "Select preferred duration";
      valid = false;
    }
    if (!formData.startDate) {
      next.startDate = "Select expected start date";
      valid = false;
    }
    if (!formData.motivation.trim()) {
      next.motivation = "Tell us why you want to join";
      valid = false;
    } else if (formData.motivation.trim().length < 40) {
      next.motivation = "Please write at least 40 characters";
      valid = false;
    }

    setErrors(next);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const applications = JSON.parse(
      localStorage.getItem("maapa_internship_applications") || "[]"
    );
    applications.push({
      ...formData,
      submittedAt: new Date().toISOString(),
      id: `INT-${Date.now()}`,
    });
    localStorage.setItem(
      "maapa_internship_applications",
      JSON.stringify(applications)
    );

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData(initialForm);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-xl border px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#94231E] focus:border-transparent ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <section id="internship-program" className="relative bg-gray-50 py-16 md:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#94231E]/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#94231E]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#94231E]">
            For Students
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#94231E] sm:text-4xl md:text-5xl">
            Internship Program
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Join MAAPA Foundation as an intern and gain real NGO experience while serving communities.
            Learn from mentors work on live projects and earn a certificate when you complete the program.
          </p>
        </div>

        {/* Hero images row */}
        <div className="mb-16 grid gap-4 md:grid-cols-3">
          {[
            { src: HERO_IMAGE, alt: "Students learning together" },
            { src: TEAM_IMAGE, alt: "Team collaboration at work" },
            { src: LEARN_IMAGE, alt: "Student taking notes in class" },
          ].map((item) => (
            <div
              key={item.alt}
              className="group relative h-48 overflow-hidden rounded-2xl shadow-lg md:h-56"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B1915]/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Overview + highlights */}
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={TEAM_IMAGE}
              alt="Interns working with MAAPA Foundation team"
              className="h-[320px] w-full object-cover md:h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#94231E]/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Hands on learning
              </p>
              <p className="text-xl font-bold md:text-2xl">
                Build skills that matter for society and your career
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#94231E] md:text-3xl">
              Program Overview
            </h3>
            <p className="mb-6 leading-relaxed text-gray-700">
              Our internship is designed for college and university students who want meaningful
              social work experience. You will join real food drives education support events and
              outreach programs under the guidance of experienced coordinators.
            </p>
            <ul className="space-y-3">
              {[
                "Flexible schedule suitable for students",
                "Weekly mentorship and progress reviews",
                "Certificate and experience letter on completion",
                "Opportunity to continue as a volunteer leader",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#94231E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tracks */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#94231E] md:text-3xl">
            Choose Your Track
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#94231E]/10">
                    <Icon className="h-6 w-6 text-[#94231E]" />
                  </div>
                  <h4 className="mb-2 font-bold text-[#94231E]">{track.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{track.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Structure timeline */}
        <div className="mb-16 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100 md:p-10">
          <div className="mb-10 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-[#94231E] md:text-3xl">
                Program Structure
              </h3>
              <p className="mt-2 max-w-xl text-gray-600">
                From application to certificate here is how your internship journey works with us.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#94231E]/10 px-4 py-2 text-sm font-semibold text-[#94231E]">
              <Calendar className="h-4 w-4" />
              4 to 12 week programs
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-gray-100 bg-gray-50 p-5 transition hover:border-[#94231E]/20 hover:bg-white"
              >
                <span className="text-2xl font-extrabold text-[#94231E]/30">{item.step}</span>
                <h4 className="mt-1 font-bold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: Users, label: "Mentors", value: "15+" },
            { icon: GraduationCap, label: "Interns per batch", value: "25+" },
            { icon: ClipboardList, label: "Live projects", value: "8+" },
            { icon: BookOpen, label: "Certificate", value: "100%" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-5 text-center shadow-sm"
              >
                <Icon className="mx-auto mb-2 h-7 w-7 text-[#94231E]" />
                <p className="text-2xl font-bold text-[#94231E]">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Enrollment form */}
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <h3 className="mb-4 text-2xl font-bold text-[#94231E] md:text-3xl">
                Enroll Now
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Ready to join? Complete the form and our team will contact you about the next batch.
                Make sure your phone and email are active so we can reach you quickly.
              </p>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={LEARN_IMAGE}
                  alt="Student enrolling in internship program"
                  className="h-56 w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Questions? Email us at contact@maapafoundation.org or call +91 9999781282
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-10"
            >
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Internship Application Form
              </h4>
              <p className="mb-8 text-gray-600">
                All fields marked with asterisk are required.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass("fullName")}
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass("email")}
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      className={inputClass("phone")}
                      placeholder="10 digit mobile"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      College or University *
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className={inputClass("college")}
                      placeholder="Institution name"
                    />
                    {errors.college && (
                      <p className="mt-1 text-xs text-red-500">{errors.college}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Course or Degree *
                    </label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={inputClass("course")}
                      placeholder="e.g. B.A. Social Work"
                    />
                    {errors.course && (
                      <p className="mt-1 text-xs text-red-500">{errors.course}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Year of Study *
                    </label>
                    <div className="relative">
                      <select
                        name="studyYear"
                        value={formData.studyYear}
                        onChange={handleChange}
                        className={`${inputClass("studyYear")} appearance-none bg-white pr-10`}
                      >
                        <option value="">Select year</option>
                        {studyYears.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    </div>
                    {errors.studyYear && (
                      <p className="mt-1 text-xs text-red-500">{errors.studyYear}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={inputClass("city")}
                      placeholder="Your city"
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500">{errors.city}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Internship Track *
                    </label>
                    <div className="relative">
                      <select
                        name="track"
                        value={formData.track}
                        onChange={handleChange}
                        className={`${inputClass("track")} appearance-none bg-white pr-10`}
                      >
                        <option value="">Select track</option>
                        {tracks.map((t) => (
                          <option key={t.title} value={t.title}>
                            {t.title}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    </div>
                    {errors.track && (
                      <p className="mt-1 text-xs text-red-500">{errors.track}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Preferred Duration *
                    </label>
                    <div className="relative">
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className={`${inputClass("duration")} appearance-none bg-white pr-10`}
                      >
                        <option value="">Select duration</option>
                        {durations.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    </div>
                    {errors.duration && (
                      <p className="mt-1 text-xs text-red-500">{errors.duration}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Expected Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClass("startDate")}
                  />
                  {errors.startDate && (
                    <p className="mt-1 text-xs text-red-500">{errors.startDate}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Why do you want to join MAAPA Foundation? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={5}
                    className={inputClass("motivation")}
                    placeholder="Share your interest in social work and what you hope to learn during the internship"
                  />
                  {errors.motivation && (
                    <p className="mt-1 text-xs text-red-500">{errors.motivation}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#94231E] py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#7A1D18] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Application Submitted
              </h3>
              <p className="mb-8 text-gray-600">
                Thank you for applying to the MAAPA Foundation Internship Program. Our team will
                review your application and contact you within five working days.
              </p>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="w-full rounded-xl bg-[#94231E] py-3 font-semibold text-white transition hover:bg-[#7A1D18]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
