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
    <fragment>
<header>
    <div className="line-gerenciar">
        <div className="col-gerenciar"> <h2>Gerenciar Usuários</h2> </div>
        <div className='col-gerenciar-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>
    </div>
  </header>


    <main>

    <div className="container-usuario">

<div className="usuario">

      <div className="line-usuario">
          <div className="col-prontuario-usuario">
              <p><strong>Protuário/CPF:</strong> CB000000X </p>
          </div>
      </div>

      <div className="line-usuario">
          <div className="col-name-usuario">
              <p><strong>Nome:</strong> Ronaldo Gaúcho </p>
          </div>
        </div>

      <div className="line-usuario">
          <div className="col-telefone-usuario">
              <p> <strong>Telefone:</strong> 13 000000000 </p>
          </div>
        </div>

      <div className="line-usuario">
          <div className="col-email-usuario">
              <p> <strong>E-mail:</strong>  ifsp@email.com  </p>
          </div>
        </div>

      <div className="line-usuario">
          <div className="col-tipo-usuario">
              <p> <strong>Tipo de Usuário:</strong> Portas </p>
          </div>
        </div>
        
    
    </div>
</div>
    </main>

    <footer></footer>
   </fragment>
  );
}

export default Gerenciar;
