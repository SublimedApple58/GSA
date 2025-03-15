import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useFetch } from "@/useFetch";

interface Article {
    title: string,
    _id: string,
    description: string,
    date: string
  }

interface ArticleEditorFormProps {
    setError: (value: boolean) => void;
    setSuccess: (value: boolean) => void;
    id?: string;
    articles?: Article[];
    refresh: () => void
}


export function ArticleEditorForm({ setError, setSuccess, id, articles, refresh }: ArticleEditorFormProps): React.ReactElement {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const mode: "POST" | "PUT" = id ? "PUT" : "POST" 

    const [article, setArticle] = useState<Article | undefined>(undefined)

    useEffect(() => {
        if (id && articles) {
          const foundArticle = articles.find((a: {_id: string}) => a._id === id);
          setArticle(foundArticle);
        }
      }, [id, articles]);

    useEffect(() => {
        if(article){
            setTitle(article.title);
            setDescription(article.description);
            setDate(article.date);
        }
    }, [article])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !description || !date) {
            setError(true);
            return;
        }
        
        let url: string;
        switch(true){
            case (mode == "POST" && !id): 
                url = "https://gsa-server.onrender.com/articles";
                break;

            case (mode == "PUT" && !!id): 
                url = `https://gsa-server.onrender.com/articles/${id}`
                break;
            
            default: 
                url = "fake_url"
        }

        const response = await useFetch({
            url,
            method: mode,
            data: { title, description, date }
        });

        if (response.status) {
            setSuccess(true);
            setTitle("");
            setDescription("");
            setDate("");
            refresh();
        } else {
            setError(true);
        }
        
    };

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl">Editor Articoli</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Titolo</Label>
                        <Input 
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Inserisci il titolo dell'articolo"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="date">Data</Label>
                        <Input 
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="Inserisci la data di oggi"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Descrizione</Label>
                        <Textarea 
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Inserisci la descrizione dell'articolo"
                            rows={10}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        {mode === "POST" && (
                            <>Crea Articolo</>
                        )}
                        {mode == "PUT" && (
                            <>Modifica Articolo</>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
