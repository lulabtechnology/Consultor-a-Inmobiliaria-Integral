"use client";

import { useMemo, useState } from "react";
import { links } from "@/lib/links";
import { Mail, Phone, MessageCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

export default function Contact({ t }: { t: any }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    reason: t.contact.form.reasons[0],
    message: ""
  });

  const canSend = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.phone.trim() && form.reason.trim();
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;

    setLoading(true);

    const text =
      `Solicitud de diagnóstico inmobiliario integral\n\n` +
      `Nombre: ${form.name}\n` +
      `Correo: ${form.email}\n` +
      `Teléfono: ${form.phone}\n` +
      `Motivo: ${form.reason}\n` +
      (form.message ? `Mensaje: ${form.message}\n` : "") +
      `\nEnviado desde la landing.`;

    const waHref = `${links.wa}?text=${encodeURIComponent(text)}`;

    // Abrimos WhatsApp (captura lead de forma inmediata)
    window.open(waHref, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 450);
  };

  return (
    <section id="contacto" className="py-14 sm:py-16">
      <div className="container-pad">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight">{t.contact.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[rgba(244,242,237,.74)]">
              {t.contact.subtitle}
            </p>

            <div className="mt-6 space-y-3">
              <div className="card p-5 text-sm text-[rgba(244,242,237,.78)]">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[rgba(214,180,106,.95)]" />
                  <div>{links.phoneDisplay}</div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[rgba(214,180,106,.95)]" />
                  <div>{links.email}</div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[rgba(214,180,106,.95)]" />
                  <div>WhatsApp Business</div>
                </div>
              </div>

              <div className="text-xs text-[rgba(244,242,237,.60)]">
                Consejo: si luego quieres que el formulario envíe también a correo, se integra con un endpoint (API route) o un servicio tipo Formspree.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-6">
              {!sent ? (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs text-[rgba(244,242,237,.70)]">
                        {t.contact.form.name}
                      </label>
                      <input
                        className="input mt-2"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ej: María González"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[rgba(244,242,237,.70)]">
                        {t.contact.form.phone}
                      </label>
                      <input
                        className="input mt-2"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Ej: 6000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs text-[rgba(244,242,237,.70)]">
                        {t.contact.form.email}
                      </label>
                      <input
                        className="input mt-2"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Ej: correo@dominio.com"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[rgba(244,242,237,.70)]">
                        {t.contact.form.reason}
                      </label>
                      <select
                        className="input mt-2"
                        value={form.reason}
                        onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      >
                        {t.contact.form.reasons.map((r: string) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[rgba(244,242,237,.70)]">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      className="input mt-2 min-h-[110px]"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Ej: Busco apartamento en Bella Vista / inversión / etc."
                    />
                  </div>

                  <button
                    className="btn btn-primary w-full"
                    disabled={!canSend || loading}
                    type="submit"
                  >
                    {loading ? "Enviando..." : t.contact.form.send}
                  </button>

                  <div className="text-xs text-[rgba(244,242,237,.60)]">
                    Al enviar, se abrirá WhatsApp con el resumen para registrar el lead de inmediato.
                  </div>
                </form>
              ) : (
                <div className="p-2">
                  <div className="text-lg font-semibold text-[rgba(214,180,106,.95)]">
                    Listo
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[rgba(244,242,237,.78)]">
                    {t.contact.confirm}
                  </p>

                  <div className="mt-6">
                    <a className="btn btn-ghost w-full" href="#top">
                      Volver arriba
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 text-xs text-[rgba(244,242,237,.55)]">
              Mensaje de confirmación basado en el formulario proporcionado. :contentReference[oaicite:11]{index=11}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
