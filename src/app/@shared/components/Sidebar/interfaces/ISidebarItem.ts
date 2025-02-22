export interface ISidebarItem {
  path?: string;
  label: string;
  icon?: React.ReactNode;
  children?: ISidebarItem[];
  permissions?: string[];
}
