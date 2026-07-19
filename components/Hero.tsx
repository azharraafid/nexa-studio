"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center">
        <div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 Digital Agency Modern
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Bangun Website
            <br />
            yang Membuat
            <span className="text-blue-500"> Bisnis Anda </span>
            Lebih Profesional.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Kami membantu UMKM, startup, dan perusahaan memiliki website
            modern, cepat, dan responsif untuk meningkatkan kepercayaan
            pelanggan.
          </p>

         <Stats />

          <div className="mt-14 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="text-gray-400">Client</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-400">Project</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-gray-400">Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">
           <DashboardMockup />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 text-slate-900 shadow-xl">
            <p className="text-sm text-gray-500">Project Selesai</p>
            <h3 className="text-2xl font-bold">500+</h3>
          </div>

          <div className="absolute -top-6 -right-6 rounded-2xl bg-blue-600 p-4 text-white shadow-xl">
            <p className="text-sm opacity-80">Client Puas</p>
            <h3 className="text-2xl font-bold">98%</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}