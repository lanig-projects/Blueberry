export interface IRoute {
  path: string;
  element: JSX.Element;
  permissions?: string[];
}
