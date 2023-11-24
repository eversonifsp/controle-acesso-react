
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
    <div className="container-cadastro">
      <form className="form-cadastro" onSubmit={AddVisitante}>
        <div className="line-cadastro">
          <div className="col-cadastro"> Cadastrar visitante </div>

          <div className="col-cadastro-logo">
            <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className="logoif" />
          </div>
        </div>

          <div className="col-nome-cadastro">
              <input type="text" className="form-control-cadastro" placeholder="Nome" name="nome" onChange={valorEntrada}></input>
          </div>

          <div className="col-user-cadastro">
            <input type="text" className="form-control-cadastro" placeholder="CPF" name="cpf" onChange={valorEntrada}></input>
          </div>

        <div className='line-contato-cadastro'>
          <div className="col-email-cadastro"> 
              <input type="text" className="form-control-cadastro" placeholder="E-mail" name="email" onChange={valorEntrada}></input>
          </div>

          <div className="col-tel-cadastro"> 
              <input type="text" className="form-control-cadastro" placeholder="Telefone" name="telefone" onChange={valorEntrada}></input>
          </div>
        </div>

          <div className="col-foto-cadastro">
              <button type="button" className="button-camera-cadastro">{" "} <FaCamera/> Foto do Visitante</button>
          </div>

          <div className='line-button-cadastro'>
            <div className="col-button-cadastro">
                <button type="submit"className="button-registro-cadastro">{" "} <FaUserPlus /> Cadastrar {" "}</button>
            </div>

            <div className="col-button-voltar-cadastro"> 
                <button type="button" className="button-voltar-cadastro"> {" "} <IoArrowBackCircle /> Voltar {" "} </button>
            </div>
          </div>
      </form>
    </div>
  );
}

export default Cadastro;
