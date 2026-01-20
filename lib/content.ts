export type Lang = "es" | "en";

export const copy: Record<Lang, any> = {
  es: {
    nav: { services: "Servicios", featured: "Propiedades", why: "Por qué elegirnos", trust: "Confianza", contact: "Contacto" },

    hero: {
      badge: "Diagnóstico inmobiliario integral gratuito",
      headline: "Asesoría inmobiliaria integral en Panamá",
      sub: "Compra, venta, alquiler e inversión con respaldo profesional.",
      cta1: "Obtén tu diagnóstico gratuito ahora",
      cta2: "Hablar por WhatsApp"
    },

    featured: {
      title: "Propiedades destacadas",
      sub: "Explora opciones seleccionadas. Pregunta por disponibilidad y detalles.",
      cta: "Consultar por WhatsApp",
      view: "Ver detalles"
    },

    services: {
      title: "Servicios",
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
        { t: "Enfoque integral", d: "Criterio inmobiliario + apoyo financiero, contable y legal para decisiones mejor sustentadas." },
        { t: "Proceso claro", d: "Comunicación directa y pasos definidos desde el diagnóstico hasta el cierre." },
        { t: "Atención bilingüe", d: "Asesoría para clientes locales y extranjeros en Panamá." }
      ],
      guarantee: "Respaldo: acompañamiento profesional, proceso claro y asesoría responsable en cada etapa."
    },

    trust: {
      title: "Confianza",
      bullets: [
        "Testimonios (placeholder)",
        "Reseñas de Google (placeholder)",
        "Aliados / clientes (placeholder)"
      ]
    },

    contact: {
      title: "Contacto",
      subtitle: "Para poder brindarte una asesoría adecuada indícanos el motivo de tu consulta.",
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
    nav: { services: "Services", featured: "Featured", why: "Why us", trust: "Trust", contact: "Contact" },

    hero: {
      badge: "Free comprehensive real-estate diagnosis",
      headline: "End-to-end real-estate advisory in Panama",
      sub: "Buy, sell, rent & invest with professional support.",
      cta1: "Get your free diagnosis now",
      cta2: "Chat on WhatsApp"
    },

    featured: {
      title: "Featured properties",
      sub: "Handpicked options. Ask for availability and details.",
      cta: "Ask on WhatsApp",
      view: "View details"
    },

    services: {
      title: "Services",
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
        { t: "Integrated approach", d: "Real-estate + financial, accounting and legal support for stronger decisions." },
        { t: "Clear process", d: "Direct communication and defined next steps from diagnosis to closing." },
        { t: "Bilingual support", d: "Advisory for local and international clients in Panama." }
      ],
      guarantee: "Support: professional guidance, clear process and responsible advisory at every stage."
    },

    trust: {
      title: "Trust",
      bullets: [
        "Testimonials (placeholder)",
        "Google reviews (placeholder)",
        "Partners/clients (placeholder)"
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
        "Thank you for reaching out. We received your request and will confirm the next step for your comprehensive diagnosis shortly."
    },

    footer: {
      rights: "All rights reserved."
    }
  }
};
