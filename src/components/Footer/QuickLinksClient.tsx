"use client";

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
        {quickLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              const element = document.getElementById(link.id);
              element?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer block text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}
