"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "6285169630646";

  const message = encodeURIComponent(
    "Halo Nexa Studio, saya tertarik untuk membuat website. Saya ingin konsultasi mengenai project saya."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Nexa Studio"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl hover:shadow-green-500/40"
    >
      <MessageCircle size={24} />

      <span className="hidden font-semibold sm:block">
        Chat WhatsApp
      </span>
    </a>
  );
}