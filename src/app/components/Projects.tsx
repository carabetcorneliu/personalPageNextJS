"use client";

import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "@/types/project";

export function Projects() {
  const projects: Project[] = [
    {
      title: "Chef Claude App",
      description:
        "A cooking assistant, on top of Generative AI API for shortening the interval - from counting the ingredients to deciding what to cook.",
      image: "/img/projects/chef-claude-project2.jpg",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Markdown",
        "Context API",
        "Mistral API",
        "Hugging Face models",
        "Vite",
        "EsLint",
        "Prettier",
      ],
      demoLink: "https://chef-claude-recipe.netlify.app/",
      githubLink: "https://github.com/carabetcorneliu/Chef-Claude-App",
    },
    {
      title: "Task Management App",
      description:
        "A lightweight and feature-rich task management tool. Built with TypeScript for type safety and scalability, the app demonstrates front-end development best practices and provides a polished user experience.",
      image: "/img/projects/todo-project2.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Kinde"],
      demoLink: "https://todo-app-orpin-eta-35.vercel.app/",
      githubLink: "https://github.com/carabetcorneliu/ToDo-App-Portfolio",
    },
    {
      title: "Personal Page",
      description:
        "A responsive website built with React and Tailwind CSS. Features smooth animations and optimized performance. Built around skill presentation, projects and contacts",
      image: "/img/projects/personal-page-project.jpg",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Netlify",
      ],
      demoLink: "https://carabetcorneliu.netlify.app/",
      githubLink: "https://github.com/carabetcorneliu/personalPage",
    },
  ];

  const handleViewGitHub = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Add any additional logic here, e.g., analytics
    window.open("/go/github", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Work
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6">Things I've Built</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that highlight my skills in
              front-end and full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-3 w-full">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/go/github"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleViewGitHub}
              className="inline-block"
            >
              <Button variant="outline" size="lg">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
