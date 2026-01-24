"use client";

import { useMemo, useState } from "react";
import { links } from "@/lib/links";
import { Mail, Globe, MessageCircle } from "lucide-react";

export default function Contact({ t }: { t: any }) {
  const reasons: string[] = t.contact?.form?.reasons ?? [
    "Compra",
    "Venta",
    "Alquiler",
    "Administración",
    "Inversión",
    "Otro"
  ];

  const [sent, setSent] = useState(false);

  const waBase = links.wa;
  const email = links.email;
  const website = links.website;

  const confirmText = useMemo(
    () =>
      t.contact?.confirm ??
      "Gracias por contactarnos. Hemos recibido tu solicitud y en breve te confirmamos el siguiente paso.",
    [t]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const name = String(fd.get("name") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const emailV = String(fd.get("email") ?? "");
    const reason = String(fd.get("reason") ?? "");
    const msg = String(fd.get("message") ?? "");

    const text =
      `Hola, me gustaría agendar un diagnóstico inicial (15 minutos).\n\n` +
      `Nombre: ${name}\n` +
      `Teléfono: ${phone}\n` +
      `Correo: ${emailV}\n` +
      `Motivo: ${reason}\n` +
      (msg ? `Mensaje: ${msg}\n` : "");

    window.open(`${waBase}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contacto" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              {t.contact?.title ?? "Contacto"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {t.contact?.subtitle ??
                "Diagnóstico inicial de orientación general (15 minutos) enfocado en aspectos inmobiliarios. Para un análisis más profundo, ofrecemos consultorías personalizadas."}
            </p>

            <div className="mt-6 grid gap-3">
              <a className="btn btn-ghost w-full justify-start" href={links.wa} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5 text-[color:var(--brand)]" />
                WhatsApp: {links.phoneDisplay}
              </a>

              <a className="btn btn-ghost w-full justify-start" href={`mailto:${email}`}>
                <Mail className="h-5 w-5 text-[color:var(--brand2)]" />
                {email}
              </a>

              <a className="btn btn-ghost w-full justify-start" href={`https://${website}`} target="_blank" rel="noreferrer">
                <Globe className="h-5 w-5 text-[color:var(--brand2)]" />
                {website}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-6">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-800">
                      {t.contact?.form?.name ?? "Nombre completo"}
                    </label>
                    <input className="input mt-2" name="name" required />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-800">
                      {t.contact?.form?.phone ?? "Teléfono"}
                    </label>
                    <input className="input mt-2" name="phone" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-800">
                      {t.contact?.form?.email ?? "Correo"}
                    </label>
                    <input className="input mt-2" name="email" type="email" required />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-800">
                      {t.contact?.form?.reason ?? "Motivo principal"}
                    </label>
                    <select className="input mt-2" name="reason" required defaultValue={reasons[0]}>
                      {reasons.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-800">
                    {t.contact?.form?.message ?? "Cuéntanos un poco más (opcional)"}
                  </label>
                  <textarea className="input mt-2 min-h-[120px]" name="message" />
                </div>

                <button className="btn btn-primary w-full" type="submit">
                  {t.contact?.form?.send ?? "Enviar por WhatsApp"}
                  <MessageCircle className="h-5 w-5" />
                </button>

                {sent && (
                  <div className="mt-2 text-sm text-slate-700">
                    {confirmText}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
