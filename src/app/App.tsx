import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ProjectsLoading } from "@/components/Projects";
import { Toaster } from "@/components/ui/sonner";
import { AboutLoading } from "@/components/About/loading";
import { SkillsLoading } from "@/components/Skills/loading";
import { ContactLoading } from "@/components/Contact/loading";
import { FooterLoading } from "@/components/Footer/loading";

// Import Hero and Header directly - they're critical for FCP/LCP
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Dynamically import components with loading fallback
const About = dynamic(() => import("@/components/About/About"), {
  loading: () => <AboutLoading />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SkillsLoading />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <ProjectsLoading />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <ContactLoading />,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <FooterLoading />,
});

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
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
