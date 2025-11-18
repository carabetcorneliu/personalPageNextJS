"use client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function ViewProjectsOnGithubButton() {
  return (
    <div className="text-center mt-20">
      <Button variant="outline" size="lg" asChild>
        <a href="/go/github" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5 mr-2" />
          View All Projects on GitHub
        </a>
      </Button>
    </div>
  );
}
