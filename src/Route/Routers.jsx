import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import Home from "../Pages/Home";
import NotFound from "../Components/NotFound";
import Products from "../Components/Products";
import Blog from "../Components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AllRoutes = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
export default AllRoutes;
