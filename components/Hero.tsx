"use client";

import { links } from "@/lib/links";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HERO_MEDIA: "image" | "video" = "image";

export default function Hero({ lang, t }: { lang: "es" | "en"; t: any }) {
  const waText =
    lang === "es"
      ? "Hola, me gustaría agendar un diagnóstico inicial (15 minutos). ¿Podemos coordinar?"
      : "Hello, I'd like to schedule the initial 15-minute diagnosis. Can we coordinate?";

  const waHref = `${links.wa}?text=${encodeURIComponent(waText)}`;

  return (
    <section id="top" className={`hero-wrap ${HERO_MEDIA === "image" ? "hero-bg" : ""}`}>
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

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
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
                <div className="font-semibold text-slate-900">Ciudad de Panamá</div>
                <div className="mt-1 text-slate-700">Área de Bella Vista</div>
              </div>

              <div className="card p-4">
                <div className="font-semibold text-slate-900">ES / EN</div>
                <div className="mt-1 text-slate-700">Atención bilingüe</div>
              </div>

              <div className="card p-4">
                <div className="font-semibold text-slate-900">Enfoque</div>
                <div className="mt-1 text-slate-700">
                  Finanzas · Legal · Contable · Administración · Seguros
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card overflow-hidden">
              <div className="p-6">
                <div className="text-2xl font-extrabold text-slate-900">
                  Clelia Cubilla
                </div>
                <div className="mt-1 text-sm font-semibold text-[color:var(--brand)]">
                  Fundadora-Consultora Inmobiliaria
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-[rgba(15,23,42,.12)] bg-white">
                  <img
                    src="/images/profile.jpg"
                    alt="Foto de perfil"
                    className="h-[320px] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-5 text-sm leading-6 text-slate-700">
                  {lang === "es"
                    ? "Agenda una sesión de diagnóstico para definir tu objetivo y los siguientes pasos."
                    : "Schedule a diagnosis session to define your goal and the next steps."}
                </div>

                <div className="mt-6">
                  <a className="btn btn-primary w-full" href="#contacto">
                    {lang === "es" ? "Agendar diagnóstico" : "Schedule diagnosis"}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="h-px w-full brand-line opacity-70" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full brand-line opacity-70" />
    </section>
  );
}
