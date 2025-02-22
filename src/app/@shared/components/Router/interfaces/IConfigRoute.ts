import { IRoute } from "@shared/components/Router/interfaces/IRoute";

export interface IConfigRoute {
  path: string;
  layout: React.FC;
  routes: IRoute[];
  permissions?: string[];
}
