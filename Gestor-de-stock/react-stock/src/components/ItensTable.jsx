import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";



export default function ItensTable(){
    const { itens } = useStock();
    return(
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {itens.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity} unid.</td>
            <td>{item.category}</td>
            <td>
             <Link to={`/itens/${item.id}`} className="button is primary is-small">
                Ver
             </Link>
                
            
              <Link to={`/itens/${item.id}/update`} className="button is-small">
                 Atualizar 
              </Link>
              <DeleteButton itemId={item.id} itemName={item.name}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
}