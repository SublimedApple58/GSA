import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { translations, Language } from "@/lib/translations";

interface Props {
  language: Language;
}

export function TestimonialsSection({ language }: Props) {
  const t = translations[language];
  
  // Example testimonials data
  const testimonials = [
    {
      beforeImage: "/images/transformations/before1.jpg",
      afterImage: "/images/transformations/after1.jpg",
      name: "Marco B.",
      duration: "6 mesi"
    },
    {
      beforeImage: "/images/transformations/before2.jpg",
      afterImage: "/images/transformations/after2.jpg",
      name: "Giovanni R.",
      duration: "8 mesi"
    },
    {
      beforeImage: "/images/transformations/before3.jpg",
      afterImage: "/images/transformations/after3.jpg",
      name: "Luca M.",
      duration: "12 mesi"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Trasformazioni dei Nostri Clienti
        </motion.h2>

        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background">
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="relative aspect-square">
                            <img
                              src={testimonial.beforeImage}
                              alt="Prima"
                              className="rounded-lg object-cover w-full h-full"
                            />
                            <span className="absolute top-2 left-2 bg-background/80 px-2 py-1 rounded text-sm">
                              Prima
                            </span>
                          </div>
                          <div className="relative aspect-square">
                            <img
                              src={testimonial.afterImage}
                              alt="Dopo"
                              className="rounded-lg object-cover w-full h-full"
                            />
                            <span className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded text-sm">
                              Dopo
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Trasformazione in {testimonial.duration}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
