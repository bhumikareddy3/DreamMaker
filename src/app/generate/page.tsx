import { Button } from "@/components/ui/button";

export default function GeneratePage() {
  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-full max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Generate Content
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Enter a prompt below to generate content with AI. Be as descriptive as
          possible for the best results.
        </p>
        <div className="w-full">
          <textarea
            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="e.g., Write a short blog post about the benefits of learning React."
          />
        </div>
        <Button size="lg">Generate</Button>
      </div>
    </section>
  );
}
