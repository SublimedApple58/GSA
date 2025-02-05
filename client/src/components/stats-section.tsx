import { motion } from "framer-motion";
import { translations, Language } from "@/lib/translations";

interface Props {
  language: Language;
}

export function StatsSection({ language }: Props) {
  const t = translations[language];

  const stats = [
    { value: "10+", label: t.stats.experience },
    { value: "500+", label: t.stats.clients },
    { value: "20+", label: t.stats.competitions }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
