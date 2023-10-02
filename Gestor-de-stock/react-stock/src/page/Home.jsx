import useStock from "../hooks/useStock"
import {Link} from "react-router-dom"

export default function Home(){
    const { itens } = useStock()

    const diversity = itens.length
    const iventaryTotal = itens.reduce((sum, item) => +sum + +item.quantity, 0)

    const today = new Date()
    const limitDate = new Date()

    limitDate.setDate(limitDate.getDate() - 10)
    const recentItens = itens.filter((item)=> item.createdAt >= limitDate && item.createdAt <= today)

    const recentTotal = recentItens.length

    const lowQuantityItens = itens.filter((item)=> item.quantity < 10)

    const lowQuantityTotal = lowQuantityItens.length

    return(
        <main>
            <h1>Dashboard</h1>
            <div className="row">
                <div className="dashboard-card">
                    Divercidade de itens
                    <span>{diversity}</span>
                </div>
                <div className="dashboard-card">
                     Inventario Total
                    <span>{iventaryTotal}</span>
                </div>
                <div className="dashboard-card">
                     Itens Recentes 
                    <span>{recentTotal}</span>
                </div>
                <div className="dashboard-card">
                    Itens Acabando no Stock
                    <span>{lowQuantityTotal}</span>
                </div>
            </div>
            <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr><th>Itens Recentes</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
              {recentItens.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td><Link to={`/itens/${item.id}`} className="button is-small">Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Itens acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lowQuantityItens.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><Link to={`/itens/${item.id}`} className="button is-small">Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </main>
    )
}