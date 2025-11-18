export function ContactLoading() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-8 w-32 bg-muted rounded-full mb-4 mx-auto animate-pulse" />
            <div className="h-12 w-80 bg-muted rounded mb-6 mx-auto animate-pulse" />
            <div className="h-16 w-full max-w-2xl bg-muted rounded mx-auto animate-pulse" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <div className="h-6 w-40 bg-muted rounded mb-6 animate-pulse" />
              <div className="bg-card rounded-lg shadow-md">
                <div className="p-6 space-y-6">
                  {/* Form fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="h-10 bg-muted rounded animate-pulse" />
                    <div className="h-10 bg-muted rounded animate-pulse" />
                  </div>
                  <div className="h-10 bg-muted rounded animate-pulse" />
                  <div className="h-32 bg-muted rounded animate-pulse" />
                  <div className="h-12 w-full bg-muted rounded animate-pulse" />
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div>
              <div className="h-6 w-40 bg-muted rounded mb-6 animate-pulse" />
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card rounded-lg shadow-md">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-muted rounded-lg animate-pulse" />
                        <div className="flex-1">
                          <div className="h-4 w-20 bg-muted rounded mb-2 animate-pulse" />
                          <div className="h-5 w-32 bg-muted rounded animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Available for Work Card */}
                <div className="bg-primary rounded-lg shadow-md">
                  <div className="p-6">
                    <div className="h-6 w-40 bg-primary-foreground/20 rounded mb-4 animate-pulse" />
                    <div className="h-16 w-full bg-primary-foreground/20 rounded mb-4 animate-pulse" />
                    <div className="h-8 w-24 bg-primary-foreground/20 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
