import './css/entrada-style.css'
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, {useState} from "react";

function Entrar() {

  const [valor, setValor] = useState({
    cb_cpf: "",
  });
  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const registraEntrada = async (e) => {
    // Bloquear o recarregamento da página
    e.preventDefault();
    {console.log(valor);}
  };

  return (

    <div className="container-entrar">
  
  <form className="form-entrar" onSubmit={registraEntrada}>

<div className='line-entrar'>
  
    <div className='col-entrar'> Registrar Entrada </div>

    <div className='col-entrar-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>

</div>  

  <div className='col-user-entrar'>
    <input type="text" className="form-control-entrar" placeholder="Prontuario ou CPF" name="cb_cpf" onChange={valorEntrada}></input>
  </div>

 <div className='col-camera-entrar'>
    <button className="button-camera-entrar" type='button'> <IoQrCodeOutline/>  Ler QRcode  </button>
 </div>

<div className='line-button-entrar'>
  <div className='col-button-entrar'>
      <button className='button-entrar' type='submit'> Registrar</button>
  </div>

  <div className='col-button-voltar-entrar'>
      <button className='button-voltar-entrar' type='button'> <IoArrowBackCircle /> Voltar</button>
  </div>
</div>

</form>

    </div>
  );
}

export default Entrar;
