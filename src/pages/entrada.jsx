import './css/entrada-style.css'
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function Entrar() {

  const [valor, setValor] = useState({
    cb_cpf: "",
  });
  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const registraEntrada = async (e) => {
    // Bloquear o recarregamento da página
    if(valor.cb_cpf == ""){
      toast.error("prontuario ou cpf invalido")
    }else{
      toast.success("entrada registrada com sucesso")
    }

    e.preventDefault();
    {console.log(valor);}
  };
  const history = useNavigate();


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

  
<div className='campos-cadastrar' id='campos'>

  <div className='col-name-entrar'>
    <input type="text" className="form-control-entrar" placeholder="Nome" name="" onChange={valorEntrada}></input>
  </div>

  <div className='col-tel-entrar'>
    <input type="text" className="form-control-entrar" placeholder="Telefone" name="" onChange={valorEntrada}></input>
  </div>

  <div className='col-email-entrar'>
    <input type="text" className="form-control-entrar" placeholder="E-mail" name="" onChange={valorEntrada}></input>
  </div>

</div>

<div className='line-radio'>
  <div className='line-line-radio'>
          <div className="col-registrado"> 
                  
                  <input type="radio" className="form-radio" name="opcao" id="opc1" value="registrado"></input>
                  <label for="opc1" className='reg'>  Registrado</label>
          </div>
  </div>

  <div className='line-line-radio'>
          <div className="col-nao-registrado">   
                  
                  <input type="radio" className="form-radio" name="opcao" id="opc2" value="nao_registrado"></input> 
                  <label for="opc2" className='reg'>  Não Registrado </label>
          </div>
    </div>
  </div>

 <div className='col-camera-entrar'>
    <button className="button-camera-entrar" type='button'> <IoQrCodeOutline/>  Ler QRcode  </button>
 </div>

<div className='line-button-entrar'>
  <div className='col-button-entrar'>
      <button className='button-entrar' type='submit'> Registrar</button>
  </div>

  <ToastContainer />
  <div className='col-button-voltar-entrar'>
      <button className='button-voltar-entrar' type='button' onClick={() =>     history('/portaria')}> <IoArrowBackCircle /> Voltar</button>
  </div>
</div>

</form>

    </div>
  );
}

export default Entrar;
