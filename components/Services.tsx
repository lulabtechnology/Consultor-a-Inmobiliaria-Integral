import { Check } from "lucide-react";

export default function Services({ t }: { t: any }) {
  return (
    <section id="servicios" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">{t.services.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[rgba(244,242,237,.74)]">
              Gestión inmobiliaria integral para que tomes decisiones seguras y bien estructuradas.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {t.services.items.map((item: string) => (
                  <li key={item} className="flex gap-3 text-sm text-[rgba(244,242,237,.80)]">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(214,180,106,.30)] bg-[rgba(214,180,106,.10)]">
                      <Check className="h-4 w-4 text-[rgba(214,180,106,.95)]" />
                    </span>
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 h-px w-full bg-[rgba(214,180,106,.18)]" />

              <div className="mt-5 text-xs leading-6 text-[rgba(244,242,237,.65)]">
                Tip: si luego quieres agregar “portafolio/casos” o “propiedades destacadas”, se integra aquí sin tocar el hero/footer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
