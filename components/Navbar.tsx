"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-slate-950/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Nexa Studio Logo"
            width={50}
            height={50}
            className="object-contain"
          />

          <h1 className="text-xl font-bold tracking-wide text-white">
            Nexa<span className="text-blue-500">Studio</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden gap-10 text-sm font-medium md:flex">
          <a
            href="#home"
            className="transition hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#services"
            className="transition hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="transition hover:text-blue-400"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className="transition hover:text-blue-400"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:border-blue-500 hover:text-blue-400 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          <a
            href="#home"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white transition hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#services"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white transition hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#portfolio"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white transition hover:text-blue-400"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="py-4 text-white transition hover:text-blue-400"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}