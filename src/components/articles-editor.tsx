import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Navbar } from "./navbar";
import { ArticleHandler } from "./article-handler";

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

    return (
        <>
            <Navbar/>
            <div className="container mx-auto px-4 py-8" style={{marginTop: "80px"}}>
                <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center mt-4">
                    {error && (
                        <div className="bg-red-500 text-white text-center py-2 px-4 rounded-md mb-2">
                            Errore con l'operazione
                        </div>
                    )}
                    {success && (
                        <div className="bg-green-300 text-black text-center py-2 px-4 rounded-md mb-2">
                            Operazione andata a buon fine!
                        </div>
                    )}
                </div>
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
                ) : <ArticleHandler setError={setError} setSuccess={setSuccess}/>}
            </div>
        </>
    );
}