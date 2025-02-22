import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { IConfigRoute } from "@shared/components/Router/interfaces/IConfigRoute";
import { IRoute } from "@shared/components/Router/interfaces/IRoute";
import { usePermissionsStore } from "@shared/stores/Permissions.store";
import { useMemo } from "react";

export interface IRouterProps {
  baseLayout?: React.FC;
  configRoutes?: IConfigRoute[];
  notFoundElement?: React.FC;
}

export const Router = ({ baseLayout: BaseLayout, configRoutes, notFoundElement: NotFoundElement }: IRouterProps) => {
  const permissions = usePermissionsStore(state => state.permissions);

  const filteredRoutes = useMemo(() => {
    return configRoutes
      .filter(({ permissions: routePermissions }) =>
        !routePermissions || routePermissions.length === 0 ||
        routePermissions.some((perm) => permissions.includes(perm))
      )
      .map(({ path, layout: Layout, routes }) => ({
        path,
        layout: Layout,
        routes: routes.filter(({ permissions: routePermissions }) =>
          !routePermissions || routePermissions.length === 0 ||
          routePermissions.some((perm) => permissions.includes(perm))
        )
      }))
      .filter(({ routes }) => routes.length > 0);
  }, [permissions, configRoutes]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={BaseLayout ? <BaseLayout/> : <Outlet/>}>
          {filteredRoutes.map(({ path, layout: Layout, routes }: IConfigRoute, index) => (
            <Route key={index} path={path}>
              <Route element={<Layout/>}>
                {routes.map((route: IRoute) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Route>
            </Route>
          ))}

          <Route path={'*'} element={NotFoundElement ? <NotFoundElement/> : <>Error 404 - Not Found</>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
