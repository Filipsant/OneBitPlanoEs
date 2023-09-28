import {createBrowserRouter} from "react-router-dom"
import Home from "./page/Home"
import RootLayout from "./page/RootLayout"
import ListItens from "./page/itens/ListItens"
import ShowItem from "./page/itens/ShowItem"
import UpdateItem from "./page/itens/UpdateItem"
import ItensLayout from "./page/itens/Layout"
import CreateItem from "./page/itens/CreateItem"

const router = createBrowserRouter([{
    path:"/",
    element: <RootLayout/>,
    children:[
        {index: true, element: <Home/>},
        {
            path: "itens",
            element: <ItensLayout/>,
            children:[
                {index: true, element:<ListItens/>},
                {path:"new", element:<CreateItem/>},
                {path:":id", element:<ShowItem/>},
                {path: ":id/update", element:<UpdateItem/>}
            ]
        }
    ]
}])

export default router