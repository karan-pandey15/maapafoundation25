"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button/Button";

interface SubItem {
  href: string;
  label: string;
}

interface MenuItem {
  href?: string;
  label: string;
  subItems?: SubItem[];
}

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
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileSubmenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  const isItemActive = (item: MenuItem) => {
    if (item.href) {
      return pathname === item.href;
    }
    if (item.subItems) {
      return item.subItems.some((sub) => pathname === sub.href);
    }
    return false;
  };

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
  const menuItems: MenuItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      label: "What We Do",
      subItems: [
        { href: "/about/initiatives/hunger-relief", label: "Hunger Relief" },
        { href: "/about/initiatives/education", label: "Education for Underprivileged Children" },
        { href: "/about/initiatives/environment", label: "Environment" },
        { href: "/about/initiatives/youth-skills", label: "Youth Skill Development" },
        { href: "/about/initiatives/senior-support", label: "Senior Citizen Support" },
        { href: "/about/initiatives/divyang-support", label: "Inclusive Education & Divyang Support" },
        { href: "/about/initiatives/disaster-relief", label: "Disaster Relief & Emergency Response" },
        { href: "/about/initiatives/blood-medical", label: "Blood Donation & Medical Camps" },
      ],
    },
    { href: "/blog", label: "Blog" },
    { href: "/donate", label: "Donate" },
    { href: "/gallery", label: "Events" }, 
    { href: "/ourgallery", label: "Gallery" }, 
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
          {menuItems.map((item, index) => {
            const isActive = isItemActive(item);

            if (item.subItems) {
              return (
                <div key={index} className="relative group py-2">
                  <Link
                    href="/about#what-we-do"
                    className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 ${
                      isActive ? "text-[#94231E]" : "text-black hover:text-[#94231E]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-80 rounded-xl bg-white shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 border border-gray-100 py-3 px-2">
                    <div className="grid gap-1">
                      {item.subItems.map((sub, sIndex) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sIndex}
                            href={sub.href}
                            className={`block rounded-lg px-4 py-2.5 text-sm transition duration-200 ${
                              isSubActive
                                ? "bg-[#94231E]/10 text-[#94231E] font-semibold"
                                : "text-gray-700 hover:bg-[#94231E]/5 hover:text-[#94231E]"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={item.href || "#"}
                className={`relative group text-sm font-medium transition-all duration-200 py-2 ${
                  isActive ? "text-[#94231E]" : "text-black hover:text-[#94231E]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#94231E] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
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
          className="lg:hidden bg-white transition-all duration-300"
        >
          <div className="py-3 px-4 space-y-1">
            {menuItems.map((item, index) => {
              const isActive = isItemActive(item);

              if (item.subItems) {
                return (
                  <div key={index} className="space-y-1">
                    <button
                      onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                      className={`w-full flex items-center justify-between rounded-lg py-3 px-4 text-sm font-medium transition duration-200 ${
                        isActive
                          ? "bg-[#94231E]/10 text-[#94231E]"
                          : "text-black hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isMobileSubmenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isMobileSubmenuOpen && (
                      <div className="pl-4 space-y-1 border-l border-gray-100 ml-4 py-1">
                        {item.subItems.map((sub, sIndex) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sIndex}
                              href={sub.href}
                              className={`block rounded-lg py-2.5 px-4 text-sm transition duration-200 ${
                                isSubActive
                                  ? "text-[#94231E] font-semibold bg-[#94231E]/5"
                                  : "text-gray-600 hover:text-black hover:bg-gray-50"
                              }`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileSubmenuOpen(false);
                              }}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.href || "#"}
                  className={`block rounded-lg py-3 px-4 text-sm font-medium transition duration-200 ${
                    isActive
                      ? "bg-[#94231E]/10 text-[#94231E]"
                      : "text-black hover:text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
