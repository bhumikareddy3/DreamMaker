import { useBrandStore } from "@/store/brand-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Lightbulb, Palette, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PreviewPage() {
  const { brandData } = useBrandStore();
  const navigate = useNavigate();

  if (!brandData) {
    return (
      <section className="container flex flex-col items-center justify-center gap-6 py-10 text-center">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Nothing to Preview Yet
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Go back to the homepage to generate a brand kit first.
          </p>
          <Button size="lg" className="mt-4" onClick={() => navigate("/")}>
            Go to Homepage
          </Button>
        </div>
      </section>
    );
  }

  const { brandName, tagline, description, colorPalette, logoConcept, landingPageCopy } = brandData;

  return (
    <section className="container grid items-start gap-8 pb-12 pt-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">{brandName}</h1>
        <p className="mt-2 text-2xl text-muted-foreground">{tagline}</p>
      </div>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Core Identity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            Color Palette
          </CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-4">
          {colorPalette.map((color) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-lg border"
                style={{ backgroundColor: color }}
              />
              <p className="text-sm font-mono text-muted-foreground">{color}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Logo Concept
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{logoConcept}</p>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Landing Page Copy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold">{landingPageCopy.headline}</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {landingPageCopy.features.map((feature, index) => (
              <div key={index}>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="mt-1 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          <Button size="lg" className="w-full sm:w-auto">{landingPageCopy.cta}</Button>
        </CardContent>
      </Card>
    </section>
  );
}
