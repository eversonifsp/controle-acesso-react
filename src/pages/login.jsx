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
  
  const [valor, setValor] = useState({
    prontuario: "",
    password: "",
  });
  const valorEntrada = (e) =>
  setValor({ ...valor, [e.target.name]: e.target.value });
  
  const loginUs = async (e) => {
    e.preventDefault();
    console.log(valor);
    try {
      const response = await apiClient.post("/login", {
        usuario: {
          prontuario: valor.prontuario,
          password: valor.password,
        },
      });
      const token = response.headers.authorization;
      
      if (response.status === 200) {
        // Captura o token no headers
        // Armazena no localStorage
        localStorage.setItem("token", token);
        console.log("Token:", token);
        console.log("Login bem-sucedido!");

        const storedToken = localStorage.getItem("token");
          if (storedToken) {
            history("/portaria");
          }
      } else {
        toast.error("Usuario ou senha invalida!");
      }
    } catch (error) {
      toast.error("Usuario ou senha invalida!");
    }
    
  };

  return (
    {loginUs},
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
  );
}

export default Login;
