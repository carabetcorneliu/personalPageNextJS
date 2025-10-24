"use client";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown } from "lucide-react";
import { SOCIAL_LINKS } from "../config/social";

export function Hero() {
  const handleClickGetInTouch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    const nameInput = document.getElementById("name");
    nameInput?.focus();
  };
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Open to roles · Remote/
            <span className="line-through" aria-hidden="true">
              On-site
            </span>
            <span className="sr-only">On-site not preferred</span>
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
            Full Stack
            <span className="block text-primary">Developer</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-muted-foreground">
            I build fast, accessible web apps with{" "}
            <span className="text-primary">React</span>,
            <span className="text-primary"> Node.js</span> and{" "}
            <span className="text-primary">Tailwind</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              onClick={handleClickGetInTouch}
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <nav
            aria-label="Social Links"
            className="flex items-center justify-center gap-6"
          >
            {SOCIAL_LINKS.map(({ id, label, href, icon: Icon, rel }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel={rel}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">{label}</span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors motion-safe:animate-bounce"
      >
        <ArrowDown className="h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  );
}
