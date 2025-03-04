import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/articles", label: "Articoli" },
    { href: "/coaching", label: "Coaching" },
    { href: "/social", label: "Social" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between space-x-8">
          <a href="/">
            <img 
              src="/assets/icon_umberto.png"
              alt="Logo"
              className="h-16 w-16 object-contain rounded-full bg-background p-1"
            />
          </a>
          <div className="flex items-center space-x-12">
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