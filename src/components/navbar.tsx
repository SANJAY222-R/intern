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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[#0A0A0A] border-neutral-800 py-4"
          : "bg-[#0A0A0A] border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded overflow-hidden bg-neutral-900 border border-neutral-800">
            <Image src="/NF.png" alt="Nexus Logo" fill sizes="32px" className="object-cover grayscale group-hover:grayscale-0 transition-all" />
          </div>
          <span className="text-lg font-mono font-bold tracking-tight text-white ml-2">
            Nexus_
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/contact"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition-colors"
          >
            Deploy AI
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
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
          className="md:hidden bg-[#0A0A0A] border-b border-neutral-800 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-4 py-3 text-center bg-white text-black font-semibold rounded hover:bg-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Deploy AI
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
