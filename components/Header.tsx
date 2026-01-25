"use client";

import { type Lang } from "@/lib/content";
import { links } from "@/lib/links";
import { Languages, Phone } from "lucide-react";

export default function Header({
  lang,
  setLang,
  t
}: {
  lang: Lang;
  setLang: (v: Lang) => void;
  t: any;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(15,23,42,.10)] bg-[rgba(255,255,255,.86)] backdrop-blur-xl">
      <div className="container-pad py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            {/* LOGO */}
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-2xl border border-[rgba(15,23,42,.10)] bg-white">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-full w-full object-contain p-1"
                loading="lazy"
              />
            </div>

            <div className="min-w-0 leading-tight">
              <div className="truncate text-sm font-extrabold tracking-tight text-slate-900">
                Consultoría Inmobiliaria Integral
              </div>
              <div className="truncate text-xs text-slate-600">
                Ciudad de Panamá · Área de Bella Vista
              </div>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <button
              className="btn btn-ghost px-3 py-2 text-xs"
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label="Cambiar idioma"
              type="button"
            >
              <Languages className="h-4 w-4" />
              {lang === "es" ? "ES" : "EN"}
            </button>

          <a className="btn btn-wa px-3 py-2 text-xs" href={links.wa} target="_blank" rel="noreferrer">
  <Phone className="h-4 w-4" />
  WhatsApp
</a>

          </div>
        </div>

        <nav className="mt-3 hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#propiedades" className="hover:text-slate-900">{t.nav.featured}</a>
          <a href="#servicios" className="hover:text-slate-900">{t.nav.services}</a>
          <a href="#porque" className="hover:text-slate-900">{t.nav.why}</a>
          <a href="#confianza" className="hover:text-slate-900">{t.nav.trust}</a>
          <a href="#contacto" className="hover:text-slate-900">{t.nav.contact}</a>
        </nav>
      </div>
    </header>
  );
}
