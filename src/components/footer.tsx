import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.instagram.com/umbertogiancola?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="umbertogiancola@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center mt-6 text-sm text-muted-foreground">
          © 2024 House of Muscle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}