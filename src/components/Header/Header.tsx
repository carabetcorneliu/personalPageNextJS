import { HeaderClient } from "./HeaderClient";

// Server Component - renders immediately
export default function Header() {
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 rounded bg-primary px-3 py-1 text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded"
          >
            <span className="text-primary">Carabet</span>
            <span className="text-muted-foreground">Corneliu</span>
          </a>

          {/* Desktop Navigation - Static */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded scroll-smooth"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Client-only mobile menu */}
          <HeaderClient navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
