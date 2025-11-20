"use client";
import React, { useState } from "react";
import { X, Play } from "lucide-react";
import Link from "next/link";
import Footer from "../components/footer/Footer";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  event: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  color: string;
  images: GalleryImage[];
  stats: {
    label: string;
    value: string;
  }[];
}

const events: Event[] = [
  {
    id: "blood",
    title: "Blood Donation Camps",
    description:
      "Our blood donation campaigns have saved countless lives by connecting generous donors with those in critical need. Through organized camps and awareness drives, we've collected thousands of blood units.",
    shortDesc: "Saving lives, one drop at a time",
    color: "#DC2626",
    stats: [
      { label: "Blood Units Collected", value: "100+" },
      { label: "Lives Impacted", value: "500+" },
      { label: "Camps Organized", value: "20+" },
    ],
    images: [
      { id: 1, src: "/image/firstimage.jpeg", alt: "Blood Camp 1", event: "blood" },
      { id: 2, src: "/image/blood.jpeg", alt: "Blood Camp 2", event: "blood" },
      { id: 3, src: "/image/blood3.jpeg", alt: "Blood Camp 3", event: "blood" },
      { id: 4, src: "/image/blood4.jpeg", alt: "Blood Camp 4", event: "blood" },
      { id: 5, src: "/image/secondimage.jpeg", alt: "Blood Camp 5", event: "blood" },
      { id: 6, src: "/image/thirdimage.jpeg", alt: "Blood Camp 6", event: "blood" },
      { id: 7, src: "/image/blood.jpeg", alt: "Blood Camp 7", event: "blood" },
    ],
  },

  {
    id: "food",
    title: "Food Distribution Drive",
    description:
      "Fighting hunger and malnutrition, our food distribution drives reach underserved communities with nutritious meals and essentials.",
    shortDesc: "Nourishing communities with compassion",
    color: "#EA580C",
    stats: [
      { label: "Meals Distributed", value: "1000+" },
      { label: "Families Served", value: "2,000+" },
      { label: "Community Centers", value: "10+" },
    ],
    images: [
      { id: 15, src: "/image/food1.jpeg", alt: "Food Drive", event: "food" },
      { id: 16, src: "/image/food2.jpeg", alt: "Food Drive", event: "food" },
      { id: 17, src: "/image/food3.jpeg", alt: "Food Drive", event: "food" },
      { id: 18, src: "/image/food4.jpeg", alt: "Food Drive", event: "food" },
      { id: 19, src: "/image/food5.jpeg", alt: "Food Drive", event: "food" },
      { id: 20, src: "/image/food6.jpeg", alt: "Food Drive", event: "food" },
      { id: 21, src: "/image/food7.jpeg", alt: "Food Drive", event: "food" },
    ],
  },

  {
    id: "cloth",
    title: "Cloth Donation Campaign",
    description:
      "Bringing warmth and dignity through our cloth donation initiatives. We collect quality clothing and distribute them to those facing harsh conditions.",
    shortDesc: "Clothing with dignity and compassion",
    color: "#0891B2",
    stats: [
      { label: "Clothes Distributed", value: "5,000+" },
      { label: "People Helped", value: "5,000+" },
      { label: "Drives Conducted", value: "10+" },
    ],
    images: [
      { id: 26, src: "/image/cloth1.jpeg", alt: "Cloth Drive 1", event: "cloth" },
      { id: 27, src: "/image/cloth2.jpeg", alt: "Cloth Drive 2", event: "cloth" },
      { id: 28, src: "/image/cloth3.jpeg", alt: "Cloth Drive 3", event: "cloth" },
      { id: 29, src: "/image/cloth4.jpeg", alt: "Cloth Drive 4", event: "cloth" },
      { id: 30, src: "/image/cloth5.jpeg", alt: "Cloth Drive 5", event: "cloth" },
      { id: 31, src: "/image/cloth6.jpeg", alt: "Cloth Drive 6", event: "cloth" },
    ],
  },

  {
    id: "health",
    title: "Healthcare & Wellness",
    description:
      "Ensuring access to quality healthcare through free medical camps and wellness programs for underserved communities.",
    shortDesc: "Healthcare as a fundamental right",
    color: "#7C3AED",
    stats: [
      { label: "Patients Served", value: "1,000+" },
      { label: "Medical Camps", value: "5+" },
      { label: "Free Consultations", value: "1000+" },
    ],
    images: [
      { id: 38, src: "/image/health.jpeg", alt: "Healthcare 1", event: "health" },
      { id: 39, src: "/image/health1.jpeg", alt: "Healthcare 2", event: "health" },
      { id: 40, src: "/image/health2.jpeg", alt: "Healthcare 3", event: "health" },
      { id: 41, src: "/image/health3.jpeg", alt: "Healthcare 4", event: "health" },
      { id: 42, src: "/image/health4.jpeg", alt: "Healthcare 5", event: "health" },
      { id: 43, src: "/image/health5.jpeg", alt: "Healthcare 6", event: "health" },
      { id: 44, src: "/image/health6.jpeg", alt: "Healthcare 7", event: "health" },
    ],
  },
];

