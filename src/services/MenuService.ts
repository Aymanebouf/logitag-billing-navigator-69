
import { MenuItem, MenuResponse, MenuData } from '@/types/menu.types';

class MenuService {
  private static instance: MenuService;
  private menuItems: MenuItem[] = [];
  private isLoaded: boolean = false;

  private constructor() {}

  public static getInstance(): MenuService {
    if (!MenuService.instance) {
      MenuService.instance = new MenuService();
    }
    return MenuService.instance;
  }

  public async loadMenu(): Promise<MenuItem[]> {
    if (this.isLoaded) {
      return this.menuItems;
    }

    try {
      // Dans un environnement réel, ceci serait un appel API
      // Pour l'instant, utilisons des données mockées
      const mockResponse: MenuResponse = {
        "result": [{
          "JSON_Field": "[{\"ID\":10229,\"Text\":\"dashboard\",\"Link\":\"tagdashboard\\/index\",\"Name\":\"Dashboard\",\"icon\":\"fa-light fa-chart-tree-map\",\"color\":\"#3699ff\",\"hasChildren\":0,\"subMenu\":[]},{\"ID\":10247,\"Text\":\"Imporation\",\"Link\":\"Imporation\\/index\",\"Name\":\"Imporation\",\"icon\":\"fa-light fa-file-import\",\"color\":\"\",\"hasChildren\":0,\"subMenu\":[]},{\"ID\":10224,\"Text\":\"Facturation client\",\"Link\":\"#\",\"Name\":\"Factures Client\",\"icon\":\"fa-light fa-file-invoice\",\"color\":\"#3699ff\",\"hasChildren\":1,\"subMenu\":[{\"Text\":\"A facturer\",\"Link\":\"facture\\/clientAfacturer\",\"Name\":\"Génération factures\",\"Type\":\"subMenu\",\"icon\":\"fa-light fa-calendar\",\"color\":\"#3699ff\"},{\"Text\":\"Facture\",\"Link\":\"facture\\/clientFacturer\",\"Name\":\"Gestion factures\",\"Type\":\"SubMenu\",\"icon\":\"fa-light fa-file-invoice\",\"color\":\"#3699ff\"},{\"Text\":\"Archiver\",\"Link\":\"facture\\/FactureArchiverClient\",\"Name\":\"Documents archivés\",\"Type\":\"SubMenu\",\"icon\":\"fa-light fa-box-archive\",\"color\":\"#3699ff\"},{\"Text\":\"Validation\",\"Link\":\"facture\\/clientValidation\",\"Name\":\"Validation documents\",\"Type\":\"SubMenu\",\"icon\":\"fa-light fa-square-check\",\"color\":\"#3699ff\"},{\"Text\":\"Parametre\",\"Link\":\"facture\\/clientParametreFacturation\",\"Name\":\"Configuration\",\"Type\":\"SubMenu\",\"icon\":\"fa-light fa-sliders-simple\",\"color\":\"#3699ff\"}]},{\"ID\":10237,\"Text\":\"Facturation fournisseur\",\"Link\":\"#\",\"Name\":\"Factures Fournisseur\",\"icon\":\"fa-light fa-file-invoice\",\"color\":\"#3699ff\",\"hasChildren\":1,\"subMenu\":[{\"Text\":\"A facturer\",\"Link\":\"facture\\/fournisseurAfacturer\",\"Name\":\"Génération factures\",\"Type\":\"subMenu\",\"icon\":\"fa-light fa-calendar\",\"color\":\"#3699ff\"},{\"Text\":\"Facture\",\"Link\":\"facture\\/fournisseurFacturer\",\"Name\":\"Gestion factures\",\"Type\":\"SubMenu\",\"icon\":\"fa-light fa-file-invoice\",\"color\":\"#3699ff\"},{\"Text\":\"Archiver\",\"Link\":\"facture\\/FactureArchiverFournisseur\",\"Name\":\"Documents archivés\",\"Type\":\"SubMenu\",\"icon\":\"fa-light fa-box-archive\",\"color\":\"#3699ff\"},{\"Text\":\"Validation\",\"Link\":\"facture\\/fournisseurValidation\",\"Name\":\"Validation documents\",\"Type\":\"SubMenu\",\"icon\":\"fa-light fa-square-check\",\"color\":\"#3699ff\"},{\"Text\":\"Parametre\",\"Link\":\"facture\\/fournisseurParametreFacturaion\",\"Name\":\"Configuration\",\"Type\":\"SubMenu\",\"icon\":\"fa-light fa-sliders-simple\",\"color\":\"#3699ff\"}]},{\"ID\":10236,\"Text\":\"Inventory\",\"Link\":\"inventory\\/index\",\"Name\":\"Inventory\",\"icon\":\"fa-light fa-box\",\"color\":\"\",\"hasChildren\":0,\"subMenu\":[]},{\"ID\":10230,\"Text\":\"Rapports\",\"Link\":\"rapports\\/index\",\"Name\":\"Rapports\",\"icon\":\"fa-light fa-chart-bar\",\"color\":\"#3699ff\",\"hasChildren\":0,\"subMenu\":[]},{\"ID\":10231,\"Text\":\"Paramettres\",\"Link\":\"facture\\/parametre\",\"Name\":\"Paramettres\",\"icon\":\"fa-light fa-gear\",\"color\":\"#3699ff\",\"hasChildren\":0,\"subMenu\":[]}]"
        }],
        "status": 200
      };

      if (mockResponse.status === 200 && mockResponse.result.length > 0) {
        const jsonField = mockResponse.result[0].JSON_Field;
        const parsedItems: MenuItem[] = JSON.parse(jsonField);
        this.menuItems = parsedItems;
        this.isLoaded = true;
        return this.menuItems;
      }
      
      return [];
    } catch (error) {
      console.error('Erreur lors du chargement du menu:', error);
      return [];
    }
  }

