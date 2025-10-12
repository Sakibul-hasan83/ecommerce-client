import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./HomePart/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:"Error",
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);


export default router