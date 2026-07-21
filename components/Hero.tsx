"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.25),transparent_60%)]" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          >
            🚀 Trusted Digital Partner
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-black leading-tight md:text-7xl"
          >
            Website Profesional
            <span className="text-blue-500">
              {" "}untuk Mengembangkan
            </span>
            <br />
            Bisnis Anda
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-400"
          >
            NexaStudio membantu bisnis berkembang melalui website modern,
            landing page, dan aplikasi web yang cepat, elegan, dan profesional.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Mulai Project →
            </a>

            <a
              href="#portfolio"
              className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white/10"
            >
              Lihat Portfolio
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.7,
            }}
            className="mt-16 flex flex-wrap gap-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">
                50+
              </h3>

              <p className="text-slate-400">
                Project Selesai
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                99%
              </h3>

              <p className="text-slate-400">
                Responsif
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                24/7
              </h3>

              <p className="text-slate-400">
                Support
              </p>
            </div>
          </motion.div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative hidden items-center justify-center lg:flex"
        >

          {/* Glow */}
          <div className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

          {/* Floating Card - Project */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -left-6 top-12 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <p className="text-xs text-slate-400">
              Project Complete
            </p>

            <h3 className="mt-1 text-2xl font-bold text-blue-400">
              50+
            </h3>
          </motion.div>

          {/* Floating Card - Satisfaction */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-6 bottom-10 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <p className="text-xs text-slate-400">
              Client Satisfaction
            </p>

            <h3 className="mt-1 text-2xl font-bold text-green-400">
              98%
            </h3>
          </motion.div>

          {/* Dashboard */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="relative z-10 w-full max-w-[520px] rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl"
          >

            {/* Dashboard Header */}
            <div className="mb-8 flex items-center justify-between">

              <div>
                <h3 className="text-xl font-bold">
                  Nexa Dashboard
                </h3>

                <p className="text-sm text-slate-400">
                  Website Analytics
                </p>
              </div>

              <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                ● Live
              </div>

            </div>

            {/* Analytics Bars */}
            <div className="space-y-4">

              <div>
                <div className="mb-2 flex justify-between text-xs text-slate-400">
                  <span>Website Traffic</span>
                  <span>80%</span>
                </div>

                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-3 w-4/5 rounded-full bg-blue-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-xs text-slate-400">
                  <span>Conversion</span>
                  <span>60%</span>
                </div>

                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-3 w-3/5 rounded-full bg-cyan-400" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-xs text-slate-400">
                  <span>Performance</span>
                  <span>90%</span>
                </div>

                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-3 w-[90%] rounded-full bg-indigo-500" />
                </div>
              </div>

            </div>

            {/* Dashboard Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-slate-800 p-4 text-center">
                <h4 className="text-2xl font-bold text-blue-400">
                  120+
                </h4>

                <p className="mt-1 text-xs text-slate-400">
                  Visitors
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4 text-center">
                <h4 className="text-2xl font-bold text-green-400">
                  98%
                </h4>

                <p className="mt-1 text-xs text-slate-400">
                  Success
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">
                  24/7
                </h4>

                <p className="mt-1 text-xs text-slate-400">
                  Support
                </p>
              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}