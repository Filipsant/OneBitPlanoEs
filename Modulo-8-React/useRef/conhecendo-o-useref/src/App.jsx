import { useRef } from "react"
import { useState } from "react"
import RefExample from "./RefExample"

export default function App(){
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = ()=>{
    alert(`
      Variavel: ${variable}
      Ref: ${ref.current}
      State:${state}
    `)
  }

  return(
    <div>
      <h2>Exemplo de useref com o Dom</h2>
      <RefExample/>
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>Variavel: {variable}</p>
      <p>Ref:{ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Aumentar a variavel</button>
      <button onClick={()=> ref.current++}>Aumentar a Ref</button>
      <button onClick={()=> setState(state => state + 1)}>Aumentar o State</button>
      <hr />
      <button onClick={showValues}>Exibir Valores</button>
     
    </div>
  )
}