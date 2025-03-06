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
  // Changed from single ID to array of IDs to track multiple open submenus
  const [openSubmenus, setOpenSubmenus] = useState<number[]>([]);
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
            // Add the parent ID to open submenus if not already there
            setOpenSubmenus(prev => 
              prev.includes(currentPageParent.ID) 
                ? prev 
                : [...prev, currentPageParent.ID]
            );
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

  // Updated to toggle a submenu in the array instead of replacing the single value
  const handleToggleSubmenu = (itemId: number) => {
    setOpenSubmenus(prev => {
      // If submenu is already open, close it by removing from array
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      }
      // Otherwise add it to the array of open submenus
      return [...prev, itemId];
    });
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
            // Check if this item's ID is in the openSubmenus array
            isSubmenuOpen={openSubmenus.includes(item.ID)}
            subItems={item.hasChildren === 1 ? item.subMenu.map(sub => ({
              icon: MenuService.getIconClass(sub.icon),
              label: sub.Name,
              path: MenuService.getRouterPath(sub.Link),
              id: `${item.ID}-${sub.Link}` // Create a unique ID combining parent and child info
            })) : []}
            // Toggle this specific submenu
            onToggleSubmenu={() => handleToggleSubmenu(item.ID)}
            collapsed={collapsed}
          />
        );
      })}
    </nav>
  );
}
