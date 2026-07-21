export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 items-center">

        {/* Text */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            About NexaStudio
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Solusi Digital Untuk
            <span className="text-blue-500">
              {" "}Bisnis Masa Kini
            </span>
          </h2>

          <p className="mt-6 leading-relaxed text-slate-400">
            NexaStudio adalah digital studio yang berfokus membantu bisnis
            berkembang melalui website modern, aplikasi web, dan desain
            digital yang memiliki tampilan profesional serta performa tinggi.
          </p>

          <p className="mt-4 leading-relaxed text-slate-400">
            Kami menggabungkan desain kreatif dan teknologi terbaru untuk
            menciptakan solusi digital yang tidak hanya terlihat menarik,
            tetapi juga memberikan pengalaman terbaik bagi pengguna.
          </p>

        </div>


        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-white">
                50+
              </h3>
              <p className="mt-2 text-slate-400">
                Project Digital
              </p>
            </div>


            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-white">
                100%
              </h3>
              <p className="mt-2 text-slate-400">
                Fokus Kepuasan Client
              </p>
            </div>


            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-white">
                24/7
              </h3>
              <p className="mt-2 text-slate-400">
                Support
              </p>
            </div>


            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-white">
                Modern
              </h3>
              <p className="mt-2 text-slate-400">
                Technology
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}