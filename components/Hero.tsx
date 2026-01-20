"use client";

import { links } from "@/lib/links";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";

/**
 * OPCIÓN SIEMPRE:
 * Cambia HERO_MEDIA a "video" si quieres usar videos.
 * - videos esperados:
 *   /public/videos/hero-desktop.mp4
 *   /public/videos/hero-mobile.mp4
 * - imágenes (por defecto):
 *   /public/images/hero-desktop.jpg
 *   /public/images/hero-mobile.jpg
 */
const HERO_MEDIA: "image" | "video" = "image";

export default function Hero({ lang, t }: { lang: "es" | "en"; t: any }) {
  const waText =
    lang === "es"
      ? "Hola, quiero obtener mi diagnóstico inmobiliario integral gratuito. ¿Podemos coordinar?"
      : "Hello, I'd like to get the free comprehensive real-estate diagnosis. Can we coordinate?";

  const waHref = `${links.wa}?text=${encodeURIComponent(waText)}`;

  return (
    <section id="top" className={`hero-wrap ${HERO_MEDIA === "image" ? "hero-bg" : ""}`}>
      {/* VIDEO (opcional) */}
      {HERO_MEDIA === "video" && (
        <div className="absolute inset-0 -z-10">
          {/* Desktop */}
          <video
            className="hidden h-full w-full object-cover sm:block"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>

          {/* Mobile */}
          <video
            className="block h-full w-full object-cover sm:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>

          {/* Overlay claro (para legibilidad) */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.70),rgba(255,255,255,.94))]" />
        </div>
      )}

      <div className="container-pad py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="badge">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)]" />
              <span className="text-sm">{t.hero.badge}</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {t.hero.headline}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {t.hero.sub}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href="#contacto">
                {t.hero.cta1}
                <ArrowRight className="h-5 w-5" />
              </a>

              <a className="btn btn-ghost" href={waHref} target="_blank" rel="noreferrer">
                {t.hero.cta2}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
              <div className="card p-4">
                <div className="font-semibold text-slate-900">Panamá</div>
                <div className="mt-1 text-slate-600">Bellavista · Calle 41</div>
              </div>
              <div className="card p-4">
                <div className="font-semibold text-slate-900">ES / EN</div>
                <div className="mt-1 text-slate-600">Atención bilingüe</div>
              </div>
              <div className="card p-4">
                <div className="font-semibold text-slate-900">Integral</div>
                <div className="mt-1 text-slate-600">Finanzas · Legal · Contable</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-slate-600">
                  {lang === "es" ? "Asesora" : "Advisor"}
                </div>
                <div className="mt-1 text-2xl font-extrabold text-slate-900">
                  Celia Cubilla
                </div>
                <div className="mt-1 text-sm font-semibold text-[color:var(--brand)]">
                  {lang === "es" ? "Asesora Inmobiliaria" : "Real Estate Advisor"}
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-[rgba(15,23,42,.12)] bg-white">
                  <img
                    src="/images/profile.jpg"
                    alt="Foto de perfil"
                    className="h-[320px] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-5 text-sm leading-6 text-slate-600">
                  {lang === "es"
                    ? "Agenda una asesoría rápida para definir tu objetivo y los siguientes pasos."
                    : "Schedule a quick advisory to define your goal and next steps."}
                </div>

                <div className="mt-6 flex gap-2">
                  <a className="btn btn-primary w-full" href="#contacto">
                    {lang === "es" ? "Agendar" : "Schedule"}
                    <ArrowRight className="h-5 w-5" />
                  </a>

                  {/* Indicador para cliente: si se usa video */}
                  {HERO_MEDIA === "video" && (
                    <span className="btn btn-ghost px-3 py-2 text-xs">
                      <Play className="h-4 w-4" /> Video
                    </span>
                  )}
                </div>
              </div>

              <div className="h-px w-full brand-line opacity-70" />

              <div className="p-4 text-xs text-slate-500">
                Rutas de media: <b>/public/images</b> (o <b>/public/videos</b> si activas video).
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full brand-line opacity-70" />
    </section>
  );
}
