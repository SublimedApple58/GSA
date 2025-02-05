import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { SiPatreon } from "react-icons/si";

export default function Patreon() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Navbar language={language} />
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Join Our Patreon</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Get exclusive content, training tips, and more by joining our Patreon community.
        </p>
        <Button 
          size="lg"
          className="bg-[#FF424D] hover:bg-[#FF424D]/90"
          onClick={() => window.open('https://www.patreon.com/yourpage', '_blank')}
        >
          <SiPatreon className="mr-2 h-5 w-5" />
          Join on Patreon
        </Button>
      </main>
      <Footer />
    </div>
  );
}
