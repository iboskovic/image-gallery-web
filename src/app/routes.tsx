import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LikedImages from "./pages/LikedImages/LikedImages";

export enum PATHS {
  HOME = "/",
  LIKED_IMAGES = "/liked-images",
}

const ROUTES = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.LIKED_IMAGES,
    element: <LikedImages />,
  },
];

export default ROUTES;

export function RenderRoutes(routesObj: any) {
  const { routes } = routesObj;
  return (
    <Routes>
      {routes.map((route: any, index: number) => {
        return <Route key={index} {...route} />;
      })}
    </Routes>
  );
}
