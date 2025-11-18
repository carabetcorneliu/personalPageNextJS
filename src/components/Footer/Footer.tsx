import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { SOCIAL_LINKS, type SocialLink } from "../../config/social";
import { type ComponentType } from "react";
import { QuickLinksClient } from "./QuickLinksClient";
import { FooterYear } from "./FooterYear";

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-lg font-medium mb-4">
                <span className="text-primary">Carabet</span>
                <span className="text-muted-foreground">Corneliu</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                • Full Stack Developer •
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                passionate about creating exceptional digital experiences
                through clean code and thoughtful design.
              </p>
              <div className="flex justify-end">
                <Badge variant="secondary">Available for projects</Badge>
              </div>
            </div>

            {/* Quick Links */}
            <QuickLinksClient />

            {/* Connect */}
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(
                  ({
                    id,
                    href,
                    label,
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
                      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                    </a>
                  )
                )}
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  <span
                    style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
                  >
                    <span>moc.liamg</span>
                    <span>@</span>
                    <span>uilenroc.tebarac</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © <FooterYear /> Carabet Corneliu. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
