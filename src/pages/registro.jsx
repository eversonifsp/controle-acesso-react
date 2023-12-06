import "./css/registro-style.css";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiClient from "../config/apiClient";

function Registro() {
  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const [valor, setValor] = useState({
    prontuario: "",
  });

  const history = useNavigate();
  const [registros, setRegistros] = useState([]);
  const [filtro, setFiltro] = useState(["user"]);

  const buscarRegistros = async (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("token");

    if (filtro === "user") {
      try {
        console.log(storedToken);
        const response = await apiClient.get(
          `/registro_acesso_usuarios?prontuario=${valor.prontuario}`,
          {
            headers: { Authorization: storedToken },
          }
        );
        registros = setRegistros(response.data);
        console.log(registros);
        const date = registros.created_at;
      } catch (error) {
        console.error("Erro ao obter registros:", error);
      }
    } else if (filtro === "data") {
      try {
        console.log(storedToken);
        const response = await apiClient.get(
          `/registro_acesso_usuarios_datas=${valor.created_at}`,
          {
            headers: { Authorization: storedToken },
          }
        );
        registros = setRegistros(response.data);
        console.log(registros);
        const date = registros.created_at;
      } catch (error) {
        console.error("Erro ao obter registros:", error);
      }
    }
  };

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

          {/* radio button para usuario */}
          <div className="por-user">
            <input
              type="radio"
              className="radio-filtro"
              name="opcao"
              id="opc1"
              value="user"
              onChange={(e) => setFiltro(e.target.value)}
              checked={filtro === "user"}
            ></input>
            <label for="opc1" className="tipo">
              {" "}
              Por Usuário{" "}
            </label>
          </div>

          {/* radio button para data */}
          <div className="por-data">
            <input
              type="radio"
              className="radio-filtro"
              name="opcao"
              id="opc2"
              value="data"
              onChange={(e) => setFiltro(e.target.value)}
              checked={filtro === "data"}
            ></input>
            <label for="opc2" className="tipo">
              {" "}
              Por Data{" "}
            </label>
          </div>
        </div>

        <div className="line-input">
          <div className="col-user-entrar">
            <input
              type="text"
              className="form-control-entrar"
              placeholder="Prontuario ou CPF"
              name="prontuario"
              onChange={valorEntrada}
            ></input>
          </div>

          <div className="col-filtrar">
            <button className="filtro" onClick={buscarRegistros}>
              {" "}
              Filtrar{" "}
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
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
                  <h2>tipo</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro) => (
                <tr>
                  <td>{registro.usuario.prontuario}</td>
                  <td>{registro.usuario.nome}</td>
                  <td>{registro.created_at}</td>
                  <td>{registro.tipo}</td>
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
