import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({})

StockContextProvider.propTypes = {
    children: PropTypes.node
}

export function StockContextProvider({children}){
    const  [itens, setItens] = useState(() =>{
     const storedItens = localStorage.getItem('obc-react-stock')
     if(!storedItens) return[]
     const itens = JSON.parse(storedItens)
     itens.forEach((item) => {
        item.createdAt = new Date(item.createdAt)
        item.updatedAt = new Date(item.updatedAt)
     })
     return itens
   })
    
    

    const addItem = (item) =>{
        setItens(currentState => {
            const updatedItens = [item, ...currentState]
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItens))
            return updatedItens
        })

        
    }

    const deleteItem = (itemId) =>{
        setItens(currentState => {
            const updatedItens = currentState.filter(item => item.id !== itemId)
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItens))
            return updatedItens
        })
    }
    const stock = {
        itens,
        addItem,
        deleteItem
       
    }
    
    return(
        <StockContext.Provider value={stock}>
           {children} 
        </StockContext.Provider>
    )
}