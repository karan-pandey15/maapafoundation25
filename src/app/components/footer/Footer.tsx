"use client";

import Image from "next/image";
import { 
  Youtube,
  Instagram,
  Linkedin,
  Facebook,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

interface LogoProps {
  size?: "default" | "footer";
}

const Logo: React.FC<LogoProps> = ({ size = "default" }) => {
  const sizes = {
    default: "w-[80px] h-[80px]",
    footer: "w-[80px] h-[80px]",
  };

  return (
    <div className="flex items-center justify-center">
      <Image
        src="/image/maapalogo.jpeg"
        alt="Maapa Foundation Logo"
        width={80}
        height={80}
        className={`${sizes[size]} object-cover rounded-full`}
        priority
      />
    </div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: "#94231E" }}>
      <div className="px-6 pt-[40px] pb-[10px] lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-12">

            {/* Left Column */}
            <div className="flex-shrink-0 lg:w-[30%]">

              {/* Logo */}
              <div className="mb-6">
                <Logo size="footer" />
              </div>

              {/* Contact */}
              <div className="space-y-4">

                {/* Phone */}
                <div className="flex items-center space-x-3 text-white">
                  <Phone className="h-4 w-4" />
                  <a
                    href="tel:+919999781282"
                    className="text-sm hover:text-gray-200 transition"
                  >
                    +91 9999781282
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 text-white">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:support@maapafoundation.org"
                    className="text-sm hover:text-gray-200 transition"
                  >
                    support@maapafoundation.org
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 text-white">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <p className="text-sm">
                    Maapa Foundation, Sector-2 B-25, Noida, Uttar Pradesh 201301
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-[70%]">
              <div className="text-xs font-semibold tracking-wider text-gray-200 mb-4">
                CONNECT WITH US
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6">
                Join our mission to empower communities
              </h2>

              {/* Social Icons */}
              <div className="flex items-center justify-start gap-4 sm:gap-6 overflow-x-auto pb-2">

               

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@maapafoundation"
                  target="_blank"
                  className="group p-3 rounded-lg hover:bg-[#7A1B17] flex flex-col items-center"
                >
                  <Youtube className="h-7 w-7 mb-2" style={{ color: "#FF0000" }} />
                  <span className="text-xs text-gray-200 uppercase tracking-wider">
                    YouTube
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/maapafoundation"
                  target="_blank"
                  className="group p-3 rounded-lg hover:bg-[#7A1B17] flex flex-col items-center"
                >
                  <Instagram className="h-7 w-7 mb-2" style={{ color: "#E4405F" }} />
                  <span className="text-xs text-gray-200 uppercase tracking-wider">
                    Instagram
                  </span>
                </a>

                {/* Facebook (replaces Twitter) */}
                <a
                  href="https://www.facebook.com/maapafoundation"
                  target="_blank"
                  className="group p-3 rounded-lg hover:bg-[#7A1B17] flex flex-col items-center"
                >
                  <Facebook className="h-7 w-7 mb-2" style={{ color: "#1877F2" }} />
                  <span className="text-xs text-gray-200 uppercase tracking-wider">
                    Facebook
                  </span>
                </a>

              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-red-200 pt-[10px]">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
              <p className="text-center text-gray-100 text-sm">
                © {currentYear} Maapa Foundation — Empowering Lives, Inspiring Hope
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
