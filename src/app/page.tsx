import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsLoading(true);

    // Simulate an API call. In a real app, you'd fetch('/api/generate').
    // The response could then be stored in a shared state or passed to the preview page.
    console.log("Simulating generation for prompt:", prompt);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsLoading(false);
    // Navigate to the preview page after generation
    navigate("/preview");
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
        <Button
          size="lg"
          className="w-full text-lg font-semibold"
          onClick={handleGenerate}
          disabled={isLoading || !prompt}
        >
          {isLoading && (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          )}
          Generate My Brand
        </Button>
      </div>
    </section>
  );
}
