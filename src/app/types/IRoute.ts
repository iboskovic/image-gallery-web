export interface IRoute {
  path: string;
  element: JSX.Element;
}

export interface RouteObj {
  routes: IRoute[];
}
