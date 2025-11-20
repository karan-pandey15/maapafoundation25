"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Play } from "lucide-react";
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
    description: "Our blood donation campaigns have saved countless lives by connecting generous donors with those in critical need. Through organized camps and awareness drives, we've collected thousands of blood units that have been distributed to hospitals and emergency centers across the region.",
    shortDesc: "Saving lives, one drop at a time",
    color: "#DC2626",
    stats: [
      { label: "Blood Units Collected", value: "100+" },
      { label: "Lives Impacted", value: "500+" },
      { label: "Camps Organized", value: "20+" }
    ],
    images: [
      { id: 1, src: "/image/firstimage.jpeg", alt: "Blood Camp 1", event: "blood" },
      { id: 2, src: "/image/blood.jpeg", alt: "Blood Camp 2", event: "blood" },
      { id: 3, src: "/image/blood3.jpeg", alt: "Blood Camp 3", event: "blood" },
      { id: 4, src: "/image/blood4.jpeg", alt: "Blood Camp 4", event: "blood" },
      { id: 5, src: "/image/secondimage.jpeg", alt: "Blood Camp 5", event: "blood" },
      { id: 6, src: "/image/thirdimage.jpeg", alt: "Blood Camp 6", event: "blood" },
      { id: 7, src: "/image/blood.jpeg", alt: "Blood Camp 7", event: "blood" },
    ]
  },
  {
    id: "food",
    title: "Food Distribution Drive",
    description: "Fighting hunger and malnutrition, our food distribution drives reach underserved communities with nutritious meals and essentials. We work with local partners to ensure every meal reaches those who need it most, bringing hope and sustenance to families across the region.",
    shortDesc: "Nourishing communities with compassion",
    color: "#EA580C",
    stats: [
      { label: "Meals Distributed", value: "1000+" },
      { label: "Families Served", value: "2,000+" },
      { label: "Community Centers", value: "10+" }
    ],
    images: [
      { id: 15, src: "/image/food1.jpeg", alt: "Food Drive 2", event: "food" },
      { id: 15, src: "/image/food2.jpeg", alt: "Food Drive 2", event: "food" },
      { id: 15, src: "/image/food3.jpeg", alt: "Food Drive 2", event: "food" },
      { id: 15, src: "/image/food4.jpeg", alt: "Food Drive 2", event: "food" },
      { id: 15, src: "/image/food5.jpeg", alt: "Food Drive 2", event: "food" },
      { id: 15, src: "/image/food6.jpeg", alt: "Food Drive 2", event: "food" },
      { id: 15, src: "/image/food7.jpeg", alt: "Food Drive 2", event: "food" },
      { id: 15, src: "/image/food2.jpeg", alt: "Food Drive 2", event: "food" },
      { id: 15, src: "/image/food1.jpeg", alt: "Food Drive 2", event: "food" },


    ]
  },
  {
    id: "cloth",
    title: "Cloth Donation Campaign",
    description: "Bringing warmth and dignity through our cloth donation initiatives. We collect quality clothing and distribute them to those facing harsh weather conditions and economic hardship, ensuring every individual has access to basic necessities with respect and care.",
    shortDesc: "Clothing with dignity and compassion",
    color: "#0891B2",
    stats: [
      { label: "Clothes Distributed", value: "5,000+" },
      { label: "People Helped", value: "5,000+" },
      { label: "Drives Conducted", value: "10+" }
    ],
    images: [

      { id: 26, src: "/image/cloth1.jpeg", alt: "Cloth Drive 1", event: "cloth" },
      { id: 26, src: "/image/cloth2.jpeg", alt: "Cloth Drive 1", event: "cloth" },
      { id: 26, src: "/image/cloth3.jpeg", alt: "Cloth Drive 1", event: "cloth" },
      { id: 26, src: "/image/cloth4.jpeg", alt: "Cloth Drive 1", event: "cloth" },
      { id: 26, src: "/image/cloth5.jpeg", alt: "Cloth Drive 1", event: "cloth" },
      { id: 26, src: "/image/cloth6.jpeg", alt: "Cloth Drive 1", event: "cloth" },
      { id: 26, src: "/image/cloth1.jpeg", alt: "Cloth Drive 1", event: "cloth" },
      { id: 26, src: "/image/cloth3.jpeg", alt: "Cloth Drive 1", event: "cloth" },


    ]
  },
  {
    id: "health",
    title: "Healthcare & Wellness",
    description: "Ensuring access to quality healthcare for all through free medical camps and wellness programs. Our dedicated healthcare initiatives provide checkups, medications, and health education to underserved communities, prioritizing preventive care and health awareness.",
    shortDesc: "Healthcare as a fundamental right",
    color: "#7C3AED",
    stats: [
      { label: "Patients Served", value: "1,000+" },
      { label: "Medical Camps", value: "5+" },
      { label: "Free Consultations", value: "1000+" }
    ],
    images: [
      { id: 38, src: "/image/health.jpeg", alt: "Healthcare 1", event: "health" },
      { id: 38, src: "/image/health1.jpeg", alt: "Healthcare 1", event: "health" },

      { id: 38, src: "/image/health2.jpeg", alt: "Healthcare 1", event: "health" },

      { id: 38, src: "/image/health3.jpeg", alt: "Healthcare 1", event: "health" },

      { id: 38, src: "/image/health4.jpeg", alt: "Healthcare 1", event: "health" },

      { id: 38, src: "/image/health5.jpeg", alt: "Healthcare 1", event: "health" },

      { id: 38, src: "/image/health6.jpeg", alt: "Healthcare 1", event: "health" },
  { id: 38, src: "/image/health7.jpeg", alt: "Healthcare 1", event: "health" },

    ]
  }
];

