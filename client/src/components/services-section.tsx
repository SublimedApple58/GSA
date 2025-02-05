import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dumbbell, Utensils, Trophy } from "lucide-react";
import { translations, Language } from "@/lib/translations";

interface Props {
  language: Language;
}

export function ServicesSection({ language }: Props) {
  const t = translations[language];

  const services = [
    {
      icon: Dumbbell,
      title: t.services.training,
      description: "Personalized training programs tailored to your goals"
    },
    {
      icon: Utensils,
      title: t.services.nutrition,
      description: "Expert nutrition guidance and supplement recommendations"
    },
    {
      icon: Trophy,
      title: t.services.competition,
      description: "Professional competition preparation and coaching"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t.services.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card hover:bg-card/80 transition-colors">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
