import React, { Fragment } from "react"
import ReactDOM from "react-dom/client"
// import { Sign } from "./Componentes/Sign"
import { Crypto } from "./Componentes/Crypto"
// import { Company } from "./Componentes/Company"
import "./Styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <Crypto />
  </Fragment>
)
