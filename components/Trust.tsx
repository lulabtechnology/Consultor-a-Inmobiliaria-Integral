import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role?: string;
  text: string;
  // OPCIÓN: si luego quieres foto por testimonio
  // avatar?: string; // ej: "/images/testimonials/jorge.jpg"
};

export default function Trust({ t }: { t: any }) {
  const items: Testimonial[] = t.trust?.items ?? [];

  return (
    <section id="confianza" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {t.trust?.title ?? "Testimonios"}
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((x, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-[color:var(--brand2)]" />
                ))}
              </div>

              <div className="mt-3 text-sm leading-6 text-slate-700">
                {x.text}
              </div>

              <div className="mt-4 text-sm font-semibold text-slate-900">{x.name}</div>
              {x.role && <div className="text-xs text-slate-600">{x.role}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
