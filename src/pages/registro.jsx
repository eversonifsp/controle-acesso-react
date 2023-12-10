import "./css/registro-style.css";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import apiClient from "../config/apiClient";
import { format } from 'date-fns';
import { toast } from "react-toastify";

function Registro() {
  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const [valor, setValor] = useState({
    prontuario_cpf: "",
    data: ""
  });

  const history = useNavigate();
  const [registros, setRegistros] = useState([]);

  const buscarRegistros = async (e) => {
    const storedToken = localStorage.getItem("token");

    await apiClient.get(
      `/registro_acesso_usuarios`,
      {
        params: {
          prontuario_cpf: valor.prontuario_cpf,
          data: valor.data
        },
        headers: { Authorization: storedToken },
      }
    ).then(({data}) => [setRegistros(data), setCurrentPage(1)]) 
    .catch((error) => toast.error('Erro ao buscar registros!'))
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

  useEffect(() => {
    buscarRegistros()
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
        <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems:'flex-end', gap: 20}}>
          <div>
            <p>Prontuario ou CPF</p>
            <input
              type="text"
              className="form-control-entrar"
              placeholder="Prontuario ou CPF"
              name="prontuario_cpf"
              onChange={valorEntrada}
            ></input>
          </div>

          <div>
            <p>Data</p>
            <input
              type="date"
              className="form-control-entrar"
              placeholder="Data"
              name="data"
              onChange={valorEntrada}
            ></input>
          </div>

          <button className='filtrar-button' onClick={buscarRegistros}>Filtrar</button>
        </div>

        {
          totalPages > 0 ? (
            <div>
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
                        <td>{registro.usuario.prontuario || registro.usuario.cpf}</td>
                        <td>{registro.usuario.nome}</td>
                        <td>{format(new Date(registro.created_at), "dd/MM/yyyy HH:mm:ss")}</td>
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
            </div>
          ) : 
          (
            <div style={{marginTop: 20}}>
              <p style={{textAlign: 'center'}}>Nenhum registro de entrada/saida foi encontrado!</p>
            </div>
          )
        }
        
      </main>
    </fragment>
  );
}

export default Registro;
