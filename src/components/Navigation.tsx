
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
    id: string; // Add unique identifier for sub-items
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
  const location = useLocation(); // Add location to check the current path
  
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
              key={item.id} // Use the unique identifier
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
  // We store the currently open submenu ID instead of its Link
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const items = await MenuService.loadMenu();
        setMenuItems(items);
        
        // Only open submenu if we're on a page within a submenu
        if (currentPath !== "/" && currentPath !== "") {
          const currentPageParent = items.find(item => 
            item.hasChildren && item.subMenu.some(sub => 
              MenuService.getRouterPath(sub.Link) === currentPath
            )
          );
          
          if (currentPageParent) {
            // Store the ID instead of the Link for more reliable comparison
            setOpenSubmenu(currentPageParent.ID);
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

  // Updated to use ID instead of Link for more reliable tracking
  const handleToggleSubmenu = (itemId: number) => {
    // Close the submenu if it's already open, otherwise open it and close all others
    setOpenSubmenu(openSubmenu === itemId ? null : itemId);
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
            // Compare with ID instead of Link for consistency
            isSubmenuOpen={openSubmenu === item.ID}
            subItems={item.hasChildren === 1 ? item.subMenu.map(sub => ({
              icon: MenuService.getIconClass(sub.icon),
              label: sub.Name,
              path: MenuService.getRouterPath(sub.Link),
              id: `${item.ID}-${sub.Link}` // Create a unique ID combining parent and child info
            })) : []}
            // Pass the item ID instead of the Link for more reliable comparison
            onToggleSubmenu={() => handleToggleSubmenu(item.ID)}
            collapsed={collapsed}
          />
        );
      })}
    </nav>
  );
}
