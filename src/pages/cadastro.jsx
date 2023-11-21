import '../style.css';
import './css/cadastro-style.css';
import { FaCamera } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from '../img/logoIF.png';
import { Link } from "react-router-dom";
import React from 'react'
import Secretaria from './secretaria';

function Cadastro() {
  return (
    <div className="container">
         <form className="form-login">

<div className='line'>
  
    <div className='col-login'> Registrar Saida </div>

    <div className='col-login-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>

</div>  

<div className="form-login-input">


  <div className='col-user'>
    <input type="text" className="form-control" placeholder="Nome"></input>
  </div>
  
  <div className='col-user'>
    <input type="text" className="form-control" placeholder="CPF"></input>
  </div>
  
  <div className='col-user'>
    <input type="text" className="form-control" placeholder="E-mail"></input>
  </div>
  
  <div className='col-user'>
    <input type="text" className="form-control" placeholder="Telefone"></input>
  </div>
  <div className='col-button-foto'>
    <button className="button-camera"> Foto do Visitante <FaCamera /></button>
  </div>
<div>
    <div className='col-button'>
        <button className="button-registro" > Cadastrar <FaUserPlus /> </button>
    </div>
    <div className='col-button-voltar'>
      <button className='button-voltar'> <IoArrowBackCircle /> </button>
  </div>
</div>

</div>

</form>
    </div>
  );
}

export default Cadastro;