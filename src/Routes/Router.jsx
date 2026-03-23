import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        }, {
          path: "/menu",
          element: <Menu></Menu>
        }
    ]
  },
]);

export default router