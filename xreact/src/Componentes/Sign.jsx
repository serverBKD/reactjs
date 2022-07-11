import { useState, useEffect } from "react"
import { getUsers } from "../services/users"
import "../Styles/Sign.css"

export function Sign() {
  const [users, setUsers] = useState([]) //users es el array completo del fetch

  useEffect(function () {
    console.log(getUsers().then(setUsers))
  }, [])

  return (
    <div className="App">
      <ul>
        {users.map((users) => {
          return (
            <li key={users.id}>
              {users.title}
              {users.completed}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
