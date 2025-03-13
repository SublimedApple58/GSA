import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dumbbell, Utensils, Crown } from "lucide-react";
import { Link } from "wouter";

export function ServicesSection() {
  const services = [
    {
      icon: Dumbbell,
      title: "Programmi di Allenamento",
      description: "Programmi personalizzati in base ai tuoi obiettivi",
      link: "/coaching"
    },
    {
      icon: Utensils,
      title: "Alimentazione e Integratori",
      description: "Consulenza nutrizionale e piano integratori",
      link: "/coaching"
    },
    {
      icon: Crown,
      title: "Iscriviti ai nostri canali social",
      description: "Contenuti esclusivi, vivi il bodybuilding a 360 gradi",
      link: "/social"
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
          I Nostri Servizi
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
