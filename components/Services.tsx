import { CheckCircle2 } from "lucide-react";

export default function Services({ t }: { t: any }) {
  return (
    <section id="servicios" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {t.services?.title ?? "Servicios"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {t.services?.subtitle ??
              "Gestión inmobiliaria integral para que tomes decisiones seguras y bien estructuradas."}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {(t.services?.items ?? []).map((item: string, i: number) => (
            <div key={i} className="card p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-[rgba(11,59,46,.10)] p-2">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--brand)]" />
                </div>
                <div className="text-sm font-semibold text-slate-900">{item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
