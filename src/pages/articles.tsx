import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/useFetch";
import truncate from "html-truncate";

export default function Articles() {

  interface Article {
    title: string,
    _id: string,
    description: string,
    date: string
  }

  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesQuery = await useFetch({ url: "https://gsa-server.onrender.com/articles" });

      if (articlesQuery.status) {
        setArticles(articlesQuery.data as Article[]);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Fitness Articles</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles?.slice().reverse().map((article: any, i: number) => {
            return (
              <Card className="flex flex-col" key={i}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: truncate(article.description, 200),
                    }}
                  ></div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full"  onClick={() => window.location.href = `/article?id=${article._id}`}>
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
