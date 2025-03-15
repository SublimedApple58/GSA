import { useFetch } from "@/useFetch";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import truncate from "html-truncate";
import { Button } from "./ui/button";
import { Footer } from "./footer";
import { ArticleEditorForm } from "./article-editor-form";
import { ArrowLeft } from "lucide-react";
import { navigate } from "wouter/use-browser-location";

interface ArticleHandlerProps {
    setError: (value: boolean) => void;
    setSuccess: (value: boolean) => void;
}

export function ArticleHandler({ setError, setSuccess }: ArticleHandlerProps): React.ReactElement {

    interface Article {
        title: string,
        _id: string,
        description: string,
        date: string
      }
    
      const [articles, setArticles] = useState<Article[] | undefined>(undefined);
      const [editing, setOpenForm ] = useState<boolean>(false);
      const [id, setId] = useState<string | undefined>(undefined);
    
      const fetchArticles = async () => {
        const articlesQuery = await useFetch({ url: "https://gsa-server.onrender.com/articles" });
  
        if (articlesQuery.status) {
          setArticles(articlesQuery.data as Article[]);
        }
      };

      useEffect(() => { 
        fetchArticles();
      }, []);

    const deleteArticle = async (id: string) => {
        const response = await useFetch({ url: `https://gsa-server.onrender.com/articles/${id}`, method: "DELETE" })
    
        if(response.status){
            setSuccess(true);
            fetchArticles();
        }
      }


    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8">Area admin</h1>
                {editing && (
                    <>
                        <Button variant="outline" size="sm" className="mb-5" onClick={() => {
                            setOpenForm (false)
                            setId(undefined)
                        }}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Scegli altro articolo
                        </Button>
                        <ArticleEditorForm setSuccess={setSuccess} setError={setError} id={id} articles={articles} refresh={fetchArticles}/>
                    </>
                )}
                {!editing && !id && (
                    <>
                        <Button variant="outline" size="sm" className="mb-5" onClick={() => {
                            setOpenForm(true);
                            setId(undefined)
                        }}>
                         Crea nuovo articolo
                        </Button>
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
                                        <div className="flex gap-4 p-6 pt-0 mt-auto">
                                            <Button variant="outline" className="flex-1" onClick={() => {
                                                setId(article._id);
                                                setOpenForm (true);
                                            }}>
                                                Modifica
                                            </Button>
                                            <Button variant="destructive" className="flex-1" onClick={async () => deleteArticle(article._id)}>
                                                Elimina
                                            </Button>
                                        </div>
                                    </Card>
                                )
                            })}
                        </div>
                    </>
                )}
            </main>
            <Footer />
        </div>
    )
}