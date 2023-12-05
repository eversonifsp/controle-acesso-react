import "./css/gerenciar.css";
import { FaCamera } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";
/*import Modal from "../componentes/Modal"*/;

function Gerenciar () {
 
    const [isModalVisible, setIsModalVisible] =useState(false);

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
              <td> <button class="btn-modal" onClick={() => setIsModalVisible(true)} >Alterar|Excluir</button> </td>
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

    

   {isModalVisible ? 
   
<div id="dv-modal-user" class="modal-user">
        <div class="modal-usuario">

          <div class="modal-user-header">
                <h2>Alterar Cadastro</h2>
            </div>

            <div class="modal-user-body">

            <div className='col-user-a'>
                <input type="text" name="usuario"className="form-control-a" placeholder="Usuário"></input>
            </div>

            <div className='col-tel-a'>
                <input type="text" name="tel"className="form-control-a" placeholder="Telefone"></input>
            </div>

            <div className='col-email-a'>
                <input type="text" name="email"className="form-control-a" placeholder="E-mail"></input>
            </div>

            <div className='col-tipo-a'>
                <input type="text" name="tipo"className="form-control-a" placeholder="Tipo"></input>
            </div>

          <div className="line-button-alterar">
            <div className='col-btn-alterar'>
                <button className="btn-alterar"> Alterar </button>
            </div>

            <div className='col-btn-excluir'>
                <button className="btn-excluir"> Excluir </button>
            </div>
          </div>

            </div>  

            <div class="modal-user-footer">
                <button class="btn-modal-user" onClick={() => setIsModalVisible(false)}> Fechar </button>
            </div>

          </div>    
    </div>
   
   
   :null} 

<div className='line-button-gerenciar'>
  <div className='col-button-criar'>
      <button className='button-criar' type='submit'> Criar Usuário</button>
  </div>

  <div className='col-button-voltar-gerenciar'>
      <button className='button-voltar-gerenciar' type='button'> <IoArrowBackCircle /> Voltar</button>
  </div>
</div>
    </main>

    <footer>

  

    </footer>
   </fragment>
  );
}

export default Gerenciar;
