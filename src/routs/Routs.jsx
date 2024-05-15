import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import WishList from "../pages/WishList/WishList";
import AddBlogs from "../pages/AddBlogs/AddBlogs";
import ErrorElement from "../components/ErrorElement";
import Details from "../pages/Details/Details";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import PrivetRoute from "../pages/PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://awesome-blog-steel.vercel.app/blogs"),
      },
      {
        path: "/all blogs",
        element: <AllBlogs></AllBlogs>,
        // loader: () => fetch("https://awesome-blog-steel.vercel.app/blogs"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/featured",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wish",
        element: <WishList></WishList>,
      },
      {
        path: "/add blogs",
        element: <AddBlogs></AddBlogs>,
      },
      {
        path: "/details/:id",
        element: 
        <PrivetRoute>
          <Details></Details>
        </PrivetRoute>,   
        loader: ({ params }) =>
          fetch(`https://awesome-blog-steel.vercel.app/single-blogs/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) =>
          fetch(`https://awesome-blog-steel.vercel.app/blog/${params.id}`),
      },
    ],
  },
]);

export default router;
