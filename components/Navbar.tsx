"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
: "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div className="flex items-center gap-3">
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
</div>
      <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
  {[
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
  ].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      className="relative transition hover:text-blue-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      {item}
    </a>
  ))}

  <a
    href="#contact"
    className="rounded-xl bg-blue-600 px-5 py-2 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
  >
    Konsultasi Gratis
  </a>
</nav>
<button
  onClick={() => setOpen(!open)}
  className="text-white md:hidden"
>
  {open ? <X size={28} /> : <Menu size={28} />}
</button>

      </div>
      {open && (
  <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
    <nav className="flex flex-col p-6">

      <a
        href="#home"
        onClick={() => setOpen(false)}
        className="py-3"
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setOpen(false)}
        className="py-3"
      >
        About
      </a>

      <a
        href="#services"
        onClick={() => setOpen(false)}
        className="py-3"
      >
        Services
      </a>

      <a
        href="#portfolio"
        onClick={() => setOpen(false)}
        className="py-3"
      >
        Portfolio
      </a>

      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="mt-4 rounded-xl bg-blue-600 py-3 text-center font-semibold"
      >
        Konsultasi Gratis
      </a>

    </nav>
  </div>
)}
    </header>
  );
}
