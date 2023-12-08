import "./css/registro-style.css";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import apiClient from "../config/apiClient";
import { format } from 'date-fns';

function Registro() {
  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const [valor, setValor] = useState({
    prontuario: "",
  });

  const history = useNavigate();
  const [registros, setRegistros] = useState([]);
  const [filtro, setFiltro] = useState(["user"]);
  const [formattedDate, setFormattedDate] = useState(null);


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
        
        const dataFromBackend = response.data;
        setRegistros(dataFromBackend);
        if (dataFromBackend.length > 0 && dataFromBackend[0].created_at) {
          const backendDate = dataFromBackend[0].created_at;
          const formatted = format(new Date(backendDate), "dd/MM/yyyy HH:mm:ss");
          setFormattedDate(formatted);
        }
      } catch (error) {
        console.error("Erro ao obter registros:", error);
      }
    } else if (filtro === "data") {
      try {
        const inputDate = valor.prontuario;
        const filteredRecords = registros.filter(record => {
          const recordDate = record.created_at;
          return recordDate.toDateString() === inputDate.toDateString();
        });

        console.log("Filtered Records:", filteredRecords);
        console.log("Input Date:", inputDate);
        setRegistros(filteredRecords);

        if (filteredRecords.length > 0 && filteredRecords[0].created_at) {
          const backendDate = filteredRecords[0].created_at;
          const formatted = format(new Date(backendDate), "dd/MM/yyyy HH:mm:ss");
          setFormattedDate(formatted);
        }
      }catch (error) {
        console.error("Erro ao filtrar registros por data:", error);
      }
    }
  };

  const returnAdm = () => {
    history("/adm");
  };
 
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 11;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = registros.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(registros.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const minhaFuncao = async() => {
    const storedToken = localStorage.getItem("token");
    try {
      console.log(valor.prontuario);
      const response = await apiClient.get(
        `/registro_acesso_usuarios?created_at=`,
        {
          headers: { Authorization: storedToken },
        }
      );
      const dataFromBackend = response.data;
    setRegistros(dataFromBackend);

    if (dataFromBackend.length > 0 && dataFromBackend[0].created_at) {
      const backendDate = dataFromBackend[0].created_at;
      const formatted = format(new Date(backendDate), "dd/MM/yyyy HH:mm:ss");
      setFormattedDate(formatted);
    }
  } catch (error) {
    console.error("Erro ao obter registros:", error);
  }
    
  };

  useEffect(() => {
    minhaFuncao()
  }, []); 

  return (
    <fragment>
      <header>
      <button
          className="button-voltar-regi"
          type="button"
          onClick={returnAdm}
        >
          {" "}
          <IoArrowBackCircle /> Voltar
        </button>
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
              {currentRecords.map((registro) => (
                <tr>
                  <td>{registro.usuario.prontuario}</td>
                  <td>{registro.usuario.nome}</td>
                  <td>{formattedDate}</td>
                  <td>{registro.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button className="btn-pag" onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <span>{`Página ${currentPage} de ${totalPages}`}</span>
          <button className="btn-pag" onClick={nextPage} disabled={currentPage === totalPages}>
            Próxima
          </button>
        </div>
      </main>
    </fragment>
  );
}

export default Registro;
