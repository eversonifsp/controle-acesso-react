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

      <table>
          <thead>
            <tr>
              <th> <h2>Prontuário</h2> </th>
              <th><h2>Nome</h2></th>
              <th><h2>Telefone</h2></th>
              <th><h2>E-mail</h2></th>
              <th><h2>Tipo</h2></th>
              <th><h2>Ações</h2></th>
            </tr>
          </thead>

        <tbody>
          <tr>
              <td> <p> CB000000X </p> </td>
              <td> <p> Ronaldo Fenômeno </p> </td>
              <td> <p>13 000000000 </p> </td>
              <td> <p>ifsp@email.com</p> </td>
              <td> <p>ADM</p> </td>
              <td> <p>Alterar/Excluir</p> </td>
          </tr>

          <tr>
              <td> <p> CB000000X </p> </td>
              <td> <p> Romário </p> </td>
              <td> <p>13 000000000 </p> </td>
              <td> <p> RomarioGAmes@email.com</p> </td>
              <td> <p>Porteiro</p> </td>
              <td> <p>Alterar/Excluir</p> </td>
          </tr>

        </tbody>
      </table>

    </div>


   
    </main>

    <footer>

    <div className='line-button-gerenciar'>
  <div className='col-button-criar'>
      <button className='button-criar' type='submit'> Criar Usuário</button>
  </div>

  <div className='col-button-voltar-gerenciar'>
      <button className='button-voltar-gerenciar' type='button'> <IoArrowBackCircle /> Voltar</button>
  </div>
</div>

    </footer>
   </fragment>
  );
}

export default Gerenciar;
