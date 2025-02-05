import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Target, Trophy } from "lucide-react";

export default function Coaching() {
  const [language, setLanguage] = useState<Language>("en");
  const features = [
    {
      icon: Dumbbell,
      title: "Allenamento Personalizzato",
      description: "Programmi su misura per i tuoi obiettivi e il tuo livello"
    },
    {
      icon: Target,
      title: "Supporto Costante",
      description: "Monitoraggio continuo dei progressi e aggiustamenti del programma"
    },
    {
      icon: Trophy,
      title: "Risultati Garantiti",
      description: "Metodologia comprovata per trasformazioni reali e durature"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Navbar language={language} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-background z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                src="/assets/foto1.png"
                alt="GSA Logo"
                className="w-48 h-48 mb-8"
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Giancola Strength Academy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-muted-foreground mb-8"
              >
                La tua trasformazione inizia qui
              </motion.p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background">
                    <CardContent className="p-6 text-center">
                      <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Pronto a Iniziare?</h2>
            <Button size="lg" className="text-lg px-8">
              Contattaci Ora
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}