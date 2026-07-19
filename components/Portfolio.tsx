"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "nanon 1",
    category: "Next.js • Tailwind CSS",
    image: "/images/nanon (1).jpeg",
  },
  {
    title: "nanon 2",
    category: "React • Landing Page",
    image: "/images/nanon (2).jpeg",
  },
  {
    title: "nanon 3",
    category: "Modern Website",
    image: "/images/nanon (3).jpeg",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-slate-900 py-28 text-white">
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
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <p className="text-blue-500">
                  {project.category}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <ArrowUpRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}