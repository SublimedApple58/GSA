import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { Language } from "@/lib/translations";

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageToggle({ language, setLanguage }: Props) {
  const toggle = useCallback(() => {
    setLanguage(language === "en" ? "it" : "en");
  }, [language, setLanguage]);

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggle}
      className="fixed top-4 right-4 z-50"
    >
      {language === "en" ? "🇮🇹" : "🇬🇧"}
    </Button>
  );
}
