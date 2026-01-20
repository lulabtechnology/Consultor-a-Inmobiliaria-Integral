"use client";

import { type Lang } from "@/lib/content";
import { links } from "@/lib/links";
import { Mail, Phone, Globe, Languages } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-[rgba(214,180,106,.14)] bg-[rgba(11,12,16,.70)] backdrop-blur-xl">
      <div className="container-pad py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Logo placeholder */}
            <div className="h-10 w-10 overflow-hidden rounded-2xl border border-[rgba(214,180,106,.22)] bg-[rgba(16,18,24,.55)]">
              {/* Si subes logo.svg, reemplaza esto por un <img src="/images/logo.svg" .../> */}
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-[rgba(244,242,237,.95)]">
                Consultoría Inmobiliaria Integral
              </div>
              <div className="text-xs text-[rgba(244,242,237,.62)]">
                Panamá · Bellavista · Calle 41
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-[rgba(244,242,237,.78)] md:flex">
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

            <a className="btn btn-primary hidden px-3 py-2 text-xs sm:inline-flex" href="#contacto">
              <Phone className="h-4 w-4" />
              {links.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Mini bar de contacto */}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[rgba(244,242,237,.70)]">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-[rgba(214,180,106,.95)]" />
            {links.phoneDisplay}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-[rgba(214,180,106,.95)]" />
            {links.email}
          </span>
          <span className="inline-flex items-center gap-2">
            <Globe className="h-4 w-4 text-[rgba(214,180,106,.95)]" />
            {links.website}
          </span>
        </div>
      </div>
    </header>
  );
}
