import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, AlertCircle } from "lucide-react";
import { generateBrandKit } from "@/lib/gemini";
import { useBrandStore } from "@/store/brand-store";

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setBrandData } = useBrandStore();

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setError(null);

    try {
      const result = await generateBrandKit(prompt);
      setBrandData(result);
      navigate("/preview");
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container flex flex-col items-center justify-center gap-8 pb-8 pt-6 md:py-12">
      <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Reimagine
          </span>{" "}
          Your Brand Identity
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Turn your startup idea into a complete brand kit with a single click.
          Describe your vision, and let our AI craft the rest.
        </p>
      </div>
      <div className="w-full max-w-2xl space-y-4">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., An AI fitness coach for busy professionals that creates personalized workout plans."
          className="min-h-[120px] resize-none p-4 text-base"
        />
        {error && (
          <div className="flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
          </div>
        )}
        <Button
          size="lg"
          className="w-full text-lg font-semibold"
          onClick={handleGenerate}
          disabled={isLoading || !prompt}
        >
          {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
          Generate My Brand
        </Button>
      </div>
    </section>
  );
}
