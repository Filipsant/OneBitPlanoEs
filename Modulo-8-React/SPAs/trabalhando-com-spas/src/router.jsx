import AdminHome from "./components/AdinHome";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Products from "./components/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/products",
        element: <Products/>
    },
    {
        path:"/cart",
        element: <Cart/>
    },
    {
        path: "/admin",
        element:<AdminHome/>
  
  
    }
])

export default router