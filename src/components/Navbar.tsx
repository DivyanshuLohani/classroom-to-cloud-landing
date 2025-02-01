"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Pricing", href: "#pricing" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsDockVisible(currentScrollY < lastScrollY || currentScrollY < 300);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center",
        isScrolled
          ? `top-6 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/5 bg-black/60 backdrop-blur-lg shadow-lg py-3 px-6 rounded-lg transition-all ${
              isDockVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`
          : true
          ? "top-0 w-full bg-black/60 backdrop-blur-lg shadow-lg py-2 px-6 fixed z-50"
          : "bg-transparent py-4 px-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 " prefetch={false}>
          <Image src={"/logo.svg"} width={80} height={100} alt="Logo" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            ClassToCloud
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#pricing"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-black/90 backdrop-blur-lg p-4 rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-4 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#pricing"
                className="mt-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-cyan-600 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
