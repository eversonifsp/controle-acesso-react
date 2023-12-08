import "./css/adm-style.css";

import logoif from "../img/logoIF.png";
import React from "react";

import { useNavigate } from "react-router-dom";

function Adm() {
  const navigate = useNavigate();

  return (
    <div className="container-adm">
      <div className="line-adm">
        <div className="col-adm-logo">
          {" "}
          <img
            src={logoif}
            alt="Logo do Instituto Federal de Cubatão"
            className="logoif"
          />{" "}
        </div>
      </div>

      <div className="col-fluxo">
        <button className="button-fluxo" onClick={() => navigate("/registro")}>
          Registros
        </button>
      </div>

      <div className="col-consulta">
        <button
          className="button-consulta"
          onClick={() => navigate("/gerenciar")}
        >
          {" "}
          Gerenciar Usuários{" "}
        </button>
      </div>

      <div className="col-consulta">
        <button
          className="button-consulta"
          onClick={() => navigate("/adm/alimentar_base")}
        >
          Alimentar Base
        </button>
      </div>
    </div>
  );
}

export default Adm;
