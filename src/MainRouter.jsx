import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./HomePart/Home";
import SignUp from "./Login,signup componant/SignUp";
import Login from "./Login,signup componant/Login";
import Shop from "./Shop/Shop";
import ProductDetails from "./ProductDetails/ProductDetails";
import UpComing from "./UpComing/UpComing";
import JoinUs from "./JoinUs/JoinUs";
import DashBoard from "./DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:"Error",
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/productdetails",
            element:<ProductDetails></ProductDetails>
        },
        {
            path:"/upcoming",
            element:<UpComing></UpComing>
        },
        {
            path:"/joinus",
            element:<JoinUs></JoinUs>
        },
        {
            path:"/dashboard",
            element:<DashBoard></DashBoard>
        },
     
    
    ]
  },
]);


export default router