export type Lang = "es" | "en";

export const copy: Record<Lang, any> = {
  es: {
    nav: {
      featured: "Propiedades",
      services: "Servicios",
      why: "Por qué elegirnos",
      trust: "Testimonios",
      contact: "Contacto"
    },

    hero: {
      badge: "Diagnóstico inicial (15 min) · Orientación general",
      headline: "Consultoría Inmobiliaria Integral",
      sub:
        "Acompañamiento inmobiliario integral para compra, venta, alquiler y administración de propiedades, con análisis financiero, respaldo legal y soluciones de seguro.",
      cta1: "Agenda tu diagnóstico inicial",
      cta2: "WhatsApp"
    },

    featured: {
      title: "Propiedades destacadas",
      sub:
        "Explora propiedades seleccionadas, acompañamiento personalizado para revisar disponibilidad y detalles.",
      cta: "Consultar por WhatsApp",
      view: "Ver detalles",
      note:
        "Si te interesan estas propiedades destacadas, contáctame; cuento con más oportunidades similares en diferentes zonas de Panamá."
    },

    services: {
      title: "Servicios",
      subtitle:
        "Consultoría Inmobiliaria Integral para que tomes decisiones seguras y bien estructuradas!",
      items: [
        "Compra, venta y alquiler de propiedades.",
        "Administración de inmuebles.",
        "Análisis de mercado y valoración de propiedades.",
        "Acompañamiento estratégico en decisiones inmobiliarias."
      ]
    },

    why: {
      title: "Por qué elegirnos",
      subtitle: "Ventajas claras para tomar decisiones con confianza.",
      items: [
        {
          t: "Enfoque Integral",
          d:
            "Criterio inmobiliario con respaldo financiero, contable y legal, incluyendo gestión administrativa y soluciones de seguros para decisiones bien sustentadas."
        },
        {
          t: "Proceso Claro",
          d:
            "Comunicación directa y pasos definidos desde el diagnóstico hasta el cierre."
        },
        {
          t: "Atención Bilingüe",
          d:
            "Acompañamiento profesional para clientes locales y extranjeros en Panamá."
        }
      ],
      guarantee:
        "Respaldo profesional y acompañamiento integral en cada etapa del proceso inmobiliario."
    },

    trust: {
      title:
        "Testimonios: Historias reales de clientes que han tomado decisiones seguras con nuestro acompañamiento integral.",
      items: [
        {
          name: "Jorge Morales De León",
          role: "Cliente",
          text:
            "Gracias a la experiencia, fue extraordinario el proceso de venta de la vivienda, su orientación, conocimiento, seguridad y confianza, bajo la responsabilidad de la Licenciada Clelia Cubilla, el proceso se logró en un excelente tiempo, su manejo con los clientes deja mucho que decir de su profesionalismo; por esta razón le expreso mi gratitud, por la cual la felicito. Éxitos por tan excelente profesionalismo."
        },
        {
          name: "Liliana Cortes.",
          role: "Cliente",
          text:
            "Clelia me asistió en la venta de un apartamento en El Cangrejo de manera sumamente eficiente. No solo estuvo pendiente de todas las visitas necesarias y me recomendó a los mejores compradores para lograr la mejor venta, sino que también gestionó todos los trámites requeridos con abogados, bancos y entidades en Panamá, además de coordinar los detalles finales de entrega a los compradores, ya que yo no estaba en el país. Sin duda, la recomiendo al 100%."
        },
        {
          name: "Brad Suggs",
          role: "Cliente",
          text:
            "El año pasado, Clelia mostró mi apartamento, encontró arrendatarios confiables y ayudó a preparar el Pent-house para la renta. Su paciencia fue notable y me apoyó en cada paso de la negociación. Hasta este momento no he tenido ningún inconveniente con mis arrendatarios e inclusive ella me ha hecho seguimiento de algo adicional que me pueda ayudar con mi propiedad. Estoy muy agradecido con ella."
        }
      ]
    },

    contact: {
      title: "Contacto",
      subtitle:
        "Diagnóstico inicial de orientación general (15 minutos) enfocado en aspectos inmobiliarios. Para un análisis más profundo, ofrecemos consultorías personalizadas.",
      form: {
        name: "Nombre completo",
        email: "Correo",
        phone: "Teléfono",
        reason: "Motivo principal",
        message: "Cuéntanos un poco más (opcional)",
        send: "Enviar por WhatsApp",
        reasons: ["Compra", "Venta", "Alquiler", "Administración", "Inversión", "Otro"]
      },
      confirm:
        "Gracias por contactarnos. Hemos recibido tu solicitud y en breve te confirmamos el siguiente paso."
    },

    footer: {
      rights: "Todos los derechos reservados."
    }
  },

  en: {
    nav: {
      featured: "Properties",
      services: "Services",
      why: "Why choose us",
      trust: "Testimonials",
      contact: "Contact"
    },

    hero: {
      badge: "Initial diagnosis (15 min) · General guidance",
      headline: "Integral Real Estate Consulting",
      sub:
        "End-to-end support for buying, selling, renting and property management, including financial analysis, legal backing and insurance solutions.",
      cta1: "Schedule your initial diagnosis",
      cta2: "WhatsApp"
    },

    featured: {
      title: "Featured properties",
      sub:
        "Explore selected properties with personalized support to confirm availability and details.",
      cta: "Ask on WhatsApp",
      view: "View details",
      note:
        "If you're interested in these featured properties, contact me; I have more similar opportunities in different areas of Panama."
    },

    services: {
      title: "Services",
      subtitle:
        "Integral real-estate consulting to help you make safe and well-structured decisions.",
      items: [
        "Buying, selling and renting properties.",
        "Property management.",
        "Market analysis and property valuation.",
        "Strategic support for real-estate decisions."
      ]
    },

    why: {
      title: "Why choose us",
      subtitle: "Clear advantages to decide with confidence.",
      items: [
        {
          t: "Integral approach",
          d:
            "Real-estate criteria backed by financial, accounting and legal support, including administrative management and insurance solutions."
        },
        {
          t: "Clear process",
          d:
            "Direct communication and defined steps from diagnosis to closing."
        },
        {
          t: "Bilingual support",
          d:
            "Professional support for local and international clients in Panama."
        }
      ],
      guarantee:
        "Professional backing and integral support at every stage of the real-estate process."
    },

    trust: {
      title:
        "Testimonials: Real stories from clients who made safe decisions with our integral support.",
      items: [
        {
          name: "Jorge Morales De León",
          role: "Client",
          text:
            "Thanks to her experience, the home sale process was extraordinary. Her guidance, knowledge and professionalism made everything efficient and reliable."
        },
        {
          name: "Maria P.",
          role: "Client",
          text:
            "The support was clear and professional. They helped me understand numbers, options and risks before deciding. Transparent and organized."
        },
        {
          name: "Carlos R.",
          role: "Client",
          text:
            "Excellent management and follow-up. Every step was controlled: documentation, validations and coordination. A truly integral approach."
        }
      ]
    },

    contact: {
      title: "Contact",
      subtitle:
        "Initial 15-minute general guidance focused on real-estate topics. For deeper analysis, we offer personalized consulting sessions.",
      form: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        reason: "Main reason",
        message: "Tell us more (optional)",
        send: "Send via WhatsApp",
        reasons: ["Buying", "Selling", "Renting", "Management", "Investing", "Other"]
      },
      confirm:
        "Thank you. We received your request and will confirm the next step shortly."
    },

    footer: {
      rights: "All rights reserved."
    }
  }
};
