import {createBrowserRouter} from "react-router-dom"
import AdminHome from "./pages/admin/AdminHome";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import Product from "./pages/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [{
           index: true,
            element: <Home/>
        }, {
            path: "/products",
            element: <Products/>
        },{
            path: "products/:productId",
            element: <Product/>
        },
        {
            path:"/cart",
            element: <Cart/>
        },
    
    ]
    },
   
   
    {
        path: "/admin",
        element:<AdminHome/>
  
  
    }
])

export default router