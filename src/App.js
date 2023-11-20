import './style.css';
import logoif from './img/logoIF.png';

export default function App() {
  return (
    <div className="container">
      
        <form className="form-login">
        
          <fieldset className='fieldset-form-login'>

            <div className='line'>
              
                <div className='col-login'> Fazer Login </div>

                <div className='col-login-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>
            
            </div>  
            
            <div className="form-login-input">


              <div className='col-user'>
                <input type="text" className="form-control" placeholder="Usuário"></input>
              </div>

              <div className='col-pass'>
                <input type="password" className="form-control" placeholder="Senha"></input>
              </div>

              <div className='col-button'>
                <button className="button-login"> Entrar </button>
              </div>

            </div>

          </fieldset> 

        </form>

    </div>
  );
}
