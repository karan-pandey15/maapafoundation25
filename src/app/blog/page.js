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
    { id: "cloth", name: "Cloth Donation", icon: Shirt, color: "#0891B2" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Saving Lives, One Drop at a Time: Our Blood Donation Camp Success",
      excerpt: "Last month's blood donation camp collected over 200 units of blood, potentially saving 600 lives. Read about the heroes who made this possible.",
      content: "Our latest blood donation camp was a tremendous success. We organized the event across multiple locations to maximize participation. With over 200 units of blood collected, we estimate that around 600 lives will be saved. The generosity of our donors and the dedication of our medical team made this possible. Each donation represents hope and a chance at life for someone in need.",
      category: "blood",
      image: "/image/blood.jpeg",
      author: "Dr. Priya Sharma",
      date: "Nov 10, 2024",
      readTime: "5 min read",
      featured: true,
      stats: { donations: 200, lives: 600 }
    },
    {
      id: 2,
      title: "Blood Donation Marathon: 48-Hour Impact",
      excerpt: "Breaking records with our intensive blood donation marathon that brought together the community to save lives.",
      content: "Our 48-hour blood donation marathon was a record-breaking event that brought together thousands of donors from across the region. The event featured medical awareness sessions, live demonstrations of blood collection procedures, and recognition for our most dedicated donors. We collected 350 units of blood in just 48 hours, surpassing all expectations!",
      category: "blood",
      image: "/image/blood3.jpeg",
      author: "Dr. Amit Kumar",
      date: "Oct 28, 2024",
      readTime: "7 min read",
      featured: true,
      stats: { donations: 350, hours: 48 }
    },
    {
      id: 3,
      title: "Youth Blood Donor Drive: Inspiring the Next Generation",
      excerpt: "Our youth blood donor campaign engaged hundreds of young people in life-saving donation.",
      content: "We organized special campus drives at colleges and universities to encourage young people to donate blood. Over 400 first-time donors participated in this initiative, and many signed up to become regular donors. Youth are crucial to maintaining a sustainable blood supply for our hospitals and clinics.",
      category: "blood",
      image: "/image/blood4.jpeg",
      author: "Dr. Amit Kumar",
      date: "Oct 15, 2024",
      readTime: "5 min read",
      featured: false,
      stats: { youth_donors: 400, campuses: 5 }
    },
    {
      id: 4,
      title: "Mobile Blood Donation Unit: Reaching Remote Areas",
      excerpt: "Our mobile blood donation unit brings life-saving services to areas that need it most.",
      content: "We launched a mobile blood donation unit to reach remote and rural areas with limited medical facilities. The unit is equipped with all necessary medical equipment and staffed by trained professionals. We've already reached 25 villages and collected over 500 units of blood from these underserved communities.",
      category: "blood",
      image: "/image/blood.jpeg",
      author: "Dr. Priya Sharma",
      date: "Sep 20, 2024",
      readTime: "7 min read",
      featured: false,
      stats: { villages_visited: 25, units_collected: 500 }
    },
    {
      id: 5,
      title: "Feeding Hope: How We Distributed 5000 Meals This Month",
      excerpt: "Our food distribution drive reached remote communities, providing nutritious meals to families in need during challenging times.",
      content: "This month, we successfully distributed 5000 meals to families in remote areas. Working with local volunteers and partners, we ensured that every meal was nutritious and prepared with care. Families in need received not just food, but hope and support during these challenging times.",
      category: "food",
      image: "/image/food1.jpeg",
      author: "Rahul Verma",
      date: "Nov 8, 2024",
      readTime: "4 min read",
      featured: true,
      stats: { meals: 5000, families: 1200 }
    },
    {
      id: 6,
      title: "Community Kitchen: Serving Fresh Meals Daily",
      excerpt: "Our community kitchen now operates 7 days a week, serving fresh, hot meals to daily wage workers and homeless individuals.",
      content: "We launched our community kitchen initiative to provide nutritious meals to the most vulnerable populations in our city. Operating 7 days a week, our kitchen serves approximately 300 hot meals daily. Each meal is prepared fresh with ingredients sourced locally from trusted suppliers.",
      category: "food",
      image: "/image/food2.jpeg",
      author: "Meera Patel",
      date: "Oct 25, 2024",
      readTime: "5 min read",
      featured: false,
      stats: { meals: 300, daily: "Yes" }
    },
    {
      id: 7,
      title: "School Nutrition Program: Feeding Young Minds",
      excerpt: "We launched a school nutrition program providing balanced meals to 400 school children daily.",
      content: "Children need proper nutrition to learn effectively and develop properly. Our school nutrition program provides balanced meals to 400 students across 8 schools in rural areas. We partner with nutritionists to ensure meals meet daily dietary requirements and support healthy development.",
      category: "food",
      image: "/image/food3.jpeg",
      author: "Neha Gupta",
      date: "Oct 20, 2024",
      readTime: "4 min read",
      featured: false,
      stats: { students: 400, schools: 8 }
    },
    {
      id: 8,
      title: "Food Security Initiative: Feeding 1,500 Families",
      excerpt: "Our comprehensive food security program now supports 1,500 families with monthly food packages.",
      content: "We expanded our food security initiative to support 1,500 families with monthly food packages. Each package contains essential items including grains, legumes, oil, and vegetables. Families receive support for 12 months, helping them achieve long-term food security and stability.",
      category: "food",
      image: "/image/food5.jpeg",
      author: "Meera Patel",
      date: "Oct 5, 2024",
      readTime: "7 min read",
      featured: true,
      stats: { families: 15000, months_support: 12 }
    },
    {
      id: 9,
      title: "Warmth in Winter: Clothing Drive Brings Smiles to 500 Children",
      excerpt: "Our winter clothing drive distributed warm clothes, blankets, and essential items to underprivileged children across 5 communities.",
      content: "As winter approached, we organized a comprehensive clothing drive to help underprivileged children stay warm. With contributions from generous donors, we collected and distributed 2000 items including warm clothes, blankets, and jackets to 500 children across 5 communities.",
      category: "cloth",
      image: "/image/cloth1.jpeg",
      author: "Anjali Desai",
      date: "Nov 5, 2024",
      readTime: "6 min read",
      featured: true,
      stats: { children: 500, items: 2000 }
    },
    {
      id: 10,
      title: "Winter Clothing Initiative Breaks Records",
      excerpt: "Our winter clothing drive exceeded expectations, collecting and distributing 8000 pieces of clothing.",
      content: "This year's winter clothing initiative surpassed all expectations and broke previous records. Community members, corporate partners, and volunteers contributed over 8000 pieces of clothing. We distributed items to homeless shelters, orphanages, and underprivileged communities across the region.",
      category: "cloth",
      image: "/image/cloth2.jpeg",
      author: "Karan Malhotra",
      date: "Oct 18, 2024",
      readTime: "7 min read",
      featured: true,
      stats: { pieces: 8000, communities: 12 }
    },
    {
      id: 11,
      title: "Corporate Clothing Drive: Sustainable Fashion Donation",
      excerpt: "Local businesses unite to provide 5000 pieces of clothing in our sustainable donation drive.",
      content: "We partnered with 20 local businesses to organize a sustainable clothing drive. Businesses donated surplus inventory while customers contributed gently used clothing. The result: 5000 pieces of quality clothing distributed to families in need with dignity and respect.",
      category: "cloth",
      image: "/image/cloth3.jpeg",
      author: "Anjali Desai",
      date: "Oct 10, 2024",
      readTime: "5 min read",
      featured: false,
      stats: { businesses: 20, pieces: 5000 }
    },
    {
      id: 12,
      title: "Children's Clothing Store Opens: A Gift That Keeps Giving",
      excerpt: "Our new store provides free and affordable clothing for underprivileged children.",
      content: "We opened a community clothing store dedicated to children's clothing and accessories. Donations are processed, cleaned, and made available at minimal cost. This sustainable model ensures continuous support while maintaining dignity for families who shop with us.",
      category: "cloth",
      image: "/image/cloth4.jpeg",
      author: "Karan Malhotra",
      date: "Oct 2, 2024",
      readTime: "6 min read",
      featured: false,
      stats: { store_location: 1, monthly_customers: 500 }
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
    { icon: Users, value: "50,000+", label: "Lives Impacted", color: "text-[#94231E]" },
    { icon: Droplet, value: "2,500+", label: "Blood Units Collected", color: "text-red-600" },
    { icon: UtensilsCrossed, value: "100,000+", label: "Meals Distributed", color: "text-orange-600" },
    { icon: Shirt, value: "35,000+", label: "Clothes Donated", color: "text-blue-600" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mt-8 relative bg-gradient-to-br from-[#94231E] to-[#6B1915] text-white py-16 md:py-24 overflow-hidden">
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
        <section className="py-16 bg-white" key="featured-posts">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
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
                viewport={{ once: false }}
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
              key={`${selectedCategory}-${searchQuery}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post, index) => {
                const isEvery4th = (index + 1) % 4 === 0;
                
                return (
                  <motion.article
                    key={post.id}
                    variants={scaleIn}
                    className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group ${
                      isEvery4th ? "md:col-span-2 lg:col-span-3 lg:flex gap-6" : ""
                    }`}
                  >
                    <div className={`relative overflow-hidden ${
                      isEvery4th ? "lg:w-2/5 lg:h-96" : "h-48"
                    }`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {isEvery4th && (
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-[#94231E] text-white text-sm font-bold rounded-full">
                            Highlighted
                          </span>
                        </div>
                      )}
                    </div>
                    <div className={`p-6 flex flex-col justify-center ${
                      isEvery4th ? "lg:w-3/5" : ""
                    }`}>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#94231E] transition-colors ${
                        isEvery4th ? "text-2xl md:text-3xl" : "text-xl line-clamp-2"
                      }`}>
                        {post.title}
                      </h3>
                      <p className={`text-gray-600 mb-4 ${
                        isEvery4th ? "line-clamp-4 text-base" : "line-clamp-3 text-sm"
                      }`}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">{post.author}</span>
                        </div>
                   
                      </div>
                    </div>
                  </motion.article>
                );
              })}
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