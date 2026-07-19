import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold">
              Nexa<span className="text-blue-500">Studio</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Kami membantu bisnis berkembang melalui website modern,
              cepat, dan profesional.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Menu
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Website</li>
              <li>Landing Page</li>
              <li>Company Profile</li>
              <li>UI Design</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>azharrafid111@gmail.com</li>
              <li>+62 851-6963-0646</li>
              <li>Indonesia</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">
          © 2026 Nexa Studio. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}