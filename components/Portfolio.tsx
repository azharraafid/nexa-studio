"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
const projects = [
  {
    title: "Ciara",
    category: "Company Profile",
    description:
      "Website company profile modern untuk digital agency dengan desain premium dan animasi interaktif.",
    image: "/images/produk (1).png",
    link: "https://www.instagram.com/ciaraindonesia?igsh=cmk2bWw0bnRmdWZp",
  },
  {
    title: "Brighty",
    category: "Landing Page",
    description:
      "Landing page skincare yang fokus meningkatkan kepercayaan dan konversi penjualan.",
    image: "/images/produk (2).png",
    link: "https://www.instagram.com/brighty_id?igsh=eXo3cmVncmwxNmQ1",
  },
  {
    title: "Herbi Kids",
    category: "Business Website",
    description:
      "Website UMKM modern dengan menu digital, galeri, dan sistem kontak yang responsif.",
    image: "/images/produk (3).png",
    link: "https://www.instagram.com/herbikids?igsh=MWtrNDBzdWFsaGRndg==",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio"className="bg-slate-900 py-28 text-white"
>
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-blue-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-extrabold">
            Project Terbaru
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Beberapa contoh website yang kami bangun untuk membantu bisnis tampil lebih profesional.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
  y: -10,
  scale: 1.02,
}}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="h-[240px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

             <div className="p-8">
  <p className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
    {project.category}
  </p>

  <h3 className="mt-4 text-2xl font-bold">
    {project.title}
  </h3>

  <p className="mt-4 leading-7 text-slate-400">
    {project.description}
  </p>

  <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 flex items-center gap-2 text-blue-500 transition-all duration-300 hover:gap-4"
>
  Lihat Project
  <ArrowUpRight size={18} />
</a>
</div>
</motion.div>
          ))}
        </div>
</div>
</section>
  );
}