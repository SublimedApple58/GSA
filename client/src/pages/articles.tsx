import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";

export default function Articles() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Navbar language={language} />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Fitness Articles</h1>
        <div className="grid gap-8">
          {/* Article cards will be added here */}
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
