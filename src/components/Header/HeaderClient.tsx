"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  id: string;
}

export function HeaderClient({ navItems }: { navItems: NavItem[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close on ESC + body scroll lock
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isMenuOpen]);

  return (
    <>
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
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Primary"
          className="md:hidden absolute top-16 left-0 right-0 border-t border-border bg-background"
        >
          <div className="py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsMenuOpen(false);
                  const element = document.getElementById(item.id);
                  element?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="cursor-pointer block w-full rounded px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
