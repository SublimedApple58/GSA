import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const transformations = [
    "/assets/transformations/test1.jpeg",
    "/assets/transformations/test2.jpeg",
    "/assets/transformations/test3.jpeg",
    "/assets/transformations/test4.jpeg",
    "/assets/transformations/test5.jpeg",
    "/assets/transformations/test6.jpeg",
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
          Trasformazioni
        </motion.h2>

        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {transformations.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4]">
                        <img
                          src={image}
                          alt={`Trasformazione ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
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