
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, FileText, Truck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
}

const NavItem = ({ icon, label, path, isActive }: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 transition-all",
        isActive && "bg-accent text-accent-foreground"
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
        label="Tableau de bord"
        path="/"
        isActive={currentPath === "/"}
      />
      <NavItem
        icon={<Users size={20} />}
        label="Clients"
        path="/clients"
        isActive={currentPath === "/clients"}
      />
      <NavItem
        icon={<Truck size={20} />}
        label="Prestations"
        path="/prestations"
        isActive={currentPath === "/prestations"}
      />
      <NavItem
        icon={<FileText size={20} />}
        label="Factures"
        path="/invoices"
        isActive={currentPath === "/invoices"}
      />
    </nav>
  );
}
