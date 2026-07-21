"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );


    setSuccess(true);
    setTimeout(() => {
  setSuccess(false);
}, 5000);

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error("EMAILJS ERROR:", error);
    alert("❌ Gagal mengirim pesan.");
  }

  setLoading(false);
};

  
   return (
  <section id="contact" className="bg-slate-900 py-28 text-white">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[4px] text-blue-500">
          Contact
        </p>

        <h2 className="mt-4 text-5xl font-extrabold">
          Mari Diskusikan Proyek Anda
        </h2>

        <p className="mt-6 text-gray-400">
          Isi form di bawah dan kami akan menghubungi Anda.
        </p>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="rounded-3xl border border-white/10 bg-slate-800/40 p-8 backdrop-blur-xl">
          <h3 className="text-3xl font-bold">
            Hubungi Nexa Studio
          </h3>

          <p className="mt-4 text-slate-400">
            Siap membantu pembuatan website, landing page,
            company profile, hingga web app custom.
          </p>

          <div className="mt-10 space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-500" />

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p>azharrafid111@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-500" />

              <div>
                <p className="text-sm text-slate-500">
                  WhatsApp
                </p>

                <p>+62 851-6963-0646</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-blue-500" />

              <div>
                <p className="text-sm text-slate-500">
                  Jam Kerja
                </p>

                <p>08.00 - 22.00 WIB</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-500" />

              <div>
                <p className="text-sm text-slate-500">
                  Lokasi
                </p>

                <p>Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={sendEmail}
          className="space-y-6 rounded-3xl border border-white/10 bg-slate-800/40 p-8 backdrop-blur-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Nama"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            required
          />

          <textarea
            rows={6}
            name="message"
            placeholder="Pesan..."
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {success && (
            <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-center text-green-400">
              ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
            </div>
          )}
        </form>
      </div>
    </div>
  </section>
);
}