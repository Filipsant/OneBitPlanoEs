import PropTypes from "prop-types"
import useStock from "../hooks/useStock"
import { useNavigate } from "react-router-dom"

DeleteButton.PropTypes = {
    itemId : PropTypes.number,
    itemName: PropTypes.string
}

export default function DeleteButton({itemId,itemName}){
    const {deleteItem} = useStock()
    const navegate = useNavigate()
    const handleDelete = ()=>{
        if(confirm(`Tem certeza que deseja excluir ${itemName} ?`)){
           deleteItem(itemId)
           navegate("/itens")
        }
    }
    return(
        <button
        className="button is-danger is-small"
        onClick={handleDelete}
        >
            Excluir
        </button>
    )
}