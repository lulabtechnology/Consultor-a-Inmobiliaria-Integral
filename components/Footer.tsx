import { links } from "@/lib/links";
import { Mail, Phone, Globe, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer({ t }: { t: any }) {
  return (
    <footer className="footer-bg">
      <div className="h-px w-full gold-line opacity-60" />

      <div className="container-pad py-10">
        <div className="card p-6">
          <div className="text-lg font-semibold text-[rgba(244,242,237,.95)]">
            Celia Cubilla
          </div>
          <div className="mt-1 text-sm text-[rgba(214,180,106,.95)]">
            Asesora Inmobiliaria
          </div>

          <p className="mt-4 text-sm leading-6 text-[rgba(244,242,237,.74)]">
            Consultoría inmobiliaria integral para clientes locales y extranjeros en Panamá.
          </p>

          {/* Contacto simple */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              className="btn btn-ghost w-full px-3 py-3 text-xs"
              href={links.wa}
              target="_blank"
              rel="noreferrer"
            >
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

          {/* Redes (simple, en una sola fila) */}
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

        <div className="mt-6 text-center text-xs text-[rgba(244,242,237,.55)]">
          © {new Date().getFullYear()} Consultoría Inmobiliaria Integral. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
