"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on ESC + body scroll lock
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  }, [isMenuOpen]);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focust:left-4 focus:top-2 focus:z-50 rounded bg-primary px-3 py-1 text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded"
          >
            <span className="text-primary">Carabet</span>
            <span className="text-muted-foreground">Corneliu</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile Primary"
            className="md:hidden border-t border-border bg-background"
          >
            <div className="py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full rounded px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
