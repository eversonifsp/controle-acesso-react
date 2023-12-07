import "./css/cadastro-style.css";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import apiClient from "../config/apiClient";

function Cadastrar() {

  const storedToken = localStorage.getItem("token");
  console.log(storedToken);
  const history = useNavigate();

  const [valor, setValor] = useState({
    prontuario: "",
  });
  const valorSaida = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const registraSaida = async (e) => {
    e.preventDefault();
    {
      console.log(valor);
    }
    // Bloquear o recarregamento da página
    // if(valor.cb_cpf == ""){
    //   toast.error("prontuario ou cpf invalido")
    // }else{
    //   toast.success("entrada registrada com sucesso")
    // }
    try {
      const response = await apiClient.post(
        `/registro_acesso_usuarios?prontuario=${valor.prontuario}`,
        {
          tipo: "saida",
        },
        {
          headers: { Authorization: storedToken },
        } //{
        //   params: {"prontuario": valor.prontuario}
        // }
      );

      console.log(valor.prontuario);
      if (response.status === 201) {
        toast.success("Saida registrada com sucesso");
      } else {
        toast.error("Usuario ou senha invalida!");
      }
    } catch (error) {
      toast.error("Usuario ou senha invalida!");
    }
  };
  return (
    <div className="container-cadastrar">
      <form className="form-cadastrar" onSubmit={registraSaida}>
        <div className="line-cadastrar">
          <div className="col-cadastrar"> Cadastrar </div>

          <div className="col-cadastrar-logo">
            {" "}
            <img
              src={logoif}
              alt="Logo do Instituto Federal de Cubatão"
              className="logoif"
            />{" "}
          </div>
        </div>

        <div className="col-user-cadastrar">
          <input type="text" className="form-control-cadastrar" placeholder="Prontuario" name="prontuario" onChange={valorSaida}></input>
        </div>

        <div className="col-nome-cadastrar">
          <input type="text" className="form-control-cadastrar" placeholder="Nome" name="Nome" onChange={valorSaida}></input>
        </div>

        <div className="col-tel-cadastrar">
          <input type="text" className="form-control-cadastrar" placeholder="Telefone" name="Telefone" onChange={valorSaida}></input>
        </div>

        <div className="col-email-cadastrar">
          <input type="email" className="form-control-cadastrar" placeholder="E-mail" name="E-mail" onChange={valorSaida}></input>
        </div>



        <div className="line-radio">

        <div className="line-line-radio-cadastrar">
                <div className="col-tipo-adm">
              <input type="radio" className="form-radio-cadastro" name="opcao" id="opc1" value="adm"></input>
              <label for="opc1" className="tipo">
                {" "}
                ADM
              </label>
            </div>
          </div>

          <div className="line-line-radio-cadastrar">
            <div className="col-tipo-porteiro">
              <input type="radio" className="form-radio-cadastro" name="opcao" id="opc2" value="porteiro"></input>
              <label for="opc2" className="tipo">
                {" "}
                 Porteiro{" "}
              </label>
            </div>
          </div>

        </div>

        <div className="line-button-cadastrar">
          <div className="col-button-cadastrar">
            <ToastContainer />
            <button type="submit" className="button-cadastrar">
              {" "}
              Registrar
            </button>
          </div>

          <div className="col-button-voltar-cadastrar">
            <button
              type="button"
              className="button-voltar-cadastrar"
              onClick={() => history("/portaria")}
            >
              {" "}
              <IoArrowBackCircle /> Voltar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cadastrar;
