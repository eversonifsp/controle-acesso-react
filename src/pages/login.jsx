import "./css/login.css";
import logoif from "../img/logoIF.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import apiClient from "../config/apiClient";
function Login() {
  const history = useNavigate();

  // monitorsa valor do prontuario e password
  const [valor, setValor] = useState({
    prontuario: "",
    password: "",
  });
  
  // passar valor dos inputs para a const "valor"
  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  // meotodo de login e outros
  const loginUs = async (e) => {
    //impede o reload da pagina ao finalizar a digitação do input
    e.preventDefault();
    // tenta fazer a requisição para api
    try {
      // define rota e metodo de requisição do login
      const response = await apiClient.post("/login", {
        // envia para a API os valores dos campos
        usuario: {
          prontuario: valor.prontuario,
          password: valor.password,
        },
      });
      // Captura o token
      const token = response.headers.authorization;
      // Captura o tipo de usuario
      const userType = response.data.tipo;

      // se houver sucesso segue o codigo
      if (response.status === 200) {
        // Armazena no localStorage
        localStorage.setItem("token", token);
        // passa o token do localStorage para uma constante
        const storedToken = localStorage.getItem("token");
        console.log()
        // apos sucesso verifica o tipo do usuario e então redireciona para a devida pagina 
        if (storedToken && (userType == "admin" || userType == "porteiro")) {
          history("/portaria");
        } else {
          toast.error("Usuario não autorizado!");
        }
      } else {
        toast.error("Usuario ou senha invalida!");
      }
    } catch (error) {
      toast.error("Usuario ou senha invalida!");
    }
  };

  return (
    { loginUs },
    (
      <div className="container-login">
        <form className="form-login" onSubmit={loginUs}>
          <div className="line-login">
            <div className="col-login"> Fazer Login </div>

            <div className="col-login-logo">
              {" "}
              <img
                src={logoif}
                alt="Logo do Instituto Federal de Cubatão"
                className="logoif"
              />{" "}
            </div>
          </div>

          <div className="col-user-login">
            <input
              type="text"
              name="prontuario"
              className="form-control-login"
              placeholder="Usuário"
              onChange={valorEntrada}
            ></input>
          </div>

          <div className="col-pass-login">
            <input
              type="password"
              name="password"
              className="form-control-login"
              placeholder="Senha"
              onChange={valorEntrada}
            ></input>
          </div>

          <ToastContainer />
          <div className="col-button-login">
            <button type="submit" className="button-login">
              {" "}
              Entrar{" "}
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default Login;
