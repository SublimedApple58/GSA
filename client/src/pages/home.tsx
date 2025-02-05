import { useState } from "react";
import { type Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Navbar language={language} />
      <HeroSection language={language} />
      <ServicesSection language={language} />
      <StatsSection language={language} />
      <Footer />
    </div>
  );
}