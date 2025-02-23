import { IRoute } from "@shared/components/Router/interfaces/IRoute";
import { RoutePaths } from "@core/constants/RoutePaths";
import { WelcomePage } from "@default/pages/WelcomePage";
import { Navigate } from "react-router-dom";

export const DefaultRoutes: IRoute[] = [
  {
    path: RoutePaths.default._fullPath,
    element: <Navigate to={RoutePaths.default.welcome._fullPath}/>
  },
  {
    path: RoutePaths.default.welcome._fullPath,
    element: <WelcomePage/>
  }
];
