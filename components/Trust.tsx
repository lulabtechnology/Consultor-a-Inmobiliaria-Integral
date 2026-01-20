import { Star } from "lucide-react";

export default function Trust({ t }: { t: any }) {
  return (
    <section id="confianza" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {t.trust?.title ?? "Confianza"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {t.trust?.subtitle ??
              "Prueba social y señales de credibilidad para reforzar la decisión del visitante."}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-[color:var(--brand2)]" />
                ))}
              </div>
              <div className="mt-3 text-sm leading-6 text-slate-600">
                {t.trust?.sampleText ??
                  "Testimonio de cliente (coloca aquí reseñas reales). Texto corto, claro y creíble."}
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900">
                {t.trust?.sampleName ?? "Nombre Apellido"}
              </div>
              <div className="text-xs text-slate-500">
                {t.trust?.sampleRole ?? "Cliente"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
