import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";

export default function Coaching() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Navbar language={language} />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Professional Coaching</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">
            Transform your physique and reach your fitness goals with professional guidance.
          </p>
          {/* Coaching details will be added here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
