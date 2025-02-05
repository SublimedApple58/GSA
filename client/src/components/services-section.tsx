import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dumbbell, Utensils, Crown } from "lucide-react";
import { translations, Language } from "@/lib/translations";
import { Link } from "wouter";

interface Props {
  language: Language;
}

export function ServicesSection({ language }: Props) {
  const t = translations[language];

  const services = [
    {
      icon: Dumbbell,
      title: t.services.training,
      description: "Personalized training programs tailored to your goals",
      link: "/coaching"
    },
    {
      icon: Utensils,
      title: t.services.nutrition,
      description: "Expert nutrition guidance and supplement recommendations",
      link: "/coaching"
    },
    {
      icon: Crown,
      title: "Exclusive Content",
      description: "Join our Patreon for exclusive training content and tips",
      link: "/patreon"
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
            <Link key={index} href={service.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="cursor-pointer"
              >
                <Card className="bg-card hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}