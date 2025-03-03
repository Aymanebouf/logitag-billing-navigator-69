
import { Navigation } from "./Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white">
      <aside className="w-64 border-right-1 surface-card">
        <div className="p-4 border-bottom-1">
          <h1 className="font-semibold text-xl text-primary">Logitag</h1>
        </div>
        <Navigation />
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
