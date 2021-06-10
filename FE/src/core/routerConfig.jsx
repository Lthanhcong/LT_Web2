import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Celebrities from "../pages/Celebrities";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import MovieDetail from "../pages/MovieDetail";
import Page404 from "../pages/Page404";
import TopMovie from "../pages/TopMovie";

const routers = [
  {
    path: "/",
    component: MainLayout,
    routers: [
      {
        path: "/blog",
        component: Blog,
      },
      {
        path: "/blog-detail",
        component: BlogDetail,
      },
      {
        path: "/movie",
        component: Movie,
      },
      {
        path: "/movie-detail",
        component: MovieDetail,
      },
      {
        path: "/top-movie",
        component: TopMovie,
      },
      {
        path: "/celebrities",
        component: Celebrities,
      },
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        component: Page404,
      },
    ],
  },
];

export default routers;
