// components/About/loading.tsx
export function AboutLoading() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-8 w-24 bg-muted rounded-full mb-12 mx-auto animate-pulse" />
            <div className="h-12 w-64 bg-muted rounded mb-12 mx-auto animate-pulse" />
            <div className="h-24 w-full max-w-4xl bg-muted rounded mb-8 mx-auto animate-pulse" />
            <div className="h-16 w-full max-w-2xl bg-muted rounded mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
