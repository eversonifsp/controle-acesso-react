import "./css/registro-style.css";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiClient from "../config/apiClient";

function Registro() {
  const history = useNavigate();
  const [registros, setRegistros] = useState([]);
  const storedToken = localStorage.getItem("token");

  useEffect(() => {
    const buscarRegistros = async () => {
      try {
        const response = await apiClient.get(
          `/registro_acesso_usuarios?prontuario`,
          {
            headers: { Authorization: storedToken },
          },
          {
            params: { prontuario: registros.prontuario },
          }
        );
        setRegistros(response.data);
      } catch (error) {
        console.error("Erro ao obter registros:", error);
      }
    };

    buscarRegistros();
  }, []);

  const returnAdm = () => {
    history("/adm");
  };

  return (
    <fragment>
      <header>
        <div className="line-gerenciar">
          <div className="col-gerenciar">
            {" "}
            <h2>Registros</h2>{" "}
          </div>
          <div className="col-gerenciar-logo">
            {" "}
            <img
              src={logoif}
              alt="Logo do Instituto Federal de Cubatão"
              className="logoif"
            />{" "}
          </div>
        </div>
      </header>

      <main>
        <div className="line-filtrar-por">
          <p>Filtrar por:</p>

          <div className="por-user">
            <input
              type="radio"
              className="radio-filtro"
              name="opcao"
              id="opc1"
              value="user"
            ></input>
            <label for="opc1" className="tipo">
              {" "}
              Por Usuário{" "}
            </label>
          </div>

          <div className="por-data">
            <input
              type="radio"
              className="radio-filtro"
              name="opcao"
              id="opc2"
              value="data"
            ></input>
            <label for="opc2" className="tipo">
              {" "}
              Por Data{" "}
            </label>
          </div>
        </div>

        <div className="line-input">
          <div className="col-input">
            <input
              type="text"
              className="input-control"
              placeholder="Insira o Prontuário, CPF ou Data"
            />
          </div>

          <div className="col-filtrar">
            <button className="filtro"> Filtrar </button>
          </div>
        </div>

        <div className="container-registros">
          <table>
            <thead>
              <tr>
                <th>
                  <h2>Prontuario/CPF</h2>
                </th>
                <th>
                  <h2>Nome</h2>
                </th>
                <th>
                  <h2>Data</h2>
                </th>
                <th>
                  <h2>Entrada</h2>
                </th>
                <th>
                  <h2>Saida</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro) => (
                <tr>
                  <td>{registro.Prontuario}</td>
                  <td>{registro.Nome}</td>
                  <td>{registro.Data}</td>
                  <td>{registro.Entrada}</td>
                  <td>{registro.Saida}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer>
        <div className="line-button-regi">
          <div className="col-button-voltar-regi">
            <button
              className="button-voltar-regi"
              type="button"
              onClick={returnAdm}
            >
              {" "}
              <IoArrowBackCircle /> Voltar
            </button>
          </div>
        </div>
      </footer>
    </fragment>
  );
}

export default Registro;
