import "../style.css";
import "./css/cadastro-style.css";
import { FaCamera } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";

function Cadastro() {
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
    {console.log(valor);}
  };

  return (
    <div className="container">
      <form className="form-login" onSubmit={AddVisitante}>
        <div className="line">
          <div className="col-login"> Cadastrar o visitante </div>

          <div className="col-login-logo">
            {" "}
            <img
              src={logoif}
              alt="Logo do Instituto Federal de Cubatão"
              className="logoif"
            />{" "}
          </div>
        </div>

        <div className="form-login-input">
          <div className="col-user">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              name="nome"
              onChange={valorEntrada}
            ></input>
          </div>

          <div className="col-user">
            <input
              type="text"
              className="form-control"
              placeholder="CPF"
              name="cpf"
              onChange={valorEntrada}
            ></input>
          </div>

          <div className="col-user">
            <input
              type="text"
              className="form-control"
              placeholder="E-mail"
              name="email"
              onChange={valorEntrada}
            ></input>
          </div>

          <div className="col-user">
            <input
              type="text"
              className="form-control"
              placeholder="Telefone"
              name="telefone"
              onChange={valorEntrada}
            ></input>
          </div>
          <div className="col-button-foto">
          </div>
            <button type="button" className="button-camera">
              {" "}
              Foto do Visitante <FaCamera />
            </button>
          <div>
            <div className="col-button">
              <button type="submit"className="button-registro">
                {" "}
                Cadastrar <FaUserPlus />{" "}
              </button>
            </div>
            <div className="col-button-voltar">
              <button type="button" className="button-voltar">
                {" "}
                <IoArrowBackCircle />{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
