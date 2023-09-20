import Container from "./components/Container"
import Header from "./components/Header"
import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/UserContext"



export default function App(){
    const user = {
        name: "Jão",
        email: "jao@email.com"
    }

    return(
        <UserContext.Provider value={user}>
            <Header/>
            <Container>
            <UserInfo/>

            </Container>
          <h1>Usando contexto</h1>
        </UserContext.Provider>
    )
}