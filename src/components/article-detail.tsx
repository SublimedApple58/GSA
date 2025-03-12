
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";
import { Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useFetch } from "@/useFetch";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ArticleDetail({
    id
}: {
    id?: string
}) {
  const [article, setArticle] = useState<any>(null);
  const [, navigate] = useLocation();

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

  useEffect(() => {
    if (id) {
      const foundArticle = articles.find((a: {_id: string}) => a._id === id);
      setArticle(foundArticle);
    }
  }, [id, articles]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-16">
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <div className="flex justify-start mb-6">
            <Button variant="outline" size="sm" onClick={() => navigate("/articles")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Torna agli articoli
            </Button>
          </div>
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold">Articolo non trovato</h2>
            <p className="text-muted-foreground mt-2">L'articolo che stai cercando non esiste.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex justify-start mb-6">
          <Button variant="outline" size="sm" onClick={() => navigate("/articles")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Torna agli articoli
          </Button>
        </div>
        <Card className="overflow-hidden border-none shadow-xl">
          <CardHeader className="bg-gradient-to-br from-purple-900 to-blue-800 text-white">
            <CardTitle className="text-3xl md:text-4xl font-bold">{article.title}</CardTitle>
            <div className="text-sm opacity-75 mt-4">Pubblicato il {article.date}</div>
          </CardHeader>
          <CardContent className="p-8">
            <div 
              className="prose-lg dark:prose-invert max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: article.description }}
            />
          </CardContent>
        </Card>
        
        <div className="flex justify-start mt-6">
          <Button variant="outline" size="sm" onClick={() => navigate("/articles")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Torna agli articoli
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
