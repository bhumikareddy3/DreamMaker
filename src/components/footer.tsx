import { Bot } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Dualite Alpha. © 2025
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          The source code is available on your local machine.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
