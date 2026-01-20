"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { copy, type Lang } from "@/lib/content";

export default function Landing() {
  const [lang, setLang] = useState<Lang>("es");
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <main>
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero lang={lang} t={t} />

      <FeaturedProperties lang={lang} t={t} />

      <div className="container-pad">
        <div className="my-6 h-px w-full brand-line opacity-70" />
      </div>

      <Services t={t} />
      <WhyUs t={t} />
      <Trust t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
