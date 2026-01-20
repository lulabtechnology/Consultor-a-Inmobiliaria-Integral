import { BadgeCheck, Languages, Scale } from "lucide-react";

export default function WhyUs({ t }: { t: any }) {
  const items = t.why?.items ?? [];
  const icons = [BadgeCheck, Scale, Languages];

  return (
    <section id="porque" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {t.why?.title ?? "Por qué elegirnos"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {t.why?.subtitle ?? "Ventajas claras para tomar decisiones con confianza."}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((x: any, idx: number) => {
            const Icon = icons[idx] ?? BadgeCheck;
            return (
              <div key={idx} className="card p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-[rgba(11,59,46,.10)] p-3">
                    <Icon className="h-6 w-6 text-[color:var(--brand)]" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900">{x.t}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{x.d}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {t.why?.guarantee && (
          <div className="mt-8 card p-6">
            <div className="text-sm font-semibold text-slate-900">Respaldo</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{t.why.guarantee}</div>
          </div>
        )}
      </div>
    </section>
  );
}
