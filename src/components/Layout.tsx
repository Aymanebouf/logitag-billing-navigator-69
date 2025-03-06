
import { Navigation } from "./Navigation";
import { Button } from "primereact/button";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      <aside className={`${collapsed ? 'w-16' : 'w-64'} border-right-1 surface-card transition-all duration-300 flex flex-column`}>
        <div className="p-3 border-bottom-1 flex align-items-center justify-content-between">
          {!collapsed && <h1 className="font-semibold text-xl text-primary m-0">Logitag</h1>}
          <Button 
            icon={collapsed ? "pi pi-chevron-right" : "pi pi-chevron-left"} 
            onClick={() => setCollapsed(!collapsed)} 
            className="p-button-text p-button-rounded" 
            style={{ color: '#9b87f5' }}
          />
        </div>
        <Navigation collapsed={collapsed} />
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
