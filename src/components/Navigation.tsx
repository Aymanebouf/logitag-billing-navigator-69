
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "primeicons/primeicons.css";

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
  isActive: boolean;
  hasSubmenu?: boolean;
  isSubmenuOpen?: boolean;
  subItems?: Array<{
    icon: string;
    label: string;
    path: string;
  }>;
  onToggleSubmenu?: () => void;
  collapsed?: boolean;
}

const NavItem = ({ 
  icon, 
  label, 
  path, 
  isActive, 
  hasSubmenu = false, 
  isSubmenuOpen = false,
  subItems = [],
  onToggleSubmenu,
  collapsed = false
}: NavItemProps) => {
  const navigate = useNavigate();
  
  // Si le menu est collapsed et a un sous-menu, on n'affiche que l'icône
  if (collapsed && hasSubmenu) {
    return (
      <div className="mb-1">
        <Button
          text
          className={`w-full justify-content-center p-3 ${isActive ? 'bg-primary-100' : ''}`}
          onClick={() => onToggleSubmenu && onToggleSubmenu()}
          tooltip={label}
          tooltipOptions={{ position: 'right' }}
        >
          <i className={`${icon}`}></i>
        </Button>
      </div>
    );
  }

  // Si le menu est collapsed et n'a pas de sous-menu
  if (collapsed) {
    return (
      <div className="mb-1">
        <Button
          text
          className={`w-full justify-content-center p-3 ${isActive ? 'bg-primary-100' : ''}`}
          onClick={() => navigate(path)}
          tooltip={label}
          tooltipOptions={{ position: 'right' }}
        >
          <i className={`${icon}`}></i>
        </Button>
      </div>
    );
  }

  // Menu normal avec ou sans sous-menu
  return (
    <div className="mb-1">
      <Button
        text
        className={`w-full text-left flex align-items-center p-3 ${isActive ? 'bg-primary-100' : ''}`}
        onClick={() => {
          if (hasSubmenu && onToggleSubmenu) {
            onToggleSubmenu();
          } else {
            navigate(path);
          }
        }}
      >
        <i className={`${icon} mr-2`}></i>
        <span className="flex-grow-1">{label}</span>
        {hasSubmenu && (
          <i className={`pi pi-chevron-${isSubmenuOpen ? 'down' : 'right'} ml-auto`}></i>
        )}
      </Button>
      {isSubmenuOpen && subItems.length > 0 && (
        <div className="ml-4 mt-1">
          {subItems.map((item) => (
            <Button
              key={item.path}
              text
              className={`w-full text-left flex align-items-center p-2 pl-5 ${location.pathname === item.path ? 'bg-primary-50' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <i className={`${item.icon} mr-2`}></i>
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export function Navigation({ collapsed = false }: { collapsed?: boolean }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSubmenu, setOpenSubmenu] = useState<string | null>("factures-client");

  const navItems = [
    {
      icon: "pi pi-th-large",
      label: "Dashboard",
      path: "/",
      hasSubmenu: false
    },
    {
      icon: "pi pi-file",
      label: "Factures Client",
      path: "/factures-client",
      hasSubmenu: true,
      subItems: [
        {
          icon: "pi pi-calendar",
          label: "Génération factures",
          path: "/factures-client/a-facturer",
        },
        {
          icon: "pi pi-file",
          label: "Gestion factures",
          path: "/factures-client/factures",
        },
        {
          icon: "pi pi-refresh",
          label: "Factures permanentes",
          path: "/factures-client/permanentes",
        },
        {
          icon: "pi pi-inbox",
          label: "Documents archivés",
          path: "/factures-client/archive",
        },
        {
          icon: "pi pi-check-square",
          label: "Validation documents",
          path: "/factures-client/validation",
        },
        {
          icon: "pi pi-cog",
          label: "Configuration",
          path: "/factures-client/parametres",
        },
      ],
    },
    {
      icon: "pi pi-file-o",
      label: "Factures Fournisseur",
      path: "/factures-fournisseur",
      hasSubmenu: false
    },
    {
      icon: "pi pi-box",
      label: "Inventory",
      path: "/inventory",
      hasSubmenu: false
    },
    {
      icon: "pi pi-chart-bar",
      label: "Rapports",
      path: "/rapports",
      hasSubmenu: false
    },
    {
      icon: "pi pi-cog",
      label: "Paramètres",
      path: "/parametres",
      hasSubmenu: false
    }
  ];

  return (
    <nav className={`p-3 overflow-y-auto flex-grow-1`}>
      {navItems.map((item) => (
        <NavItem
          key={item.path}
          icon={item.icon}
          label={item.label}
          path={item.path}
          isActive={
            item.path === '/' 
              ? currentPath === '/' 
              : currentPath.startsWith(item.path)
          }
          hasSubmenu={item.hasSubmenu}
          isSubmenuOpen={openSubmenu === item.path}
          subItems={item.hasSubmenu ? item.subItems : []}
          onToggleSubmenu={() => setOpenSubmenu(openSubmenu === item.path ? null : item.path)}
          collapsed={collapsed}
        />
      ))}
    </nav>
  );
}
