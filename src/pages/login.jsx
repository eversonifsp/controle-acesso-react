import './css/login.css';
import logoif from '../img/logoIF.png';
import { useState } from 'react';


function Login() {
        
  const [valor, setValor] = useState({
    usuario: '',
    password: ''
    });
  const valorEntrada = (e) => setValor({ ...valor, [e.target.name]: e.target.value});

  const loginUs = async (e) => {

    // Bloquear o recarregamento da página
    e.preventDefault();
    {console.log(valor)}
  }

  return (
    <div className="container-login">
      
        <form className="form-login" onSubmit={loginUs}>

            <div className='line-login'>
              
                <div className='col-login'> Fazer Login </div>

                <div className='col-login-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>
            
            </div>

              <div className='col-user-login'>
                <input type="text" name="usuario"className="form-control-login" placeholder="Usuário" onChange={valorEntrada}></input>
              </div>

              <div className='col-pass-login'>
                <input type="password" name="password" className="form-control-login" placeholder="Senha" onChange={valorEntrada}></input>
              </div>

              <div className='col-button-login'>
                <button type='submit' className="button-login"> Entrar </button>

              </div>


        </form>

    </div>


  );
}


export default Login;


