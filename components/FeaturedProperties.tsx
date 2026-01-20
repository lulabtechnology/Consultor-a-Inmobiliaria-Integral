"use client";

import { links } from "@/lib/links";
import { MapPin, Tag, ArrowRight } from "lucide-react";

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string; // ruta en /public/properties/
};

const properties: Property[] = [
  {
    id: "P-001",
    title: "Apartamento moderno en Bella Vista",
    location: "Bella Vista, Ciudad de Panamá",
    price: "Desde $185,000",
    image: "/properties/p1.jpg"
  },
  {
    id: "P-002",
    title: "Casa familiar con patio",
    location: "San Francisco, Ciudad de Panamá",
    price: "Desde $320,000",
    image: "/properties/p2.jpg"
  },
  {
    id: "P-003",
    title: "Inversión: condo para alquiler",
    location: "Costa del Este, Ciudad de Panamá",
    price: "Desde $210,000",
    image: "/properties/p3.jpg"
  }
];

export default function FeaturedProperties({ lang, t }: { lang: "es" | "en"; t: any }) {
  const onWhatsApp = (p: Property) => {
    const text =
      lang === "es"
        ? `Hola, me interesa esta propiedad: ${p.title} (${p.location}) - ${p.price}. ¿Me brindas más detalles y disponibilidad?`
        : `Hello, I'm interested in this property: ${p.title} (${p.location}) - ${p.price}. Can you share details and availability?`;

    window.open(`${links.wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="propiedades" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              {t.featured.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t.featured.sub}
            </p>
          </div>

          <div className="text-xs text-slate-500">
            Imágenes: <b>/public/properties/p1.jpg</b>, <b>p2.jpg</b>, <b>p3.jpg</b>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {properties.map((p) => (
            <article key={p.id} className="card overflow-hidden">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 rounded-full border border-[rgba(255,255,255,.70)] bg-[rgba(255,255,255,.78)] px-3 py-1 text-xs font-semibold text-slate-700">
                  {p.id}
                </div>
              </div>

              <div className="p-5">
                <div className="text-lg font-extrabold text-slate-900">
                  {p.title}
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-[color:var(--brand)]" />
                  {p.location}
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <Tag className="h-4 w-4 text-[color:var(--brand2)]" />
                  {p.price}
                </div>

                <div className="mt-5 grid gap-2">
                  <button className="btn btn-primary w-full" onClick={() => onWhatsApp(p)} type="button">
                    {t.featured.cta}
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    className="btn btn-ghost w-full"
                    onClick={() => onWhatsApp(p)}
                    type="button"
                  >
                    {t.featured.view}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
