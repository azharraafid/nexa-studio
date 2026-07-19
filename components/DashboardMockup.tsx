"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  DollarSign,
  Users,
  ShoppingCart,
} from "lucide-react";

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5, y: 30 }}
      animate={{ opacity: 1, rotate: 0, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        rotate: -2,
        scale: 1.02,
      }}
      className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-[0_20px_80px_rgba(0,0,0,.5)]"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <BarChart3 className="text-blue-500" />
          Dashboard
        </h2>

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-slate-800 p-5">
          <DollarSign className="mb-3 text-green-400" />
          <p className="text-gray-400 text-sm">Revenue</p>
          <h3 className="mt-2 text-3xl font-bold">$24K</h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <Users className="mb-3 text-blue-400" />
          <p className="text-gray-400 text-sm">Users</p>
          <h3 className="mt-2 text-3xl font-bold">8.2K</h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <ShoppingCart className="mb-3 text-purple-400" />
          <p className="text-gray-400 text-sm">Orders</p>
          <h3 className="mt-2 text-3xl font-bold">532</h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <BarChart3 className="mb-3 text-pink-400" />
          <p className="text-gray-400 text-sm">Conversion</p>
          <h3 className="mt-2 text-3xl font-bold">98%</h3>
        </div>

      </div>

      {/* Grafik */}
      <div className="mt-8">
        <p className="mb-4 text-gray-400">Analytics</p>

        <div className="flex h-36 items-end gap-3">
          <div className="h-16 w-full rounded-t bg-blue-500"></div>
          <div className="h-24 w-full rounded-t bg-blue-500"></div>
          <div className="h-20 w-full rounded-t bg-blue-500"></div>
          <div className="h-32 w-full rounded-t bg-blue-500"></div>
          <div className="h-28 w-full rounded-t bg-blue-500"></div>
          <div className="h-36 w-full rounded-t bg-blue-500"></div>
        </div>
      </div>
    </motion.div>
  );
}