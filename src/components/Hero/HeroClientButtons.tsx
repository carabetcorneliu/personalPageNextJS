"use client";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export function HeroClientButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
      <Button asChild size="lg">
        <Link
          to="projects"
          smooth="true"
          duration={500}
          offset={-15}
          className="cursor-pointer"
        >
          View My Work
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        onClick={() => {
          setTimeout(() => {
            document.getElementById("name")?.focus();
          }, 1000);
        }}
      >
        <Link
          to="contact"
          smooth="true"
          duration={500}
          offset={-15}
          className="cursor-pointer"
        >
          Get In Touch
        </Link>
      </Button>
    </div>
  );
}
