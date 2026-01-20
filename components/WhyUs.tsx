import { ShieldCheck } from "lucide-react";

export default function WhyUs({ t }: { t: any }) {
  return (
    <section id="porque" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight">{t.why.title}</h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {t.why.items.map((x: any) => (
            <div key={x.t} className="card p-6">
              <div className="text-lg font-semibold text-[rgba(244,242,237,.95)]">{x.t}</div>
              <p className="mt-2 text-sm leading-6 text-[rgba(244,242,237,.72)]">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 card p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(214,180,106,.24)] bg-[rgba(214,180,106,.10)]">
              <ShieldCheck className="h-5 w-5 text-[rgba(214,180,106,.95)]" />
            </span>
            <div>
              <div className="text-sm font-semibold text-[rgba(244,242,237,.92)]">
                {t.why.guarantee}
              </div>
              <div className="mt-1 text-xs text-[rgba(244,242,237,.60)]">
                (Texto alineado al “respaldo/garantía” del formulario.)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
