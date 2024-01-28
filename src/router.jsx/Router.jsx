import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetels from "../pages/NewsDetels";
import Privateroute from "./Privateroute";

const Router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:"/news/:id",
                element:<Privateroute><NewsDetels></NewsDetels></Privateroute> ,
            },
            {
                path:"/Login",
                element:<Login></Login>
            },
            {
                path:"/Register",
                element:<Register></Register>
            }
        ]
    }
])
export default Router;