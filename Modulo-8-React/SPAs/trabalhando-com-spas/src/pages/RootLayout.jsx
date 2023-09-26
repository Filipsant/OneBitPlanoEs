import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout(){
    return(
        <>
        <Header/>
        <main>
            <p>Esse é o layout principal. Abaixo esta o conteudo dinamico de cara rota </p>
            <hr />
            <Outlet/>
        </main>
        <footer>
            <hr />
            <p>Feito com React Router</p>
        </footer>
        </>
    )
}