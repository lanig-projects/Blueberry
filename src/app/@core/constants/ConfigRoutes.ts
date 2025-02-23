import { IConfigRoute } from "@shared/components/Router/interfaces/IConfigRoute";
import { RoutePaths } from "@core/constants/RoutePaths";
import { DefaultLayout } from "@default/layouts/Default.layout";
import { DefaultRoutes } from "@default/routes/Default.routes";

export const ConfigRoutes: IConfigRoute[] = [
  {
    path: RoutePaths.default._path,
    layout: DefaultLayout,
    routes: DefaultRoutes
  }
];
