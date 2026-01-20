"use client";

import { links } from "@/lib/links";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero({ lang, t }: { lang: "es" | "en"; t: any }) {
  const waText =
    lang === "es"
      ? "Hola, quiero solicitar mi diagnóstico inmobiliario integral gratuito. ¿Podemos coordinar?"
      : "Hello, I'd like to request the free comprehensive real-estate diagnosis. Can we coordinate?";

  const waHref = `${links.wa}?text=${encodeURIComponent(waText)}`;

  return (
    <section className="hero-bg">
      <div className="container-pad py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="badge">
              <CheckCircle2 className="h-4 w-4 text-[rgba(214,180,106,.95)]" />
              <span className="text-sm">{t.hero.badge}</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.hero.headline}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[rgba(244,242,237,.78)]">
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

            <div className="mt-8 grid gap-3 text-sm text-[rgba(244,242,237,.72)] sm:grid-cols-3">
              <div className="card p-4">
                <div className="text-[rgba(214,180,106,.95)] font-semibold">Panamá</div>
                <div className="mt-1">Bellavista · Calle 41</div>
              </div>
              <div className="card p-4">
                <div className="text-[rgba(214,180,106,.95)] font-semibold">ES / EN</div>
                <div className="mt-1">Atención bilingüe</div>
              </div>
              <div className="card p-4">
                <div className="text-[rgba(214,180,106,.95)] font-semibold">Integral</div>
                <div className="mt-1">Finanzas · Legal · Contable</div>
              </div>
            </div>
          </div>

          {/* Columna derecha (foto / tarjeta) */}
          <div className="lg:col-span-5">
            <div className="card overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-[rgba(244,242,237,.70)]">
                  {lang === "es" ? "Asesora" : "Advisor"}
                </div>
                <div className="mt-1 text-2xl font-semibold text-[rgba(244,242,237,.95)]">
                  Celia Cubilla
                </div>
                <div className="mt-1 text-sm text-[rgba(214,180,106,.95)]">
                  {lang === "es" ? "Asesora Inmobiliaria" : "Real Estate Advisor"}
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-[rgba(214,180,106,.18)] bg-[rgba(16,18,24,.45)]">
                  {/* Placeholder de foto. Sube /public/images/profile.jpg */}
                  <img
                    src="/images/profile.jpg"
                    alt="Foto de perfil"
                    className="h-[320px] w-full object-cover"
                  />
                </div>

                <div className="mt-5 text-sm leading-6 text-[rgba(244,242,237,.74)]">
                  {lang === "es"
                    ? "Diagnóstico inicial para entender tu objetivo y definir los siguientes pasos con claridad."
                    : "An initial diagnosis to understand your goal and define the next steps clearly."}
                </div>

                <div className="mt-6">
                  <a className="btn btn-primary w-full" href="#contacto">
                    {lang === "es" ? "Agendar diagnóstico" : "Schedule diagnosis"}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="h-px w-full gold-line opacity-70" />

              <div className="p-5 text-xs text-[rgba(244,242,237,.68)]">
                {lang === "es"
                  ? "Nota: sustituye las imágenes del hero y del footer por tus archivos en /public/images."
                  : "Note: replace hero/footer images by uploading your files to /public/images."}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="h-px w-full gold-line opacity-60" />
    </section>
  );
}
