import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function Social() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="w-full h-[500px] mb-12 relative bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Il Nostro Mondo</h2>
              <p className="text-lg opacity-90">
                Entra nel mondo del bodybuilding con noi attraverso i nostri contenuti esclusivi
              </p>
            </div>
          </div>
          {/* Video placeholder - sostituire src con il video effettivo */}
          <div className="absolute bottom-7 left-7">
            <img 
              src="/assets/icon_umberto.png"
              alt="Logo"
              className="h-20 w-20 object-contain rounded-full p-1"
            />
          </div>
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-4">I Nostri Social</h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Entra a far parte della nostra community e scopri contenuti esclusivi dedicati al bodybuilding e al fitness
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <FaYoutube className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-semibold">YouTube</h2>
            </div>
            <CardContent className="p-0 space-y-4">
              <p className="text-muted-foreground">
                Sul nostro canale YouTube troverai:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Video di preparazione per gare di bodybuilding</li>
                <li>Allenamenti completi commentati</li>
                <li>Podcast sul bodybuilding e fitness</li>
                <li>Tutorial tecnici sugli esercizi</li>
                <li>Consigli sulla nutrizione sportiva</li>
              </ul>
              <Button 
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 mt-6"
                onClick={() => window.open('https://www.youtube.com', '_blank')}
              >
                <FaYoutube className="mr-2 h-5 w-5" />
                Iscriviti al Canale
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <FaInstagram className="w-8 h-8 text-pink-600" />
              <h2 className="text-2xl font-semibold">Instagram</h2>
            </div>
            <CardContent className="p-0 space-y-4">
              <p className="text-muted-foreground">
                Sul nostro profilo Instagram trovi:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Aggiornamenti quotidiani</li>
                <li>Stories dai nostri allenamenti</li>
                <li>Tips & Tricks rapidi</li>
                <li>Contenuti motivazionali</li>
                <li>Dietro le quinte delle competizioni</li>
              </ul>
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-6"
                onClick={() => window.open('https://www.instagram.com/umbertogiancola?igsh=MXVnNmhqOGJoOG01dA==', '_blank')}
              >
                <FaInstagram className="mr-2 h-5 w-5" />
                Seguici su Instagram
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}