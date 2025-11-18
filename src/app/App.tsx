import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ProjectsLoading } from "@/components/Projects";
import { HeroLoading } from "@/components/Hero";
import { Toaster } from "@/components/ui/sonner";
import { AboutLoading } from "@/components/About/loading";
import { SkillsLoading } from "@/components/Skills/loading";
import { ContactLoading } from "@/components/Contact/loading";
import { FooterLoading } from "@/components/Footer/loading";

// Dynamically import components with loading fallback
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <div className="h-16 bg-background" />,
  ssr: false,
});

const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <HeroLoading />,
  ssr: true, // Enable SSR - Hero is mostly static with client buttons isolated
});

const About = dynamic(() => import("@/components/About/About"), {
  loading: () => <AboutLoading />,
  ssr: true, // Enable SSR - About is purely static text content
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SkillsLoading />,
  ssr: true, // Enable SSR for static content
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <ProjectsLoading />,
  ssr: true, // Enable SSR - Projects.tsx is static, button is isolated client component
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <ContactLoading />,
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <FooterLoading />,
  ssr: true, // Enable SSR - Footer is mostly static, client parts isolated
});

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-16 bg-background" />}>
        <Header />
      </Suspense>
      <main>
        <Suspense fallback={<div className="h-screen" />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<AboutLoading />}>
          <About />
        </Suspense>
        <Suspense fallback={<SkillsLoading />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<ProjectsLoading />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<ContactLoading />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<FooterLoading />}>
        <Footer />
      </Suspense>
      <Toaster position="top-center" richColors />
    </div>
  );
}
