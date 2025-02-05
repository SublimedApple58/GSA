import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-background z-0" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Coaching Fitness Professionale
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Raggiungi i tuoi obiettivi fitness con una guida esperta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img 
            src="/images/coach.png" 
            alt="Professional Coach"
            className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}