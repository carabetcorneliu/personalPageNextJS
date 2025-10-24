"use client";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Javascript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "MongoDB"],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "VSCode / Windsurf",
        "Git & GitHub",
        "Postman",
        "Vercel",
        "Jest",
        "Kinde",
        "Netlify",
      ],
    },
    {
      title: "Design",
      skills: ["Figma", "Photoshop", "Illustrator", "AutoCAD"],
    },
  ];

  const highlights = [
    {
      title: "18+ Months",
      description: "Hands-on Full-Stack Development Experience",
    },
    {
      title: "10+ Projects",
      description: "Personal and Learning Projects Delivered",
    },
    {
      title: "Focused on Quality",
      description: "Clean Code & Usable Interfaces",
    },
    {
      title: "Continuous Learning",
      description: "Keeping Up with Modern Web Development",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Skills & Expertise
            </Badge>
            <h2 id="skills" className="sr-only">
              Skills
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl md:text-3xl font-medium text-primary mb-2">
                    {highlight.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="mr-2 mb-2"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
