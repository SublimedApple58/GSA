export const useFetch = async <T>({
  url,
  method = "GET",
  data,
}: {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: T;
}): Promise<{ status: boolean; data?: T; error?: string }> => {
  try {
    const options: RequestInit = {
      method,
      headers: { "Content-Type": "application/json" },
      body: method === "POST" || method === "PUT" ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Errore nella richiesta");

    const jsonData: T = await response.json();
    return { status: true, data: jsonData };
  } catch (error) {
    return { status: false, error: (error as Error).message };
  }
};
