"use client";
import { Link } from "react-scroll";

export function QuickLinksClient() {
  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <div>
      <h4 className="font-medium mb-4">Quick Links</h4>
      <div className="space-y-2">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            to={link.id}
            smooth={true}
            duration={500}
            offset={-15}
            className="cursor-pointer block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
