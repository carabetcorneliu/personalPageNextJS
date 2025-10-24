export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}
