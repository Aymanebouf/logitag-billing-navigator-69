
export interface SubMenuItem {
  Text: string;
  Link: string;
  Name: string;
  Type?: string;
  icon: string;
  color: string;
}

export interface MenuItem {
  ID: number;
  Text: string;
  Link: string;
  Name: string;
  icon: string;
  color: string;
  hasChildren: number;
  subMenu: SubMenuItem[];
}

export interface MenuResponse {
  result: Array<{
    JSON_Field: string;
  }>;
  status: number;
}

export interface MenuData {
  items: MenuItem[];
}
