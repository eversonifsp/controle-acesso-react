import "./css/entrada-style.css";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { FaCamera } from "react-icons/fa6";
import apiClient from "../config/apiClient";

function Entrar() {
  const storedToken = localStorage.getItem("token");
  console.log(storedToken);
  const history = useNavigate();

  const [valor, setValor] = useState({
    prontuario: "",
    cpf: "",
    nome: "",
    telefone: "",
    email: "",
    foto: "",
  });

  const [registrado, setRegistrado] = useState("registrado");

  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const registraEntrada = async (e) => {
    e.preventDefault();

    if (registrado == "nao_registrado") {
      try {
        console.log(storedToken);

        const response = await apiClient.post(
          `/registro_acesso_usuarios?prontuario=${valor.prontuario}`,
          {
            tipo: "entrada",
          },
          {
            headers: { Authorization: storedToken },
          }
        );

        console.log(valor.prontuario);
        if (response.status === 201) {
          toast.success("Entrada registrada com sucesso");
        }
      } catch (error) {
        toast.error("Prontuario invalido!");
      }
    } else if (registrado == "registrado") {
      try {
        // define rota e metodo de requisição do cadastro
        const response = await apiClient.post(
          "/visitantes",
          {
            // envia para a API os valores dos campos
            cpf: valor.cpf,
            nome: valor.nome,
            telefone: valor.telefone,
            email: valor.email,
          },
          {
            headers: { Authorization: storedToken },
          }
        );

        // se houver sucesso segue o codigo
        if (response.status === 201) {
          toast.success("Cadastro e entrada realizados com sucesso");
        }
      } catch (error) {
        toast.error("Cadastro Falhou!");
      }
    }
  };

  // const handleScan = (result, error) => {
  //   if (!!result) {
  //     alert("Prontuário: ${result}\nAluno liberado!");
  //     setProntuario(result);
  //   }

  //   if (!!error) {
  //     console.info(error);
  //   }
  // };

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
            name="cpf"
            onChange={valorEntrada}
          ></input>
        </div>

        {registrado === "registrado" && (
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

            <div className="col-tel-entrar">
              <input
                type="text"
                className="form-control-entrar"
                placeholder="Telefone"
                name="telefone"
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
                Não Registrado
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
                Registrado{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="col-camera-entrar" id="QRcode">
          <button
            className="button-camera-entrar"
            type="button"
            onClick={() => history("/FotoVisitante")}
          >
            {" "}
            <FaCamera /> Foto visitante{" "}
          </button>
        </div>

        <div className="col-camera-entrar" id="campos">
          <button
            className="button-camera-entrar"
            type="button"
            onClick={() => history("/LeitorEntry")}
          >
            {" "}
            <IoQrCodeOutline /> Ler QRcode{" "}
          </button>
        </div>

        <div className="line-button-entrar">
          <div className="col-button-entrar">
            <button className="button-entrar" type="submit">
              {" "}
              Registrar
            </button>
          </div>

          <ToastContainer />
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
