'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/footer/Footer';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const galleryImages = [
      '/image/banner1.jpeg',
      '/image/banner2.jpeg',
      '/image/banner3.jpeg',
      '/image/banner4.jpeg',
      '/image/banner6.jpeg',
      '/image/banner7.jpeg',
      '/image/banner8.jpeg',
      '/image/banner9.jpeg',
      '/image/banner10.jpeg',
      '/image/banner11.jpeg',
      '/image/banner12.jpeg',
      '/image/banner13.jpeg',
      '/image/banner14.jpeg',
      '/image/banner15.jpeg',
      '/image/banner16.jpeg',
      '/image/banner17.jpeg',
      '/image/banner18.jpeg',
      '/image/banner19.jpeg',
      '/image/blood.jpeg',
      '/image/blood3.jpeg',
      '/image/blood4.jpeg',
      '/image/cloth1.jpeg',
      '/image/cloth2.jpeg',
      '/image/cloth3.jpeg',
      '/image/cloth4.jpeg',
      '/image/cloth5.jpeg',
      '/image/cloth6.jpeg',
      '/image/firstimage.jpeg',
      '/image/food1.jpeg',
      '/image/food2.jpeg',
      '/image/food3.jpeg',
      '/image/food4.jpeg',
      '/image/food5.jpeg',
      '/image/food6.jpeg',
      '/image/food7.jpeg',
      '/image/health.jpeg',
      '/image/health1.jpeg',
      '/image/health2.jpeg',
      '/image/health3.jpeg',
      '/image/health4.jpeg',
      '/image/health5.jpeg',
      '/image/health6.jpeg',
      '/image/health7.jpeg',
      '/image/secondimage.jpeg',
      '/image/secindimag.jpeg',
      '/image/thirdimage.jpeg',
      '/image/thumbnail.jpeg',
      '/image/thumbnail2.jpeg',
      '/image/thumbnail3.jpeg',
      '/image/started.jpeg', 
     
      '/image/WhatsApp Image 2025-11-16 at 7.55.36 PM.jpeg',
      '/image/WhatsApp Image 2025-11-16 at 7.55.37 PM (2).jpeg',
      '/image/WhatsApp Image 2025-11-16 at 7.55.38 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.13 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.14 PM (1).jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.14 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.15 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.16 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.18 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.19 PM (1).jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.20 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.21 PM (1).jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.21 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.22 PM (1).jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.22 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.23 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.24 PM (1).jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.24 PM (2).jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.24 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.26 PM (1).jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.26 PM.jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.30 PM (1).jpeg',
      '/image/WhatsApp Image 2025-11-20 at 7.14.33 PM (1).jpeg',
    ];

    setImages(galleryImages);
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, images.length]);

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of moments showcasing the impact of our foundation's work and community initiatives.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 h-72"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover w-full h-full group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Loading gallery...</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors hover:bg-white/20 p-2 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Expanded gallery image"
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors hover:bg-white/20 p-2 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-4 left-4 text-white text-xs text-gray-400 hidden md:block">
            <p>← → Navigate | ESC Close</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
