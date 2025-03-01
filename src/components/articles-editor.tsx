import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useFetch } from "../useFetch";

export function ArticlesEditor(): React.ReactElement {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // ✅ Previene il refresh della pagina

        const response = await useFetch({
            url: "https://gsa-server.onrender.com/articles",
            method: "POST",
            data: { title, description, date }
        });

        console.log(response.status); // ✅ Ora funziona!

        if (response.status) {
            console.log("Articolo creato con successo!", response.data);
            setTitle("");
            setDescription("");
        } else {
            console.error("Errore:", response.error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
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
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="date">Data</Label>
                            <Input 
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                placeholder="Inserisci la data di oggi"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Descrizione</Label>
                            <Textarea 
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Inserisci la descrizione dell'articolo"
                                rows={5}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Salva Articolo
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
