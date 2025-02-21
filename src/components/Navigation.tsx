
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  FileStack,
  Package,
  ChartBar,
  Settings,
  Calendar,
  Archive,
  CheckSquare,
  Settings2
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
  hasSubmenu?: boolean;
  isSubmenuOpen?: boolean;
  subItems?: Array<{
    icon: React.ReactNode;
    label: string;
    path: string;
  }>;
  onToggleSubmenu?: () => void;
}

const NavItem = ({ 
  icon, 
  label, 
  path, 
  isActive, 
  hasSubmenu = false, 
  isSubmenuOpen = false,
  subItems = [],
  onToggleSubmenu 
}: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 transition-all",
          isActive && "bg-accent text-accent-foreground",
          hasSubmenu && "after:content-['>'] after:ml-auto",
          isSubmenuOpen && "after:rotate-90"
        )}
        onClick={() => {
          if (hasSubmenu && onToggleSubmenu) {
            onToggleSubmenu();
          } else {
            navigate(path);
          }
        }}
      >
        {icon}
        {label}
      </Button>
      {isSubmenuOpen && subItems.length > 0 && (
        <div className="ml-4 mt-1 space-y-1">
          {subItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 pl-6",
                location.pathname === item.path && "bg-accent/50"
              )}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSubmenu, setOpenSubmenu] = useState<string | null>("factures-client");

  const factureClientSubmenu = [
    {
      icon: <Calendar size={20} />,
      label: "AFacturer",
      path: "/factures-client/a-facturer",
    },
    {
      icon: <FileText size={20} />,
      label: "Facture",
      path: "/factures-client/factures",
    },
    {
      icon: <Archive size={20} />,
      label: "Archiver",
      path: "/factures-client/archive",
    },
    {
      icon: <CheckSquare size={20} />,
      label: "Validation",
      path: "/factures-client/validation",
    },
    {
      icon: <Settings2 size={20} />,
      label: "Parametre",
      path: "/factures-client/parametres",
    },
  ];

  return (
    <nav className="space-y-2 p-4">
      <NavItem
        icon={<LayoutDashboard size={20} />}
        label="Dashboard"
        path="/"
        isActive={currentPath === "/"}
        hasSubmenu
        isSubmenuOpen={openSubmenu === "dashboard"}
        onToggleSubmenu={() => setOpenSubmenu(openSubmenu === "dashboard" ? null : "dashboard")}
      />
      <NavItem
        icon={<FileText size={20} />}
        label="FactureClient"
        path="/factures-client"
        isActive={currentPath.startsWith("/factures-client")}
        hasSubmenu
        isSubmenuOpen={openSubmenu === "factures-client"}
        subItems={factureClientSubmenu}
        onToggleSubmenu={() => setOpenSubmenu(openSubmenu === "factures-client" ? null : "factures-client")}
      />
      <NavItem
        icon={<FileStack size={20} />}
        label="FactureFournisseur"
        path="/factures-fournisseur"
        isActive={currentPath === "/factures-fournisseur"}
        hasSubmenu
      />
      <NavItem
        icon={<Package size={20} />}
        label="Inventory"
        path="/inventory"
        isActive={currentPath === "/inventory"}
      />
      <NavItem
        icon={<ChartBar size={20} />}
        label="Rapports"
        path="/rapports"
        isActive={currentPath === "/rapports"}
      />
      <NavItem
        icon={<Settings size={20} />}
        label="Paramettres"
        path="/parametres"
        isActive={currentPath === "/parametres"}
        hasSubmenu
      />
    </nav>
  );
}
