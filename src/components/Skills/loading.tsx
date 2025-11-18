export function SkillsLoading() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 w-32 bg-muted rounded-full mb-2 mx-auto animate-pulse" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[1, 2, 3, 4].map((stat) => (
              <div key={stat} className="bg-card rounded-lg p-6">
                <div className="text-center">
                  <div className="h-8 w-24 bg-muted rounded mb-2 mx-auto animate-pulse" />
                  <div className="h-4 w-full bg-muted rounded mx-auto animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((category) => (
              <div key={category} className="bg-card rounded-lg p-6">
                <div className="h-6 w-24 bg-muted rounded mb-4 animate-pulse" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((skill) => (
                    <div
                      key={skill}
                      className="h-5 w-20 bg-muted rounded-full animate-pulse"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
