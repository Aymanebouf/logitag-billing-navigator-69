
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  FileStack,
  Inventory,
  ChartBar,
  Settings
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
  hasSubmenu?: boolean;
}

const NavItem = ({ icon, label, path, isActive, hasSubmenu = false }: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 transition-all",
        isActive && "bg-accent text-accent-foreground",
        hasSubmenu && "after:content-['>'] after:ml-auto"
      )}
      onClick={() => navigate(path)}
    >
      {icon}
      {label}
    </Button>
  );
};

export function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="space-y-2 p-4">
      <NavItem
        icon={<LayoutDashboard size={20} />}
        label="Dashboard"
        path="/"
        isActive={currentPath === "/"}
        hasSubmenu
      />
      <NavItem
        icon={<FileText size={20} />}
        label="FactureClient"
        path="/factures-client"
        isActive={currentPath === "/factures-client"}
        hasSubmenu
      />
      <NavItem
        icon={<FileStack size={20} />}
        label="FactureFournisseur"
        path="/factures-fournisseur"
        isActive={currentPath === "/factures-fournisseur"}
        hasSubmenu
      />
      <NavItem
        icon={<Inventory size={20} />}
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
