import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "MongoDB"],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git & GitHub",
        "Linux",
        "Docker",
        "Oracle Cloud",
        "Vercel",
        "Netlify",
        "Jest",
        "Postman",
        "Kinde",
      ],
    },
    {
      title: "Design",
      skills: ["Figma", "Photoshop", "Illustrator"],
    },
    {
      title: "AI & Tooling",
      skills: ["Openclaw", "agentic workflows", "multi-agent orchestration", "prompt engineering"],
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

          {/* Quote */}
          <p className="text-muted-foreground italic text-sm">
            "In a time of drastic change it is the learners who inherit the future..."
            <span className="not-italic">— Eric Hoffer</span>
          </p>

          /* {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          </div> */

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
