import { useEffect, useState } from "react"

function Counter() {
  
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    console.log("O efeito colateral foi ativado ")

    return ()=>{
      console.log("FAZENDO a limpeza....")
      console.log("componente desmontado")
    }
  }, [])
  return(
    <button onClick={()=> setCounter(count =>count +1)}>contador: {counter}</button>
  )

}

export default function App(){
  
  const [show, setShow]= useState(false)

  return(
    <>
    <h1>conhecendo o useEffect</h1>
    <div>
      <input 
      type="checkbox"
      id="show"
      value={show}
      onChange={()=> setShow(state => !state)}

      />
      <label htmlFor="show">Exibir</label>
    </div>
    {
     show ? <Counter/> : null

    }
    <hr />

    
    </>
  )
}