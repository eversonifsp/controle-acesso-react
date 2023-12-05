import "./css/adm-style.css";
import { FaCamera } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";

function Adm() {
  const [valor, setValor] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
  });
  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const AddVisitante = async (e) => {
    // Bloquear o recarregamento da página
    e.preventDefault();
    {
      console.log(valor);
    }
  };

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
        <button className="button-fluxo">Fluxo de entrada e saída</button>
      </div>

      <div className="col-consulta">
        <button className="button-consulta"> Gerenciar Usuários </button>
      </div>
    </div>
  );
}

export default Adm;
