"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Monitor size={42} />,
    title: "Website Development",
    desc: "Website modern, cepat, SEO Friendly dan responsive untuk bisnis Anda.",
  },
  {
    icon: <Smartphone size={42} />,
    title: "Landing Page",
    desc: "Landing page yang menarik untuk meningkatkan penjualan produk Anda.",
  },
  {
    icon: <Globe size={42} />,
    title: "Company Profile",
    desc: "Bangun citra bisnis profesional melalui website company profile.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-5xl font-extrabold">
            Apa yang Bisa Kami Bantu?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Kami membantu bisnis memiliki website profesional
            dengan desain modern, performa tinggi,
            dan pengalaman pengguna terbaik.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group rounded-3xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            >

              <div className="inline-flex rounded-2xl bg-blue-600/10 p-4 text-blue-500">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {service.desc}
              </p>

              <button className="mt-8 flex items-center gap-2 text-blue-500 group-hover:gap-4 transition-all">
                Learn More
                <ArrowRight size={18} />
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}