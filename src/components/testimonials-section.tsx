import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function TestimonialsSection() {
  const transformations = Array.from({ length: 21 }, (_, i) => 
    `/assets/transformations/test${i + 1}.jpeg`
  );  

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
            loop: true,
          }}
          // Su mobile lo slider sarà più stretto (max-w-[280px]) e da sm in su avrà una larghezza maggiore (max-w-4xl)
          className="w-full max-w-[280px] sm:max-w-4xl mx-auto"
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
                          // Su mobile usa object-contain, da sm in su object-cover
                          className="w-full h-full object-contain sm:object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex" />
          <CarouselNext className="flex" />
        </Carousel>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Pronto a trasformare il tuo fisico? Inizia il tuo percorso con noi.
          </p>
          <Link href="/coaching">
            <Button size="lg" className="text-lg px-8">
              Scopri il Coaching
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
