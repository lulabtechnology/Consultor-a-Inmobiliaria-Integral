import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consultoría Inmobiliaria Integral | Panamá",
  description:
    "Acompañamos personas e inversionistas locales y extranjeros en la compra, venta, alquiler e inversión inmobiliaria en Panamá, con asesoría financiera, contable y legal.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Consultoría Inmobiliaria Integral | Panamá",
    description:
      "Gestión inmobiliaria integral para decisiones seguras y bien estructuradas. Diagnóstico inmobiliario integral gratuito.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
