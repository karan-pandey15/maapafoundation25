"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button/Button";

/* ------------------------------------------------------------------
   LOGO COMPONENT (Maapa Foundation — Circular Logo)
-------------------------------------------------------------------*/
interface LogoProps {
  size?: "default" | "mobile";
}

const Logo: React.FC<LogoProps> = ({ size = "default" }) => {
  const sizes = {
    default: "w-[70px] h-[70px]",
    mobile: "w-[70px] h-[70px]",
  };

  return (
    <div className="flex items-center justify-center">
      <Image
        src="/image/maapalogo.jpeg"
        alt="Maapa Foundation Logo"
        width={70}
        height={70}
        className={`${sizes[size]} object-cover rounded-full`}
        priority
      />
    </div>
  );
};

/* ------------------------------------------------------------------
   NAVBAR COMPONENT
-------------------------------------------------------------------*/

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // UPDATED MENU ITEMS
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/donate", label: "Donate" },
    { href: "/gallery", label: "Events" }, 
    { href: "/contactus", label: "Contact Us" },
  ];

  return (
    <div className="relative">
      <nav className="py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-between shadow-sm    bg-white z-50">
        
        {/* LEFT SIDE (LOGO + DONATE BUTTON ON MOBILE) */}
        <div className="flex items-center gap-3 lg:gap-0">
          {/* LOGO */}
          <Link href="/" aria-label="Maapa Foundation Home">
            <div className="hidden lg:block">
              <Logo size="default" />
            </div>
            <div className="lg:hidden">
              <Logo size="mobile" />
            </div>
          </Link>

          {/* DONATE BUTTON (MOBILE ONLY) */}
         
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-black font-medium text-sm transition-all duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE (DONATE BUTTON - DESKTOP ONLY + HAMBURGER MOBILE) */}
        <div className="flex items-center gap-3">
          
          {/* DONATE BUTTON DESKTOP */}
          <div className="hidden lg:block">
            <Button variant="primary" size="medium" className="ml-4">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

  <div className="lg:hidden">
            <Button variant="primary" size="small">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white    transition-all duration-300"
        >
          <div className="py-3 px-4 space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-black hover:text-gray-600 hover:bg-gray-50 duration-200 py-3 px-4 rounded-lg font-medium text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
