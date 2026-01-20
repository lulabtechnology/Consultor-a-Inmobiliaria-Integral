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
    <header className="sticky top-0 z-50 border-b border-[rgba(214,180,106,.14)] bg-[rgba(11,12,16,.78)] backdrop-blur-xl">
      <div className="container-pad py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Marca */}
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-2xl border border-[rgba(214,180,106,.22)] bg-[rgba(16,18,24,.55)]" />
            <div className="min-w-0 leading-tight">
              <div className="truncate text-sm font-semibold tracking-tight text-[rgba(244,242,237,.95)]">
                Consultoría Inmobiliaria Integral
              </div>
              <div className="truncate text-xs text-[rgba(244,242,237,.62)]">
                Panamá · Bellavista · Calle 41
              </div>
            </div>
          </a>

          {/* Acciones */}
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

            <a className="btn btn-primary px-3 py-2 text-xs" href={links.wa} target="_blank" rel="noreferrer">
              <Phone className="h-4 w-4" />
              {lang === "es" ? "WhatsApp" : "WhatsApp"}
            </a>
          </div>
        </div>

        {/* Menú simple (solo desktop) */}
        <nav className="mt-3 hidden items-center gap-6 text-sm text-[rgba(244,242,237,.78)] md:flex">
          <a href="#servicios" className="hover:text-[rgba(214,180,106,.95)]">
            {t.nav.services}
          </a>
          <a href="#porque" className="hover:text-[rgba(214,180,106,.95)]">
            {t.nav.why}
          </a>
          <a href="#confianza" className="hover:text-[rgba(214,180,106,.95)]">
            {t.nav.trust}
          </a>
          <a href="#contacto" className="hover:text-[rgba(214,180,106,.95)]">
            {t.nav.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}
