import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center mt-6 text-sm text-muted-foreground">
          © 2024 House of Muscle. All rights reserved.
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Pronto a trasformare il tuo fisico? Inizia il tuo percorso con noi.
          </p>
          <Link href="/coaching">
            <Button variant="default" size="lg">
              Scopri il Coaching
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}