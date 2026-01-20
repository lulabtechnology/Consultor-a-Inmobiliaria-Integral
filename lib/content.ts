export type Lang = "es" | "en";

export const brand = {
  name: "Consultoría Inmobiliaria Integral",
  agent: "Celia Cubilla",
  role: "Asesora Inmobiliaria",
  location: "Ciudad de Panamá · Bellavista · Calle 41"
};

export const copy: Record<Lang, any> = {
  es: {
    nav: { services: "Servicios", why: "Por qué elegirnos", trust: "Confianza", contact: "Contacto" },

    hero: {
      badge: "Diagnóstico inmobiliario integral gratuito",
      headline: "Decisiones inmobiliarias seguras, con respaldo integral",
      sub:
        "Acompañamos personas e inversionistas locales y extranjeros en la compra, venta, alquiler e inversión inmobiliaria, con asesoría financiera, contable y legal.",
      cta1: "Solicitar diagnóstico",
      cta2: "Hablar por WhatsApp"
    },

    services: {
      title: "Nuestros Servicios",
      items: [
        "Administración y venta de propiedades",
        "Alquiler de propiedades",
        "Análisis de mercado",
        "Asesoramiento en la compra, alquiler o venta de tu propiedad"
      ]
    },

    why: {
      title: "Por qué elegirnos",
      items: [
        { t: "Enfoque integral real", d: "Unimos criterio inmobiliario con asesoría financiera, contable y legal para decisiones mejor sustentadas." },
        { t: "Claridad y acompañamiento profesional", d: "Proceso claro, comunicación directa y pasos definidos desde el diagnóstico hasta el cierre." },
        { t: "Confianza para clientes locales y extranjeros", d: "Experiencia acompañando inversiones y procesos para Panamá, con enfoque transparente y responsable." }
      ],
      guarantee: "Garantía / respaldo: acompañamiento profesional, proceso claro y asesoría responsable en cada etapa."
    },

    trust: {
      title: "Confianza y presencia digital",
      bullets: [
        "Testimonios (placeholder)",
        "Reseñas de Google (placeholder)",
        "Logos de aliados / clientes (placeholder)",
        "Redes enlazadas: Instagram, Facebook, LinkedIn y WhatsApp Business"
      ]
    },

    contact: {
      title: "Contacto",
      subtitle:
        "Para poder brindarte una asesoría adecuada indícanos el motivo de tu consulta.",
      form: {
        name: "Nombre completo",
        email: "Correo",
        phone: "Teléfono",
        reason: "Motivo principal",
        message: "Cuéntanos un poco más (opcional)",
        send: "Enviar solicitud",
        reasons: ["Compra", "Venta", "Alquiler", "Inversión", "Administración", "Otro"]
      },
      confirm:
        "Gracias por contactarnos. Hemos recibido tu solicitud y en breve te confirmamos el siguiente paso para tu diagnóstico inmobiliario integral"
    },

    footer: {
      rights: "Todos los derechos reservados."
    }
  },

  en: {
    nav: { services: "Services", why: "Why us", trust: "Trust", contact: "Contact" },

    hero: {
      badge: "Free comprehensive real-estate diagnosis",
      headline: "Make confident real-estate decisions with end-to-end support",
      sub:
        "We guide local and international clients through buying, selling, renting, and investing in Panama, backed by financial, accounting, and legal advisory.",
      cta1: "Request diagnosis",
      cta2: "Chat on WhatsApp"
    },

    services: {
      title: "Our Services",
      items: [
        "Property management and sales",
        "Property rentals",
        "Market analysis",
        "Guidance for buying, renting, or selling your property"
      ]
    },

    why: {
      title: "Why choose us",
      items: [
        { t: "Truly integrated approach", d: "Real-estate decisions strengthened with financial, accounting, and legal advisory." },
        { t: "Clarity and professional guidance", d: "Clear process, direct communication, and defined next steps from diagnosis to closing." },
        { t: "Trusted by local & international clients", d: "Transparent, responsible advisory tailored to Panama’s market realities." }
      ],
      guarantee: "Guarantee / support: professional guidance, a clear process, and responsible advisory at every stage."
    },

    trust: {
      title: "Trust signals",
      bullets: [
        "Testimonials (placeholder)",
        "Google reviews (placeholder)",
        "Partner/client logos (placeholder)",
        "Linked social profiles: Instagram, Facebook, LinkedIn and WhatsApp Business"
      ]
    },

    contact: {
      title: "Contact",
      subtitle: "To assist you properly, tell us the reason for your inquiry.",
      form: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        reason: "Main reason",
        message: "Tell us more (optional)",
        send: "Send request",
        reasons: ["Buying", "Selling", "Renting", "Investing", "Management", "Other"]
      },
      confirm:
        "Thank you for reaching out. We received your request and will confirm the next step for your comprehensive real-estate diagnosis shortly."
    },

    footer: {
      rights: "All rights reserved."
    }
  }
};
