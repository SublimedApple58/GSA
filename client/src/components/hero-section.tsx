import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@/lib/translations";

interface Props {
  language: Language;
}

export function HeroSection({ language }: Props) {
  const t = translations[language];

  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-background z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          {t.hero.subtitle}
        </p>
        <Button size="lg" className="bg-primary text-white">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
}
