"use client";
import { ArrowDown } from "lucide-react";

export default function ScrollToAboutClientButton() {
  const handleScrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={handleScrollToAbout}
      aria-label="Scroll to About section"
      className="cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors motion-safe:animate-bounce"
    >
      <span aria-hidden="true" className="flex flex-col items-center">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-6 w-6" />
      </span>
    </button>
  );
}
