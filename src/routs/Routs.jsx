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
import Dashboard from "../layouts/Dashboard";
import MyDashboard from "../pages/Dashboard/MyDashboard/MyDashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/blogs"),
      },
      {
        path: "/all blogs",
        element: <AllBlogs></AllBlogs>,
        
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
        element: <AdminRoutes><AddBlogs></AddBlogs></AdminRoutes>,
      },
      {
        path: "/details/:id",
        element: 
        <PrivetRoute>
          <Details></Details>
        </PrivetRoute>,   
        loader: ({ params }) =>
          fetch(`http://localhost:5000/single-blogs/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blog/${params.id}`),
      },
    ],
  },
  {
    path: 'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'my-dashboard',
        element: <MyDashboard></MyDashboard>
      },
      {
        path: 'users',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      }
    ]
  }
]);

export default router;