const videos = [
  {
    id: 1,
    title: "Blood Donation Camp",
    thumbnail: "/image/thumbnail1.jpeg",
    video: "/image/video1.mp4",
  },
  {
    id: 2,
    title: "Food Distribution",
    thumbnail: "/image/thumbnail2.jpeg",
    video: "/image/video2.mp4",
  },
  {
    id: 3,
    title: "Community Service",
    thumbnail: "/image/thumbnail3.jpeg",
    video: "/image/video3.mp4",
  },
  {
    id: 4,
    title: "Healthcare Camp",
    thumbnail: "/image/thumbnail4.jpeg",
    video: "/image/video4.mp4",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold">Our Impact Stories</h1>
        <p className="text-xl mt-4 opacity-90">
          Witness the transformative moments that define our mission.
        </p>
      </section>

      {/* EVENTS LOOP */}
      {events.map((event) => (
        <section key={event.id} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* EVENT TITLE */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-1 h-12 rounded-full"
                style={{ backgroundColor: event.color }}
              ></div>
              <div>
                <h2 className="text-4xl font-bold">{event.title}</h2>
                <p className="text-gray-600">{event.shortDesc}</p>
              </div>
            </div>

            <p className="text-gray-700 max-w-3xl mb-8">{event.description}</p>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {event.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-gray-200 shadow-md rounded-xl"
                >
                  <p className="text-3xl font-bold text-[#94231E]">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* IMAGES GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.images.map((img) => (
                <div
                  key={img.id}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 object-cover hover:scale-110 duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* VIDEO SECTION */}
      <section className="py-20 bg-black text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Experience Our Work</h2>
          <p className="text-xl text-gray-300">
            Instagram Reels Highlights - Watch our impact
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {videos.map((v) => (
            <div
              key={v.id}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={v.thumbnail}
                className="w-full h-80 object-cover"
                onClick={() => setSelectedVideoId(v.id)}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 duration-300">
                <button
                  className="bg-[#94231E] p-4 rounded-full"
                  onClick={() => setSelectedVideoId(v.id)}
                >
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://instagram.com" target="_blank">
            <button className="bg-[#94231E] px-8 py-4 rounded-full text-lg">
              Follow Us on Instagram
            </button>
          </a>
        </div>
      </section>

      {/* IMAGE POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              className="w-full rounded-xl max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full"
            >
              <X className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* VIDEO POPUP */}
      {selectedVideoId && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedVideoId(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={videos.find((v) => v.id === selectedVideoId)?.video}
              controls
              autoPlay
              className="w-full rounded-xl max-h-[90vh]"
            ></video>

            <button
              onClick={() => setSelectedVideoId(null)}
              className="absolute top-4 right-4 bg-white/20 p-3 rounded-full"
            >
              <X className="text-white" />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
