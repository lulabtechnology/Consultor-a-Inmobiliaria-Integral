import { links } from "@/lib/links";
import { Mail, Phone, Globe, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer({ t }: { t: any }) {
  return (
    <footer className="footer-bg">
      <div className="h-px w-full gold-line opacity-60" />

      <div className="container-pad py-10">
        {/* Card tipo glass para que la foto SI se vea */}
        <div className="rounded-3xl border border-[rgba(15,23,42,.10)] bg-[rgba(255,255,255,.82)] backdrop-blur-xl p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-700">Consultoría Inmobiliaria Integral</div>

          <div className="mt-2 text-lg font-extrabold text-slate-900">
            Clelia Cubilla
          </div>
          <div className="mt-1 text-sm font-semibold text-[color:var(--brand)]">
            Fundadora-Consultora Inmobiliaria
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Acompañamiento inmobiliario integral para compra, venta, alquiler y administración de propiedades, con análisis financiero, respaldo legal y soluciones de seguro.
          </p>

          {/* Contacto */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a className="btn btn-ghost w-full px-3 py-3 text-xs" href={links.wa} target="_blank" rel="noreferrer">
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>

            <a className="btn btn-ghost w-full px-3 py-3 text-xs" href={`mailto:${links.email}`}>
              <Mail className="h-4 w-4" />
              Email
            </a>

            <a className="btn btn-ghost w-full px-3 py-3 text-xs" href={`https://${links.website}`} target="_blank" rel="noreferrer">
              <Globe className="h-4 w-4" />
              Web
            </a>
          </div>

          {/* Redes */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <a className="btn btn-ghost px-3 py-2 text-xs" href={links.instagram} target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a className="btn btn-ghost px-3 py-2 text-xs" href={links.facebook} target="_blank" rel="noreferrer">
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
            <a className="btn btn-ghost px-3 py-2 text-xs" href={links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-700">
          © {new Date().getFullYear()} Consultoría Inmobiliaria Integral. {t.footer?.rights ?? "Todos los derechos reservados."}
        </div>
      </div>
    </footer>
  );
}
