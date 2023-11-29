import './css/login.css';
import logoif from '../img/logoIF.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


function Login() {
        
  const [valor, setValor] = useState({
    prontuario: '',
    password: ''
  });
  const history = useNavigate();
  const valorEntrada = (e) => setValor({ ...valor, [e.target.name]: e.target.value});

  const loginUs = async (e) => {
    e.preventDefault();
    console.log(valor); // Verifique se os dados do input estão corretos no console
    try {
      const response = await axios.post('http://localhost:3000/login', {
        usuario: {  // Adapte para a estrutura esperada pelo seu backend
          prontuario: valor.prontuario,
          password: valor.password
        }
      });

      if (response.status === 200) {
        console.log('Login bem-sucedido!');
        // Redirecione para a rota desejada
        history('/portaria')
      } else {
        toast.error("Usuario ou senha invalida!")
        // Adicione código para lidar com falha no login, se necessário
      }
    } catch (error) {
      toast.error("Usuario ou senha invalida!")
      // Adicione código para lidar com erros, se necessário
    }
  };
  
  
  
  

  return (
    <div className="container-login">
      
        <form className="form-login" onSubmit={loginUs}>

            <div className='line-login'>
              
                <div className='col-login'> Fazer Login </div>

                <div className='col-login-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>
            
            </div>

              <div className='col-user-login'>
                <input type="text" name="prontuario"className="form-control-login" placeholder="Usuário" onChange={valorEntrada}></input>
              </div>

              <div className='col-pass-login'>
                <input type="password" name="password" className="form-control-login" placeholder="Senha" onChange={valorEntrada}></input>
              </div>

              <ToastContainer />
              <div className='col-button-login'>
                <button type='submit' className="button-login"> Entrar </button>

              </div>


        </form>

    </div>


  );
}


export default Login;


