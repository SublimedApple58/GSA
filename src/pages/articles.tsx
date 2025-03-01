import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";
import { Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/useFetch";

export default function Articles() {
  const [language, setLanguage] = useState<Language>("en");

  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesQuery = await useFetch({ url: "https://gsa-server.onrender.com/articles" });

      if (articlesQuery.status) {
        setArticles(articlesQuery.data);
      }
    };

    fetchArticles();
  }, []);
  

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Fitness Articles</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: any, i: number) => {
            return (
              <Card className="flex flex-col" key={i}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">
                    {article.description}
                  </p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full">
                    Leggi di più
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
