import React, { useState, useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import apiClient from "../config/apiClient";
import { useNavigate } from "react-router-dom";
import "./css/gerenciar.css";

function Gerenciar() {
  const [usuarios, setUsuarios] = useState([]);
  const history = useNavigate();

  const fetchUsuarios = () => {
    console.log('nfasnfnaio')
    apiClient.get("/usuarios", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    }).then(({ data }) => {
      setUsuarios(data);
    }).catch((error) => console.log('error', error))
  };

  useEffect(() => fetchUsuarios(), []);

  return (
    <div>
      <main>
        <div className="tabela">
          <table>
            <thead>
              <tr>
                <th>
                  {" "}
                  <h2>Prontuário</h2>{" "}
                </th>
                <th>
                  <h2>CPF</h2>
                </th>
                <th>
                  <h2>Nome</h2>
                </th>
                <th>
                  <h2>Telefone</h2>
                </th>
                <th>
                  <h2>E-mail</h2>
                </th>
                <th>
                  <h2>Tipo</h2>
                </th>
                <th>
                  <h2>Ações</h2>
                </th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>
                    <p>{usuario.prontuario || '-'}</p>
                  </td>
                  <td>
                    <p>{usuario.cpf}</p>
                  </td>
                  <td>
                    <p>{usuario.nome}</p>
                  </td>
                  <td>
                    <p>{usuario.telefone || '-'}</p>
                  </td>
                  <td>
                    <p>{usuario.email || '-'}</p>
                  </td>
                  <td>
                    <p>{usuario.tipo}</p>
                  </td>
                  <td>
                    <button onClick={() => ({})}>Editar</button>
                    <button onClick={() => ({})}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

    <footer>
      <div className="line-button-gerenciar">
        <div className="col-button-voltar-gerenciar">
          <button
            className="button-voltar-entrar"
            type="button"
            onClick={() => history("/adm")}
          >
            {" "}
            <IoArrowBackCircle /> Voltar
          </button>
        </div>
      </div>
    </footer>
    </div >
  );
}

export default Gerenciar;

