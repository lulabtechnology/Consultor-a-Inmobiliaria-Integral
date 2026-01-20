import { Star, BadgeCheck, Users } from "lucide-react";

export default function Trust({ t }: { t: any }) {
  return (
    <section id="confianza" className="py-14 sm:py-16">
      <div className="container-pad">
        <h2 className="text-3xl font-semibold tracking-tight">{t.trust.title}</h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-[rgba(214,180,106,.95)]" />
              <div className="font-semibold">Reseñas</div>
            </div>
            <p className="mt-2 text-sm leading-6 text-[rgba(244,242,237,.72)]">
              Placeholder para Google Reviews o testimonios en texto.
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[rgba(214,180,106,.95)]" />
              <div className="font-semibold">Aliados</div>
            </div>
            <p className="mt-2 text-sm leading-6 text-[rgba(244,242,237,.72)]">
              Placeholder para logos de clientes / aliados (cuando los tengas).
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-[rgba(214,180,106,.95)]" />
              <div className="font-semibold">Redes enlazadas</div>
            </div>
            <ul className="mt-2 space-y-2 text-sm text-[rgba(244,242,237,.72)]">
              {t.trust.bullets.map((b: string) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
