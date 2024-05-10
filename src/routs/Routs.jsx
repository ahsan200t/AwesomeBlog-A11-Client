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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/all blogs',
            element:<AllBlogs></AllBlogs>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/featured',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path:'/wish',
          element:<WishList></WishList>
        },
        {
          path:'/add blogs',
          element:<AddBlogs></AddBlogs>
        }
      ]
    },
  ]);

  export default router;