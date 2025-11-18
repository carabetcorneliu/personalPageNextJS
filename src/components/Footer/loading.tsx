export function FooterLoading() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <div className="h-6 w-40 bg-muted rounded mb-4 animate-pulse" />
              <div className="h-4 w-48 bg-muted rounded mb-2 animate-pulse" />
              <div className="h-16 w-full bg-muted rounded mb-4 animate-pulse" />
              <div className="flex justify-end">
                <div className="h-6 w-32 bg-muted rounded-full animate-pulse" />
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <div className="h-5 w-24 bg-muted rounded mb-4 animate-pulse" />
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-20 bg-muted rounded animate-pulse"
                  />
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <div className="h-5 w-20 bg-muted rounded mb-4 animate-pulse" />
              <div className="flex gap-4 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-5 w-5 bg-muted rounded animate-pulse"
                  />
                ))}
              </div>
              <div className="mt-4">
                <div className="h-4 w-40 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px bg-muted mb-6 animate-pulse" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="h-4 w-48 bg-muted rounded animate-pulse" />
            <div className="flex gap-6">
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
              <div className="h-4 w-32 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
