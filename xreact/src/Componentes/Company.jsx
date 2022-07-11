import { useState, useEffect } from "react"
import { getCompany } from "../services/company"
import "../Styles/Sign.css"

export function Company() {
  const [company, setCompany] = useState({}) //users es el array completo del fetch

  useEffect(() => {
    getCompany()
      .then(setCompany)
      .then((company) => console.log(company.data))
  }, [])

  return (
    <>
      <ul>
        {Object.entries(company).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </>
  )
}
