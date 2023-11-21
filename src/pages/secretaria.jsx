import '../style.css';
import './css/cadastro-style.css';
import { FaCamera } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from '../img/logoIF.png';
import { Link } from "react-router-dom";
import React from 'react'

function Secretaria() {
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
    <input type="text" className="form-control" placeholder="Prontuario"></input>
  </div>
<div className='col-user'>
  <label className="form-label"></label>
  <input type="file" className='form-control' accept="application/pdf" />
</div>
<div className='col-user'>
  <label className="form-label"></label>
  <input type="date" className='form-control' />
  <input type="time" className='form-control' />

</div>
  <div className='col-button-foto'>
    <button className="button-camera"> Foto da autorizção <FaCamera /></button>
  </div>
<div>
    <div className='col-button'>
        <button className="button-registro" > Liberar saida </button>
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

export default Secretaria;