const videos = [
  {
    id: 1,
    title: "Blood Donation Camp",
    thumbnail: "/image/WhatsApp Image 2025-11-16 at 7.52.22 PM.jpeg",
    video: "/image/WhatsApp Video 2025-11-16 at 7.52.10 PM.mp4"
  },
  {
    id: 2,
    title: "Food Distribution",
    thumbnail: "/image/WhatsApp Image 2025-11-16 at 7.53.51 PM (1).jpeg",
    video: "/image/WhatsApp Video 2025-11-16 at 7.52.10 PM.mp4"
  },
  {
    id: 3,
    title: "Community Service",
    thumbnail: "/image/WhatsApp Image 2025-11-16 at 7.55.35 PM.jpeg",
    video: "/image/WhatsApp Video 2025-11-16 at 7.55.43 PM.mp4"
  },
  {
    id: 4,
    title: "Healthcare Camp",
    thumbnail: "/image/WhatsApp Image 2025-11-16 at 7.55.44 PM.jpeg",
    video: "/image/WhatsApp Video 2025-11-16 at 7.55.43 PM.mp4"
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string>("blood");
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);

  const currentEvent = events.find(e => e.id === selectedEvent);
  const currentImages = currentEvent?.images || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bS00IDB2Mmgydi0yaC0yem0wIDRoMnYtMmgtMnYyem0wIDRoMnYtMmgtMnYyem0tNCA0aDJ2LTJoLTJ2MnptOC04aDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTQgNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem00LThoMnYtMmgtMnYyem0tOCA0aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Our Impact Stories
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90">
              Witness the transformative moments that define our mission. From saving lives to nourishing communities.
            </p>
          </motion.div>
        </div>
      </section>

      {events.map((event) => (
        <section key={event.id} className={`py-16 md:py-24 ${event.id === selectedEvent ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-1 h-12 rounded-full"
                  style={{ backgroundColor: event.color }}
                ></div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-lg mt-1">{event.shortDesc}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-8">
                {event.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {event.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <p className="text-3xl font-bold text-[#94231E] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {event.images.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  onClick={() => setSelectedImage(image)}
                  className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div
                      className="text-white px-4 py-2 rounded-full font-semibold text-sm"
                      style={{ backgroundColor: event.color }}
                    >
                      View
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Experience Our Work
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Instagram Reels Highlights - Watch our impact in action
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="relative h-96 overflow-hidden bg-gray-800">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => setSelectedVideoId(video.id)}
                      className="bg-[#94231E] hover:bg-[#B5423D] text-white p-4 rounded-full shadow-lg transition-all"
                    >
                      <Play className="w-8 h-8 fill-current" />
                    </button>
                  </motion.div>
                  <p className="text-white font-semibold mt-4 text-lg">Play Video</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{video.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">Swipe to explore more</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#94231E] to-[#B5423D] hover:shadow-lg text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                Follow Us on Instagram
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-2xl shadow-2xl max-h-[90vh] object-contain"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-6 text-center text-white">
                <p className="text-lg font-semibold">{selectedImage.alt}</p>
                <p className="text-sm text-gray-300 mt-2">Category: {selectedImage.event}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videos.find(v => v.id === selectedVideoId)?.video}
                controls
                autoPlay
                className="w-full h-auto rounded-2xl shadow-2xl max-h-[90vh] object-contain bg-black"
              />

              <button
                onClick={() => setSelectedVideoId(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
