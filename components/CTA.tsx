"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-slate-900 py-28 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-16 text-center shadow-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Siap Membawa Bisnismu ke Level Berikutnya?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Bangun website profesional yang cepat, modern, dan siap menarik lebih banyak pelanggan.
        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:scale-105">
          Konsultasi Gratis
        </button>
      </motion.div>
    </section>
  );
}