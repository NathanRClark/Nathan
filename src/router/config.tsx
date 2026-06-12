import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Layout from "../components/feature/Layout";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Performances from "../pages/performances/page";
import Media from "../pages/media/page";
import Gallery from "../pages/gallery/page";
import Resume from "../pages/resume/page";
import Contact from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/performances",
        element: <Performances />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
