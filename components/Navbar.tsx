"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: .6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className={`mx-auto mt-5 max-w-7xl rounded-2xl px-6 py-4 transition-all duration-300
        ${
          scroll
            ? "bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-extrabold"
          >
            Nexa<span className="text-blue-500">Studio</span>
          </Link>

          <div className="hidden gap-8 md:flex">
            <Link href="#">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700 transition">
            Konsultasi
          </button>

        </div>
      </div>
    </motion.nav>
  );
}