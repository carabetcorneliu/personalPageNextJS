export function HeroLoading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
