
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import MenuService from "@/services/MenuService";
import { MenuItem } from "@/types/menu.types";

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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const items = await MenuService.loadMenu();
        setMenuItems(items);
        
        // Modifier: Nous ne voulons plus ouvrir automatiquement le sous-menu au chargement initial
        // Nous ouvrons seulement le sous-menu si l'utilisateur navigue vers une page dans un sous-menu
        if (currentPath !== "/" && currentPath !== "") {
          const currentPageParent = items.find(item => 
            item.hasChildren && item.subMenu.some(sub => 
              MenuService.getRouterPath(sub.Link) === currentPath
            )
          );
          
          if (currentPageParent) {
            setOpenSubmenu(currentPageParent.Link);
          }
        }
      } catch (error) {
        console.error("Erreur lors du chargement du menu:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, [currentPath]);

  const handleToggleSubmenu = (itemLink: string) => {
    // Simplement basculer l'état du sous-menu cliqué, sans affecter les autres
    setOpenSubmenu(openSubmenu === itemLink ? null : itemLink);
  };

  if (loading) {
    return <div className="p-3 text-center">Chargement du menu...</div>;
  }

  return (
    <nav className={`p-3 overflow-y-auto flex-grow-1`}>
      {menuItems.map((item) => {
        const routerPath = MenuService.getRouterPath(item.Link);
        const iconClass = MenuService.getIconClass(item.icon);
        
        return (
          <NavItem
            key={item.ID.toString()}
            icon={iconClass}
            label={item.Name}
            path={routerPath}
            isActive={
              routerPath === '/' 
                ? currentPath === '/' 
                : currentPath.startsWith(routerPath)
            }
            hasSubmenu={item.hasChildren === 1}
            isSubmenuOpen={openSubmenu === item.Link}
            subItems={item.hasChildren === 1 ? item.subMenu.map(sub => ({
              icon: MenuService.getIconClass(sub.icon),
              label: sub.Name,
              path: MenuService.getRouterPath(sub.Link)
            })) : []}
            onToggleSubmenu={() => handleToggleSubmenu(item.Link)}
            collapsed={collapsed}
          />
        );
      })}
    </nav>
  );
}
