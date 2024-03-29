import { Link, Outlet } from "react-router-dom";

export default function RootLayout(){
    return(
        <>
        <header>
            <Link to="/" className="logo">React Stock</Link>
            <nav>
                <Link to= "/">Inicio</Link>
                <Link to="/itens">Itens</Link>
            </nav>
        </header>
        <div>
            <Outlet/>
        </div>
        <footer>
            Feito com React e React Router
        </footer>
        </>
    )
}