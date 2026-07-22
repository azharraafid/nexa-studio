"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    price: "Mulai Rp750K",
    description:
      "Cocok untuk promosi produk, jasa, personal branding, atau campaign bisnis.",
    features: [
      "Desain modern & profesional",
      "Responsive di HP & Desktop",
      "Optimasi performa",
      "Integrasi WhatsApp",
      "Form kontak",
    ],
    popular: false,
  },
  {
    name: "Company Profile",
    price: "Mulai Rp1,5JT",
    description:
      "Website profesional untuk meningkatkan kredibilitas dan kepercayaan bisnis.",
    features: [
      "Semua fitur Landing Page",
      "Halaman About & Services",
      "Portfolio / Galeri",
      "Testimonials",
      "SEO dasar",
      "Integrasi Google Maps",
    ],
    popular: true,
  },
  {
    name: "Custom Website",
    price: "Diskusi",
    description:
      "Solusi website custom yang disesuaikan dengan kebutuhan dan sistem bisnis Anda.",
    features: [
      "Fitur sesuai kebutuhan",
      "Desain custom",
      "Dashboard / Admin Panel",
      "Database",
      "Integrasi API",
      "Support & Maintenance",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-blue-500">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Pilih Paket Website Anda
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Pilih solusi website yang sesuai dengan kebutuhan bisnis Anda.
            Jika membutuhkan fitur khusus, kami siap membantu membuat
            website sesuai kebutuhan.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-500 bg-blue-500/10 shadow-2xl shadow-blue-500/10"
                  : "border-white/10 bg-slate-900"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-5 py-2 text-sm font-bold">
                  Paling Populer
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-4 min-h-[80px] leading-7 text-slate-400">
                {plan.description}
              </p>

              <div className="mt-8">
                <p className="text-3xl font-extrabold text-white">
                  {plan.price}
                </p>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20">
                      <Check
                        size={14}
                        className="text-blue-400"
                      />
                    </div>

                    <span className="text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-10 flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                    : "border border-white/10 bg-white/5 hover:border-blue-500 hover:bg-blue-500/10"
                }`}
              >
                <MessageCircle size={18} />
                Konsultasi Sekarang
              </a>

            </motion.div>
          ))}

        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          *Harga dapat disesuaikan berdasarkan kebutuhan dan kompleksitas project.
        </p>

      </div>
    </section>
  );
}