"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    job: "Owner Coffee Shop",
    review:
      "Pelayanannya luar biasa. Website bisnis kami jadi jauh lebih profesional dan pelanggan makin percaya.",
  },
  {
    name: "Rizky Saputra",
    job: "Barbershop Owner",
    review:
      "Desainnya modern, loading cepat, dan hasilnya melebihi ekspektasi. Sangat direkomendasikan.",
  },
  {
    name: "Siti Rahma",
    job: "Fashion Store",
    review:
      "Tim sangat komunikatif dan hasil websitenya keren. Penjualan online kami juga meningkat.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-blue-500">
            TESTIMONIAL
          </p>

          <h2 className="mt-4 text-5xl font-extrabold">
            Apa Kata Klien Kami?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Kepuasan klien adalah prioritas utama kami.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-slate-900 p-8"
            >

              <div className="mb-6 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-8 text-gray-400">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.job}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}