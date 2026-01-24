"use client";

import { useMemo, useState } from "react";
import { links } from "@/lib/links";
import { MapPin, Tag, ArrowRight, X } from "lucide-react";

type Property = {
  id: string;
  title: string;
  location: string;
  badge: string;
  sale?: string;
  rent?: string;
  cover: string;
  gallery: string[]; // 2 imágenes extra
  description: string;
};

const properties: Property[] = [
  {
    id: "P-001",
    title: "Waters on the Bay – Avenida Balboa",
    location: "Ciudad de Panamá · Área de Bella Vista",
    badge: "1 recámara | Vista al mar",
    sale: "$300,000",
    cover: "/properties/waters/cover.jpg",
    gallery: ["/properties/waters/1.jpg", "/properties/waters/2.jpg"],
    description:
      "Apartamento con balcón y vista directa al mar, cocina abierta con línea blanca y 1.5 baños. PH con piscina, seguridad 24/7 y amenidades clave. 👉 Alta plusvalía y excelente opción de inversión, ideal para ejecutivos y alquiler urbano frente a la Cinta Costera."
  },
  {
    id: "P-002",
    title: "PH MAUI – Costa del Este",
    location: "Costa del Este, Ciudad de Panamá",
    badge: "3 recámaras | Inversión familiar",
    rent: "$2,700",
    sale: "$410,000",
    cover: "/properties/maui/cover.jpg",
    gallery: ["/properties/maui/1.jpg", "/properties/maui/2.jpg"],
    description:
      "Apartamento remodelado de 151 m², con den familiar, cocina moderna, cuarto y baño de servicio y 2 estacionamientos. PH con áreas sociales completas y seguridad. 👉 Inversión sólida y estable, ideal para familias y alquiler corporativo en una de las zonas más demandadas de Panamá."
  },
  {
    id: "P-003",
    title: "PH Faro del Sur – San Francisco / Coco del Mar",
    location: "San Francisco / Coco del Mar, Ciudad de Panamá",
    badge: "2 recámaras | Retorno estable",
    sale: "B/.125,000",
    cover: "/properties/faro/cover.jpg",
    gallery: ["/properties/faro/1.jpg", "/properties/faro/2.jpg"],
    description:
      "Apartamento bien distribuido con cocina equipada, 2 baños y 1 estacionamiento. PH residencial con seguridad 24/7 y mantenimiento controlado. 👉 Opción eficiente de inversión, ideal para alquiler a largo plazo en zona céntrica y de alta demanda."
  }
];

export default function FeaturedProperties({ lang, t }: { lang: "es" | "en"; t: any }) {
  const [open, setOpen] = useState<Property | null>(null);
  const [activeImg, setActiveImg] = useState<string>("");

  const openModal = (p: Property) => {
    setOpen(p);
    setActiveImg(p.cover);
  };

  const closeModal = () => {
    setOpen(null);
    setActiveImg("");
  };

  const onWhatsApp = (p: Property) => {
    const priceLine =
      p.rent && p.sale ? `Alquiler: ${p.rent} | Venta: ${p.sale}` : p.sale ? `Venta: ${p.sale}` : "";

    const text =
      lang === "es"
        ? `Hola, me interesa esta propiedad:\n\n${p.title}\n${p.badge}\n${p.location}\n${priceLine}\n\n¿Me brindas disponibilidad y más detalles?`
        : `Hello, I'm interested in:\n\n${p.title}\n${p.badge}\n${p.location}\n${priceLine}\n\nCan you share availability and details?`;

    window.open(`${links.wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const sectionTitle = useMemo(() => t.featured?.title ?? "Propiedades destacadas", [t]);
  const sectionSub = useMemo(() => t.featured?.sub ?? "", [t]);
  const note = useMemo(() => t.featured?.note ?? "", [t]);

  return (
    <section id="propiedades" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{sectionTitle}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">{sectionSub}</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {properties.map((p) => (
            <article key={p.id} className="card overflow-hidden">
              <button type="button" onClick={() => openModal(p)} className="block w-full text-left">
                <img src={p.cover} alt={p.title} className="h-52 w-full object-cover" loading="lazy" />
              </button>

              <div className="p-5">
                <div className="text-xs font-semibold text-slate-500">{p.id}</div>
                <div className="mt-1 text-lg font-extrabold text-slate-900">{p.title}</div>

                <div className="mt-2 text-sm font-semibold text-[color:var(--brand)]">{p.badge}</div>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                  <MapPin className="h-4 w-4 text-[color:var(--brand2)]" />
                  {p.location}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-700">
                  <Tag className="h-4 w-4 text-[color:var(--brand)]" />
                  {p.rent && <span className="badge">Alquiler: {p.rent}</span>}
                  {p.sale && <span className="badge">Venta: {p.sale}</span>}
                </div>

                <div className="mt-5 grid gap-2">
                  <button className="btn btn-primary w-full" onClick={() => onWhatsApp(p)} type="button">
                    {t.featured?.cta ?? "Consultar por WhatsApp"}
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button className="btn btn-ghost w-full" onClick={() => openModal(p)} type="button">
                    {t.featured?.view ?? "Ver detalles"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!!note && (
          <div className="mt-8 card p-6">
            <div className="text-sm font-semibold text-slate-900">{note}</div>
          </div>
        )}
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(2,6,23,.55)] p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div className="card w-full max-w-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-[rgba(15,23,42,.10)] p-4">
              <div className="min-w-0">
                <div className="truncate text-base font-extrabold text-slate-900">{open.title}</div>
                <div className="mt-1 text-sm text-slate-700">{open.badge}</div>
              </div>
              <button className="btn btn-ghost px-3 py-2" type="button" onClick={closeModal}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-2">
              <div>
                <img src={activeImg || open.cover} alt="Imagen" className="h-72 w-full rounded-2xl object-cover" />

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[open.cover, ...open.gallery].map((src) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImg(src)}
                      className="overflow-hidden rounded-xl border border-[rgba(15,23,42,.10)] bg-white"
                    >
                      <img src={src} alt="thumb" className="h-20 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Ubicación:</span> {open.location}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {open.rent && <span className="badge">Alquiler: {open.rent}</span>}
                  {open.sale && <span className="badge">Venta: {open.sale}</span>}
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-700">{open.description}</p>

                <div className="mt-6">
                  <button className="btn btn-primary w-full" onClick={() => onWhatsApp(open)} type="button">
                    {t.featured?.cta ?? "Consultar por WhatsApp"}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-3">
                  <button className="btn btn-ghost w-full" onClick={closeModal} type="button">
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
