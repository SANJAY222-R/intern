"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm">
            <Image src="/NF.png" alt="Nexus Logo" fill sizes="32px" className="object-cover transition-transform group-hover:scale-105" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 ml-2">
            Nexus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-gray-600 hover:text-black transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-[15px] font-medium text-gray-600 hover:text-black transition-colors px-3 py-2"
          >
            Sign In
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-transparent border border-blue-600 text-blue-600 text-[15px] font-semibold rounded-full hover:bg-blue-50 transition-colors"
          >
            Schedule Demo
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-blue-600 text-white text-[15px] font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-lg absolute w-full top-full"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-600 hover:text-black py-2 border-b border-gray-50 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/contact"
              className="w-full px-4 py-3 text-center bg-blue-50 text-blue-600 font-semibold rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule Demo
            </Link>
            <Link
              href="/contact"
              className="w-full px-4 py-3 text-center bg-blue-600 text-white font-semibold rounded-xl shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
