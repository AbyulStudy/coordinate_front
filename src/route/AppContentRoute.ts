import React from "react";

const Home = React.lazy(() => import("src/page/main/Home"));
const Proj4 = React.lazy(() => import("src/page/main/Proj4"));
const Epsg = React.lazy(() => import("src/page/main/EpsgDeveloper"));
const Map = React.lazy(() => import("src/page/main/SearchAddress"));

type element = React.LazyExoticComponent<() => JSX.Element>;
interface IRoute {
    [key: string]: element | string;
}

const AppContentRoute: IRoute[] = [
    { path: "/", home: "Home", element: Home },
    { path: "/proj4", element: Proj4 },
    { path: "/epsg", element: Epsg },
    { path: "/map", element: Map }
];

export default AppContentRoute;
