import { Link } from "wouter";
import { translations, Language } from "@/lib/translations";
import { Dumbbell } from "lucide-react";

interface Props {
  language: Language;
}

export function Navbar({ language }: Props) {
  const t = translations[language];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">House of Muscle</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/articles" className="text-muted-foreground hover:text-primary transition-colors">
              Articles
            </Link>
            <Link href="/coaching" className="text-muted-foreground hover:text-primary transition-colors">
              Coaching
            </Link>
            <Link href="/patreon" className="text-muted-foreground hover:text-primary transition-colors">
              Patreon
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
