import "./css/entrada-style.css";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiClient from "../config/apiClient";

function Entrar() {
  const storedToken = localStorage.getItem("token");
  const history = useNavigate();

  const [valor, setValor] = useState({
    prontuario_cpf: "",
    nome: "",
    tipo: "",
    email: "",
  });

  const [registrado, setRegistrado] = useState("registrado");

  const valorEntrada = (e) => {
    setValor({ ...valor, [e.target.name]: e.target.value });
  };

  const registraEntrada = async (e) => {
    e.preventDefault();

    if (registrado == "registrado") {
      try {
        const response = await apiClient.post(
          `/registro_acesso_usuarios?prontuario_cpf=${valor.prontuario_cpf}`,
          {
            tipo: "entrada",
          },
          {
            headers: { Authorization: storedToken },
          }
        );
        if (response.status === 201) {
          toast.success("Entrada registrada com sucesso");
        }
      } catch (error) {
        toast.error("Prontuario ou CPF invalido!");
      }
    } else if (registrado == "nao_registrado") {
      try {
        const response = await apiClient.post(
          "/visitantes",
          {
            cpf: valor.prontuario_cpf,
            nome: valor.nome,
            email: valor.email,
          },
          {
            headers: { Authorization: storedToken },
          }
        );

        if (response.status === 201) {
          toast.success("Cadastro e entrada realizados com sucesso");
        }
      } catch (error) {
        toast.error("Cadastro Falhou!");
      }
    }
  };

  return (
    <div className="container-entrar">
      <form className="form-entrar" onSubmit={registraEntrada}>
        <div className="line-entrar">
          <div className="col-entrar"> Registrar Entrada </div>
          <div className="col-entrar-logo">
            {" "}
            <img
              src={logoif}
              alt="Logo do Instituto Federal de Cubatão"
              className="logoif"
            />{" "}
          </div>
        </div>

        <div className="col-user-entrar">
          <input
            type="text"
            className="form-control-entrar"
            placeholder="Prontuario ou CPF"
            name="prontuario_cpf"
            onChange={valorEntrada}
          ></input>
        </div>

        {registrado === "nao_registrado" && (
          <div className="campos-cadastrar" id="campos">
            <div className="col-name-entrar">
              <input
                type="text"
                className="form-control-entrar"
                placeholder="Nome"
                name="nome"
                onChange={valorEntrada}
              ></input>
            </div>

            <div className="col-email-entrar">
              <input
                type="text"
                className="form-control-entrar"
                placeholder="E-mail"
                name="email"
                onChange={valorEntrada}
              ></input>
            </div>
          </div>
        )}
        <div className="line-radio">
          <div className="line-line-radio">
            <div className="col-registrado">
              <input
                type="radio"
                className="form-radio"
                name="opcao"
                id="opc1"
                value="registrado"
                onChange={(e) => setRegistrado(e.target.value)}
                checked={registrado === "registrado"}
              ></input>
              <label for="opc1" className="reg">
                {" "}
                Registrado
              </label>
            </div>
          </div>

          <div className="line-line-radio">
            <div className="col-nao-registrado">
              <input
                type="radio"
                className="form-radio"
                name="opcao"
                id="opc2"
                value="nao_registrado"
                onChange={(e) => setRegistrado(e.target.value)}
                checked={registrado === "nao_registrado"}
              ></input>
              <label for="opc2" className="reg">
                {" "}
                Não Registrado{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="col-camera-entrar" id="campos">
          {registrado === "registrado" && (
            <button
              className="button-camera-entrar"
              type="button"
              onClick={() => history("/LeitorEntrada")}
            >
              {" "}
              <IoQrCodeOutline /> Ler QRcode{" "}
            </button>
          )}
        </div>

        <div className="line-button-entrar">
          <div className="col-button-entrar">
            <button className="button-entrar" type="submit">
              {" "}
              Registrar
            </button>
          </div>
          <div className="col-button-voltar-entrar">
            <button
              className="button-voltar-entrar"
              type="button"
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

export default Entrar;
