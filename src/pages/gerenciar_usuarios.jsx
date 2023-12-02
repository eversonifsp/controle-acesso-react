import "./css/gerenciar.css";
import { FaCamera } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";

function Gerenciar() {
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
    <div className="container-gerenciar">

    <div className="line-adm">
        <div className="col-gerenciar"> <h2>Gerenciar Usuários</h2> </div>
        <div className='col-gerenciar-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>
    </div>

       
    </div>
  );
}

export default Gerenciar;
