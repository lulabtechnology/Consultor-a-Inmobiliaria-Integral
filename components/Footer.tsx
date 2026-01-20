import { links } from "@/lib/links";
import { Instagram, Facebook, Linkedin, Phone, Mail, Globe } from "lucide-react";

export default function Footer({ t }: { t: any }) {
  return (
    <footer className="footer-bg">
      <div className="h-px w-full gold-line opacity-70" />
      <div className="container-pad py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xl font-semibold tracking-tight">Celia Cubilla</div>
            <div className="mt-1 text-sm text-[rgba(214,180,106,.95)]">Asesora Inmobiliaria</div>
            <p className="mt-4 text-sm leading-6 text-[rgba(244,242,237,.74)]">
              Consultoría inmobiliaria integral para clientes locales y extranjeros en Panamá.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="text-sm font-semibold text-[rgba(244,242,237,.90)]">Contacto</div>
            <div className="mt-3 space-y-2 text-sm text-[rgba(244,242,237,.72)]">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[rgba(214,180,106,.95)]" />
                {links.phoneDisplay}
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[rgba(214,180,106,.95)]" />
                {links.email}
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-[rgba(214,180,106,.95)]" />
                {links.website}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-[rgba(244,242,237,.90)]">Redes</div>
            <div className="mt-3 flex flex-wrap gap-3">
              <a className="btn btn-ghost px-3 py-2 text-xs" href={links.instagram} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a className="btn btn-ghost px-3 py-2 text-xs" href={links.facebook} target="_blank" rel="noreferrer">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a className="btn btn-ghost px-3 py-2 text-xs" href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-[rgba(214,180,106,.18)]" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-[rgba(244,242,237,.55)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Consultoría Inmobiliaria Integral. {t.footer.rights}</div>
          <div>Diseño: paleta charcoal + gold inspirada en tu tarjeta.</div>
        </div>
      </div>
    </footer>
  );
}
