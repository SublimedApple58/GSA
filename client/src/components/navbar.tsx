import { Link, useLocation } from "wouter";
import { Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/articles", label: "Articoli" },
    { href: "/coaching", label: "Coaching" },
    { href: "/patreon", label: "Patreon" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <Link href="/" className="mr-8">
            <Dumbbell className="h-8 w-8 text-primary hover:text-primary/80 transition-colors" />
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="relative group"
              >
                <span className={cn(
                  "text-sm font-medium transition-colors",
                  location === item.href 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}>
                  {item.label}
                </span>
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                  location === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}