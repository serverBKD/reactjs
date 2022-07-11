import { useState, useEffect } from "react"
import getCrypto from "../services/crypto"
import "../Styles/Sign.css"

export function Crypto() {
  const [crypto, setCrypto] = useState([]) //users es el array completo del fetch

  useEffect(() => {
    getCrypto().then(setCrypto)
  }, [])

  return (
    <div className="App">
      <p>Hola</p>
    </div>
  )
}
