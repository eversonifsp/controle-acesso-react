import { Link } from "react-router-dom";
import './css/portaria-style.css'
import logoif from '../img/logoIF.png';


const Portaria= () =>{
  return (
       
    <view>
        <div className="container-portaria">

        <div className="line-portaria">
            <div className='col-portaria-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>
        </div>

            <div className="">
                <Link to="/entrar">
                    <button className="button-entrada"> Registrar entrada</button>
                </Link>
            </div>
            
            <div className="">
                <Link to = "/sair">
                    <button className="button-saida"> Registrar Saída </button>
                </Link>
            </div>

            <div>
                <Link to = "/">
                    <button className="button-cae"> CAE </button>
                </Link>
            </div>
        </div>
                
    </view>
    )
}

export default Portaria