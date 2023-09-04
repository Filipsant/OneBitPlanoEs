import StatusText from "./components/StatusText"
import { Subtitle } from "./components/Subtitle"
import Title from "./components/Title"


// Dados dinamicos 

/*export default function App(){
  const tech = "React"
  const status = true
  return(
    <div>
      <h1>{tech} is awesome </h1>
    <h2>It's easy, like 1+1 is {sun(1,1)}</h2>
    <h2>current status : {status ? "on" : "off"}</h2>
   
    </div>
  )
}*/

//Novos componentes 


export default function App(){
  const tech = "React"
  
  return(
    <div>
      <Title/>
      <Subtitle />
      <StatusText/>
      
    
    
   
    </div>
  )
}