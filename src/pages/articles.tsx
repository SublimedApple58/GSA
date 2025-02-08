import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Articles() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Fitness Articles</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Come costruire massa muscolare</CardTitle>
              <CardDescription>15 Gennaio 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">
                Una guida completa su come aumentare la massa muscolare in modo efficace. 
                Scopri i principi fondamentali dell'ipertrofia e le migliori strategie di allenamento.
                L'allenamento per la massa muscolare richiede una combinazione di esercizi composti, 
                alimentazione corretta e recupero adeguato.
              </p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button variant="outline" className="w-full">
                Leggi di più
              </Button>
            </div>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>La guida definitiva al Cutting</CardTitle>
              <CardDescription>12 Gennaio 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">
                Come perdere grasso mantenendo la massa muscolare. Strategie pratiche per una 
                definizione muscolare ottimale. Il periodo di cutting è cruciale per mostrare 
                i risultati del tuo duro lavoro in palestra.
              </p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button variant="outline" className="w-full">
                Leggi di più
              </Button>
            </div>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Nutrizione pre e post workout</CardTitle>
              <CardDescription>10 Gennaio 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">
                L'importanza della nutrizione intorno all'allenamento. Quali nutrienti privilegiare 
                e quando assumerli per massimizzare i risultati. Una corretta strategia nutrizionale 
                può fare la differenza nei tuoi progressi.
              </p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button variant="outline" className="w-full">
                Leggi di più
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
