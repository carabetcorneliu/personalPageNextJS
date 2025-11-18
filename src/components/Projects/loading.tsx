export function ProjectsLoading() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-8 w-32 bg-muted rounded-full mb-4 mx-auto animate-pulse" />
            <div className="h-12 w-64 bg-muted rounded mb-6 mx-auto animate-pulse" />
            <div className="h-6 w-full max-w-2xl bg-muted rounded mx-auto animate-pulse" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <div className="w-full h-full bg-muted animate-pulse" />
                </div>
                <div className="p-6">
                  <div className="h-6 w-48 bg-muted rounded mb-3 animate-pulse" />
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-muted rounded animate-pulse" />
                    <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-muted rounded animate-pulse w-4/5" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3, 4].map((tag) => (
                      <div
                        key={tag}
                        className="h-5 w-16 bg-muted rounded-full animate-pulse"
                      />
                    ))}
                  </div>
                  <div className="flex gap-3 w-full">
                    <div className="flex-1 h-8 bg-muted rounded animate-pulse" />
                    <div className="flex-1 h-8 bg-muted rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Projects Button */}
          <div className="text-center mt-20">
            <div className="inline-block h-11 w-64 bg-muted rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
