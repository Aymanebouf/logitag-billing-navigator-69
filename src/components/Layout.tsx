
import { Navigation } from "./Navigation";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import MenuService from "@/services/MenuService";
import { useIsMobile } from "@/hooks/use-mobile";

export function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  // Collapse sidebar automatically on mobile
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

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
      <aside 
        className={`${collapsed ? 'w-16' : 'w-64'} border-right-1 surface-card transition-all duration-300 flex flex-column relative ${isMobile && !collapsed ? 'absolute h-screen z-50' : ''}`}
      >
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
        <div className={`p-3 sm:p-6 ${isMobile ? 'pb-20' : ''}`}>{children}</div>
      </main>
      
      {/* Barre de navigation mobile en bas d'écran */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-40">
          <Button 
            icon="pi pi-home" 
            className="p-button-text p-button-rounded" 
            onClick={() => window.location.href = "/"} 
          />
          <Button 
            icon="pi pi-file-invoice" 
            className="p-button-text p-button-rounded" 
            onClick={() => window.location.href = "/factures-client/a-facturer"}
          />
          <Button 
            icon="pi pi-box" 
            className="p-button-text p-button-rounded" 
            onClick={() => window.location.href = "/inventory"}
          />
          <Button 
            icon="pi pi-cog" 
            className="p-button-text p-button-rounded" 
            onClick={() => window.location.href = "/parametres"} 
          />
        </div>
      )}
    </div>
  );
}
