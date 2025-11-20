"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Droplet, 
  Shirt, 
  UtensilsCrossed, 
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Search,
  Clock,
  Users
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/footer/Footer"
// Button Component
const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-body";

  const variants = {
    primary:
      "bg-[#94231E] text-white border border-[#94231E] hover:bg-[#B5423D] focus:ring-[#94231E]",
    secondary:
      "bg-white text-[#94231E] border border-[#94231E] hover:bg-gray-50 focus:ring-[#94231E]",
  };

  const sizes = {
    small: "py-2 px-4 text-sm rounded-full min-w-[80px]",
    medium: "py-3 px-6 text-base rounded-full min-w-[120px]",
    large: "py-3 px-8 text-lg rounded-full min-w-[140px]",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabledStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Stories", icon: BookOpen, color: "#94231E" },
    { id: "blood", name: "Blood Donation", icon: Droplet, color: "#DC2626" },
    { id: "food", name: "Food Donation", icon: UtensilsCrossed, color: "#EA580C" },
    { id: "cloth", name: "Cloth Donation", icon: Shirt, color: "#0891B2" },
    { id: "education", name: "Education", icon: BookOpen, color: "#7C3AED" },
    { id: "health", name: "Healthcare", icon: Heart, color: "#DC2626" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Saving Lives, One Drop at a Time: Our Blood Donation Camp Success",
      excerpt: "Last month's blood donation camp collected over 200 units of blood, potentially saving 600 lives. Read about the heroes who made this possible.",
      category: "blood",
      image: "/image/firstimage.jpeg",
      author: "Dr. Priya Sharma",
      date: "Nov 10, 2024",
      readTime: "5 min read",
      featured: true,
      stats: { donations: 200, lives: 600 }
    },
    {
      id: 2,
      title: "Feeding Hope: How We Distributed 5000 Meals This Month",
      excerpt: "Our food distribution drive reached remote communities, providing nutritious meals to families in need during challenging times.",
      category: "food",
     image: "/image/secondimage.jpeg",
      author: "Rahul Verma",
      date: "Nov 8, 2024",
      readTime: "4 min read",
      featured: true,
      stats: { meals: 5000, families: 1200 }
    },
    {
      id: 3,
      title: "Warmth in Winter: Clothing Drive Brings Smiles to 500 Children",
      excerpt: "Our winter clothing drive distributed warm clothes, blankets, and essential items to underprivileged children across 5 communities.",
      category: "cloth",
      image: "/image/thirdimage.jpeg",
      author: "Anjali Desai",
      date: "Nov 5, 2024",
      readTime: "6 min read",
      featured: true,
      stats: { children: 500, items: 2000 }
    },
    {
      id: 4,
      title: "Empowering Through Education: Scholarship Program Launch",
      excerpt: "We're proud to announce our new scholarship program that will support 50 underprivileged students with full educational expenses.",
      category: "education",
      image: "/image/WhatsApp Image 2025-11-16 at 12.34.02 AM.jpeg",
      author: "Vikram Singh",
      date: "Nov 3, 2024",
      readTime: "7 min read",
      stats: { students: 50, scholarships: "Full" }
    },
    {
      id: 5,
      title: "Community Kitchen: Serving Fresh Meals Daily",
      excerpt: "Our community kitchen now operates 7 days a week, serving fresh, hot meals to daily wage workers and homeless individuals.",
      category: "food",
      image: "/image/WhatsApp Image 2025-11-16 at 12.35.17 AM.jpeg",
      author: "Meera Patel",
      date: "Oct 28, 2024",
      readTime: "5 min read",
      stats: { meals: 300, daily: "Yes" }
    },
    {
      id: 6,
      title: "Blood Heroes: Meet the Regular Donors Who Save Lives",
      excerpt: "We spotlight our dedicated blood donors who have been donating regularly for years, saving countless lives in the process.",
      category: "blood",
      image: "/image/WhatsApp Image 2025-11-16 at 12.34.01 AM.jpeg",
      author: "Dr. Amit Kumar",
      date: "Oct 25, 2024",
      readTime: "8 min read",
      stats: { donors: 25, donations: 150 }
    },
    {
      id: 7,
      title: "Back to School: Distribution of School Supplies to 300 Students",
      excerpt: "Starting the new academic year right with books, bags, stationery, and uniforms for children from low-income families.",
      category: "education",
      image: "/image/WhatsApp Image 2025-11-16 at 12.35.17 AM.jpeg",
      author: "Neha Gupta",
      date: "Oct 20, 2024",
      readTime: "4 min read",
      stats: { students: 300, supplies: 1500 }
    },
    {
      id: 8,
      title: "Healthcare for All: Free Medical Camp Benefits 400 Patients",
      excerpt: "Our free health checkup camp provided consultations, medicines, and diagnostic tests to underserved communities.",
      category: "health",
      image: "/image/WhatsApp Image 2025-11-16 at 12.34.02 AM.jpeg",
      author: "Dr. Sunita Rao",
      date: "Oct 18, 2024",
      readTime: "6 min read",
      stats: { patients: 400, checkups: "Free" }
    },
    {
      id: 9,
      title: "Clothing with Dignity: Corporate Partnership Drives Change",
      excerpt: "Our partnership with local businesses brought in 3000 pieces of clothing, distributed with respect and care to those in need.",
      category: "cloth",
      image: "/image/firstimage.jpeg",
      author: "Karan Malhotra",
      date: "Oct 15, 2024",
      readTime: "5 min read",
      stats: { pieces: 3000, families: 750 }
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const impactStats = [
    { icon: Users, value: "10,000+", label: "Lives Impacted", color: "text-[#94231E]" },
    { icon: Droplet, value: "500+", label: "Blood Units", color: "text-red-600" },
    { icon: UtensilsCrossed, value: "50,000+", label: "Meals Served", color: "text-orange-600" },
    { icon: Shirt, value: "5,000+", label: "Clothes Donated", color: "text-blue-600" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bS00IDB2Mmgydi0yaC0yem0wIDRoMnYtMmgtMnYyem0wIDRoMnYtMmgtMnYyem0tNCA0aDJ2LTJoLTJ2MnptOC04aDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTQgNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem00LThoMnYtMmgtMnYyem0tOCA0aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Stories of Impact
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Read about the lives we have touched and the communities we have transformed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.color} mx-auto mb-2`} />
                  <p className="text-2xl md:text-3xl font-bold text-[#94231E] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#94231E] focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? "bg-[#94231E] text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && !searchQuery && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#94231E] mb-2">
                Featured Stories
              </h2>
              <p className="text-gray-600">Our most impactful campaigns and initiatives</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Large Featured Post */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="lg:row-span-2 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <img
                    src={featuredPosts[0].image}
                    alt={featuredPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-[#94231E] text-white text-sm font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPosts[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#94231E] transition-colors">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">
                        {featuredPosts[0].author}
                      </span>
                    </div>
                    <Button variant="primary" size="small">
                      Read More
                      <ArrowRight className="inline-block ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.article>

              {/* Two Smaller Featured Posts */}
              <div className="space-y-8">
                {featuredPosts.slice(1, 3).map((post) => (
                  <motion.article
                    key={post.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={scaleIn}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#94231E] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-700">
                          By {post.author}
                        </span>
                        <Button variant="secondary" size="small">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={scaleIn}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all mb-6"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <Button variant="secondary" size="small" className="text-sm">
                        Read More
                        <ArrowRight className="inline-block ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Stories Found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-white" fill="currentColor" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Be Part of Our Next Story
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Every donation, every volunteer hour, every share creates a new chapter of hope and transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="large" 
                className="bg-white text-[#94231E] hover:bg-gray-100 text-lg"
              >
                <Heart className="inline-block mr-2 w-5 h-5" />
                <Link href="/donate">
                  Donate Now
                </Link>
              </Button>
              <Button 
                variant="primary" 
                size="large" 
                className="bg-white/20 border-white text-white hover:bg-white/30 text-lg"
              >
                <Link href="/contactus">
                  Become a Volunteer
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}