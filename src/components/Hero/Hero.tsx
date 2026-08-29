import { HeroClientButtons } from "./HeroClientButtons";
import { Badge } from "@/components/ui/badge";
import { SOCIAL_LINKS, type SocialLink } from "@/config/social";
import { type ComponentType } from "react";
import ScrollToAboutClientButton from "./ScrollToAboutClientButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Open to roles · Remote · Shipping with AI agents{" "}
            <span className="line-through" aria-hidden>
              🦞
            </span>
            <span className="sr-only">On-site not preferred</span>
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
            Full Stack{" "}
            <span className="block text-primary">Developer</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-muted-foreground">
            I build fast, accessible web apps with{" "}
            <span className="text-primary">Next.js</span>,
            <span className="text-primary"> Node.js</span> and{" "}
            <span className="text-primary">Tailwind</span>.
          </p>

          <HeroClientButtons />

          <nav
            aria-label="Social Links"
            className="flex items-center justify-center gap-6"
          >
            {SOCIAL_LINKS.map(
              ({
                id,
                label,
                href,
                icon: Icon,
                rel,
              }: SocialLink & {
                icon?: ComponentType<{ className?: string }>;
              }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel={rel}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{label}</span>
                  {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      <ScrollToAboutClientButton />
    </section>
  );
}
