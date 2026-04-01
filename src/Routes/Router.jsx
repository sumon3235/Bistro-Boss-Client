import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
         {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  },
]);

export default router