  // Méthode pour convertir les URLs du backend vers les chemins React Router
  public getRouterPath(backendPath: string): string {
    // Remplacer les backslashes échappés par des slashes
    let path = backendPath.replace(/\\\//g, '/');
    
    // Si c'est un lien de sous-menu, adapter le format
    if (path.startsWith('facture/client')) {
      if (path === 'facture/clientAfacturer') return '/factures-client/a-facturer';
      if (path === 'facture/clientFacturer') return '/factures-client/factures';
      if (path === 'facture/FactureArchiverClient') return '/factures-client/archive';
      if (path === 'facture/clientValidation') return '/factures-client/validation';
      if (path === 'facture/clientParametreFacturation') return '/factures-client/parametres';
      if (path === 'facture/facturePermanente') return '/factures-client/permanentes';
    }
    
    if (path.startsWith('facture/fournisseur')) {
      // Improved fournisseur path handling with specific subdirectories
      if (path === 'facture/fournisseurAfacturer') return '/factures-fournisseur/a-facturer';
      if (path === 'facture/fournisseurFacturer') return '/factures-fournisseur/factures';
      if (path === 'facture/FactureArchiverFournisseur') return '/factures-fournisseur/archive';
      if (path === 'facture/fournisseurValidation') return '/factures-fournisseur/validation';
      if (path === 'facture/fournisseurParametreFacturaion') return '/factures-fournisseur/parametres';
      
      // Default fallback for facture/fournisseur
      return '/factures-fournisseur';
    }

    if (path === 'inventory/index') return '/inventory';
    if (path === 'rapports/index') return '/rapports';
    if (path === 'facture/parametre') return '/parametres';
    if (path === 'tagdashboard/index' || path === 'dashboard/index') return '/';
    if (path === 'Imporation/index') return '/importation';

    // Pour les liens qui ne correspondent à aucun cas spécial
    return '/';
  }

  // Méthode pour convertir les icônes de FontAwesome en icônes PrimeIcons
  public getIconClass(faIcon: string): string {
    if (!faIcon) return 'pi pi-home';

    // Conversion de certaines icônes FontAwesome vers PrimeIcons
    const iconMap: Record<string, string> = {
      'fa-light fa-chart-tree-map': 'pi pi-th-large',
      'fa-light fa-file-import': 'pi pi-download',
      'fa-light fa-file-invoice': 'pi pi-file',
      'fa-light fa-calendar': 'pi pi-calendar',
      'fa-light fa-box-archive': 'pi pi-inbox',
      'fa-light fa-square-check': 'pi pi-check-square',
      'fa-light fa-sliders-simple': 'pi pi-cog',
      'fa-light fa-box': 'pi pi-box',
      'fa-light fa-chart-bar': 'pi pi-chart-bar',
      'fa-light fa-gear': 'pi pi-cog'
    };

    return iconMap[faIcon] || 'pi pi-file'; // Retourne une icône par défaut si non trouvée
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  public isMenuLoaded(): boolean {
    return this.isLoaded;
  }
}

export default MenuService.getInstance();
