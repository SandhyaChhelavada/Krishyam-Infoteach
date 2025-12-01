import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // lock body scroll when mobile menu open
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-4" : "bg-transparent py-6"
      }`}
      aria-label="Primary"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">
                KRIDHYAN INFOTECH
              </h1>
              <p className="text-xs text-gray-600">We Build Digital Experiences</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#ff002b] transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hello%20KridHyan%20Infotech%2C%20I%20need%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] text-white rounded-full font-medium hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
            </a>
          </div>

          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden text-gray-700 hover:text-[#ff002b] transition-colors"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden mt-4 pb-6 space-y-4 transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
          role="menu"
          aria-hidden={!isMobileMenuOpen}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-[#ff002b] transition-colors duration-300 font-medium py-2"
              role="menuitem"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hello%20KridHyan%20Infotech%2C%20I%20need%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] text-white rounded-full font-medium hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
