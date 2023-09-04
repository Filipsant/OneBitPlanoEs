export default function App(){
  return(
    <div className="app">
      <img src="/react.png" alt="logo do react" />
      <h1>React</h1>
      <p>A blibioteca para interfaces de usuários web</p>
      <div>
        <button>Aprenda React</button>
        <button>Referencia de API</button>
      </div>
      <hr />
      <h2>Crie interfaces de usuários de componentes </h2>
      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p>
      <hr />
      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React.</p>
      <hr />
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  )
}