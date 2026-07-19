"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-28 text-white">
      <div className="mx-auto max-w-3xl px-6">

        <div className="text-center">
          <p className="text-blue-500 font-semibold uppercase tracking-[4px]">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-extrabold">
            Mari Diskusikan Proyek Anda
          </h2>

          <p className="mt-6 text-gray-400">
            Isi form di bawah dan kami akan menghubungi Anda.
          </p>
        </div>

        <form className="mt-16 space-y-6">

          <input
            type="text"
            placeholder="Nama"
            className="w-full rounded-xl border border-white/10 bg-slate-800 p-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-slate-800 p-4 outline-none focus:border-blue-500"
          />

          <textarea
            rows={6}
            placeholder="Pesan..."
            className="w-full rounded-xl border border-white/10 bg-slate-800 p-4 outline-none focus:border-blue-500"
          />

          <button
            className="w-full rounded-xl bg-blue-600 py-4 font-bold hover:bg-blue-700 transition"
          >
            Kirim Pesan
          </button>

        </form>

      </div>
    </section>
  );
}