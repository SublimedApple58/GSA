import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-background z-0" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Umberto Giancola Coaching
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Affidati a chi conosce la ghisa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <img 
            src="/assets/complete_body.png" 
            alt="Professional Coach"
            className="w-[150%] max-w-none ml-[-25%] object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))' }}
          />
        </motion.div>
      </div>
    </section>
  );
}