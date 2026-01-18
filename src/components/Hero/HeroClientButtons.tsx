"use client";
import { Button } from "@/components/ui/button";

export function HeroClientButtons() {
  const scrollToSection = (sectionId: string, focusElementId?: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (focusElementId) {
      setTimeout(() => {
        document.getElementById(focusElementId)?.focus();
      }, 600); // Wait for scroll to complete
    }
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
      <Button asChild size="lg"
        onClick={() => scrollToSection("projects")}
        className="cursor-pointer">
        <a href="#projects">View My Work</a>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        onClick={() => scrollToSection("contact", "name")}
        className="cursor-pointer"
      >
        <a href="#contact">Get In Touch</a>
      </Button>
    </div>
  );
}
