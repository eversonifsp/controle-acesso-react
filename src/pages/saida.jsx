import './css/saida-style.css'
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from '../img/logoIF.png';
import { Link } from "react-router-dom";
import React from 'react'

function Entrar() {
  return (
    <div className="container-sair">
         <form className="form-sair">

<div className='line-sair'>
  
    <div className='col-sair'> Registrar Saída </div>

    <div className='col-sair-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>

</div>  

  <div className='col-user-sair'>
    <input type="text" className="form-control-sair" placeholder="Prontuario ou CPF"></input>
  </div>

 <div className='col-camera-sair'>
    <button className="button-camera-sair"> <IoQrCodeOutline/>  Ler QRcode  </button>
 </div>

<div className='line-button-sair'>
  <div className='col-button-sair'>
      <button className='button-sair'> Registrar</button>
  </div>

  <div className='col-button-voltar-sair'>
      <button className='button-voltar-sair'> <IoArrowBackCircle /> Voltar</button>
  </div>
</div>

</form>
    </div>
  );
}

export default Entrar;