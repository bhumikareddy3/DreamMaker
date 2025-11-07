import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Bot } from "lucide-react";

const Navbar = () => {
  const linkClasses = "transition-colors hover:text-primary";
  const activeLinkClasses = "text-primary font-semibold";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavLink to="/" className="mr-6 flex items-center space-x-2">
          <Bot className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            AI Generator
          </span>
        </NavLink>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${activeLinkClasses} ${linkClasses}` : linkClasses
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/generate"
            className={({ isActive }) =>
              isActive ? `${activeLinkClasses} ${linkClasses}` : linkClasses
            }
          >
            Generate
          </NavLink>
          <NavLink
            to="/preview"
            className={({ isActive }) =>
              isActive ? `${activeLinkClasses} ${linkClasses}` : linkClasses
            }
          >
            Preview
          </NavLink>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
