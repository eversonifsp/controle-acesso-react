import './css/login.css';
import logoif from '../img/logoIF.png';

function Login() {
  return (
    <div className="container-login">
      
        <form className="form-login">

            <div className='line-login'>
              
                <div className='col-login'> Fazer Login </div>

                <div className='col-login-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>
            
            </div>  
            

              <div className='col-user-login'>
                <input type="text" className="form-control-login" placeholder="Usuário"></input>
              </div>

              <div className='col-pass-login'>
                <input type="password" className="form-control-login" placeholder="Senha"></input>
              </div>

              <div className='col-button-login'>
                <button className="button-login"> Entrar </button>
              </div>


        </form>

    </div>
  );
}

export default Login;


