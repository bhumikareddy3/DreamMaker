export default function PreviewPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Preview Generated Content
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Your generated content will appear here once it's ready.
        </p>
        <div className="mt-4 w-full rounded-lg border bg-muted p-4">
          <p className="text-muted-foreground">
            Waiting for generation...
          </p>
        </div>
      </div>
    </section>
  );
}
