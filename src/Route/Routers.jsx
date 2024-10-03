import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import Home from "../Pages/Home";
import NotFound from "../Components/NotFound";
import Products from "../Components/Products";
import Blog from "../Components/Blog";
import axios from "axios"
import Cart from "../Components/Cart";


async function fetchProduct(url) {
  try {
    let products = await axios.get(url);
    return products.data
  } catch (error) {
    console.log(error);

  }
}
async function fetchBlogs(url) {
    try {
      let blogs=await axios.get(url)
      return blogs.data
    } catch (error) {
      console.log(error);
      
    }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchProduct("https://fakestoreapi.in/api/products?limit=4")
      },
      {
        path: "/Products",
        element: <Products />,
        loader: () => fetchProduct("https://fakestoreapi.in/api/products")
      },
      {
        path: "/Blog",
        element: <Blog />,
        loader:()=>fetchBlogs("https://jsonplaceholder.typicode.com/posts")
      },
      {
        path: "/Cart",
        element: <Cart />
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
