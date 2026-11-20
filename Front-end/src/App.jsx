import { useState } from "react"
import { useEffect } from "react"


function App() {
  const [clientes, setCliente] = useState([])
  useEffect(() => {
    async function getClientes() {
      const response = await fetch('http://localhost:3000/clientes')
      const data = await response.json()
      setCliente(data)
    }
    getClientes()
  }, [])
  return (
    <>
      {clientes.map(cliente => (
        <div key={cliente.nome}>
          <h4>{cliente.nome}</h4>
          <p>{cliente.agendamento}</p>
        </div>
      )
      )
      }
    </>
  )
}
export default App