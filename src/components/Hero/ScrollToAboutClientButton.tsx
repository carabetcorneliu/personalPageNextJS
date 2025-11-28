"use client";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

export default function ScrollToAboutClientButton() {
  return (
    <Link
      to="about"
      smooth="true"
      duration={500}
      offset={-15}
      aria-label="Scroll to About section"
      className="cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors motion-safe:animate-bounce"
      role="button"
      tabIndex={0}
    >
      <span aria-hidden="true" className="flex flex-col items-center">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-6 w-6" />
      </span>
    </Link>
  );
}
