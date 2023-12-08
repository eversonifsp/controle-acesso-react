import "./css/saida-style.css";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiClient from "../config/apiClient";

function Saida() {
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

    try {
      const response = await apiClient.post(
        `/registro_acesso_usuarios?prontuario_cpf=${valor.prontuario}`,
        {
          tipo: "saida",
        },
        {
          headers: { Authorization: storedToken },
        }
      );

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
    <div className="container-sair">
      <form className="form-sair" onSubmit={registraSaida}>
        <div className="line-sair">
          <div className="col-sair"> Registrar Saída </div>

          <div className="col-sair-logo">
            {" "}
            <img
              src={logoif}
              alt="Logo do Instituto Federal de Cubatão"
              className="logoif"
            />{" "}
          </div>
        </div>

        <div className="col-user-sair">
          <input
            type="text"
            className="form-control-sair"
            placeholder="Prontuario ou CPF"
            name="prontuario"
            onChange={valorSaida}
          ></input>
        </div>
        <div className="col-camera-sair">
          <button
            type="button"
            className="button-camera-sair"
            onClick={() => history("/LeitorSaida")}
          >
            {" "}
            <IoQrCodeOutline /> Ler QRcode{" "}
          </button>
        </div>

        <div className="line-button-sair">
          <div className="col-button-sair">
            <button type="submit" className="button-sair">
              {" "}
              Registrar
            </button>
          </div>

          <div className="col-button-voltar-sair">
            <button
              type="button"
              className="button-voltar-sair"
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

export default Saida;
