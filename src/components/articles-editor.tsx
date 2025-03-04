import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useFetch } from "../useFetch";
import { Navbar } from "./navbar";

export function ArticlesEditor(): React.ReactElement {
    const [authorized, setAuthorized] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (error) {
            setSuccess(false);
            setTimeout(() => {
                setError(false);
            }, 4000);
        }
    }, [error]);

    useEffect(() => {
        if (success) {
            setError(false);
            setTimeout(() => {
                setSuccess(false);
            }, 4000);
        }
    }, [success]);

    const credentials = {
        username: "UmbertoClassic123",
        password: "vusscujo"
    };

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!title || !description || !date){
            setError(true);
            return
        }
        
        const response = await useFetch({
            url: "https://gsa-server.onrender.com/articles",
            method: "POST",
            data: { title, description, date }
        });

        if (response.status) {
            setSuccess(true);
            setTitle("");
            setDescription("");
            setDate("");
        } else {
            setError(true);
        }
    };

    return (
        <>
            <Navbar/>
            <div className="container mx-auto px-4 py-8" style={{marginTop: "80px"}}>
                {error && (
                    <div className="bg-red-500 text-white text-center py-2 rounded-md mb-4">
                        Errore di compilazione
                    </div>
                )}
                {success && (
                    <div className="bg-green-300 text-black text-center py-2 rounded-md mb-4">
                        Articolo salvato con successo!
                    </div>
                )}
                {!authorized ? (
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl">Verifica se sei Umberto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input 
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Username Umberto"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input 
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password prego"
                                    />
                                </div>
                                <Button type="button" className="w-full" onClick={() => {
                                    if (credentials.username === username && credentials.password === password) {
                                        setAuthorized(true);
                                    } else {
                                        setError(true);
                                    }
                                }}>
                                    Accedi all'editor
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                ) : (
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
                                        rows={5}
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Salva Articolo
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </div>
        </>
    );
}