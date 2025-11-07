export default function HomePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to the AI Content Generator
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Navigate to the "Generate" page to start creating content using AI.
          The "Preview" page will show you the results. This project is set up
          with a modern stack to get you started quickly.
        </p>
      </div>
    </section>
  );
}
