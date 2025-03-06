
import { Navigation } from "./Navigation";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import MenuService from "@/services/MenuService";

export function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initMenu = async () => {
      try {
        await MenuService.loadMenu();
      } catch (error) {
        console.error("Erreur lors de l'initialisation du menu:", error);
      } finally {
        setLoading(false);
      }
    };

    initMenu();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white">
      <aside className={`${collapsed ? 'w-16' : 'w-64'} border-right-1 surface-card transition-all duration-300 flex flex-column relative`}>
        <div className="p-3 border-bottom-1 flex align-items-center justify-content-between">
          {!collapsed && <h1 className="font-semibold text-xl text-primary m-0">Logitag</h1>}
        </div>
        <Navigation collapsed={collapsed} />
        <Button 
          icon={collapsed ? "pi pi-chevron-right" : "pi pi-chevron-left"} 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-button-text p-button-rounded absolute z-10"
          style={{ 
            color: '#9b87f5',
            top: '16px',
            right: collapsed ? '-14px' : '-14px',
            width: '28px',
            height: '28px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0'
          }}
        />
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
