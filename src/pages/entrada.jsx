import './css/entrada-style.css'
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from '../img/logoIF.png';
import React from 'react'
import { Link } from 'react-router-dom';

function Entrar() {
  return (
    <div className="container">
         <form className="form-login">

<div className='line'>
  
    <div className='col-login'> Registrar Entrada </div>

    <div className='col-login-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>

</div>  

<div className="form-login-input">


  <div className='col-user'>
    <input type="text" className="form-control" placeholder="Prontuario ou CPF"></input> <button className='button-login'> Registrar</button>
  </div>

 <div className=''>
    <button className='camera'> </button>
 </div>
  <div className='col-button'>
    <button className="button-camera"> Ler QRcode <IoQrCodeOutline /></button>
  </div>
  <div className='col-button-voltar'>
      <button className='button-voltar'> <IoArrowBackCircle /> </button>
  </div>

</div>

</form>
    </div>
  );
}

export default Entrar;