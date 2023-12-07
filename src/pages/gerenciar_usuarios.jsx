import React, { useState, useEffect } from "react";
import { Button, Modal, } from 'antd'; 
import { IoArrowBackCircle } from "react-icons/io5";
import apiClient from "../config/apiClient";
import { useNavigate } from "react-router-dom";
import "./css/gerenciar.css";
import logoif from "../img/logoIF.png";

function Gerenciar() {
  const [usuarios, setUsuarios] = useState([]);
  const history = useNavigate();

  const [valor, setValor] = useState({
    cpf: "",
    nome: "",
    telefone: "",
    email: "",  
    foto: "",
  });

  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => fetchUsuarios(), []);

  return (
<div>
    <header>
    <div className="line-gerenciar">
      <div className="col-gerenciar">
        {" "}
        <h2>Gerenciar Usuários</h2>{" "}
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
                    <button type="primary" onClick={showModal}>Editar</button>
                    <button onClick={() => ({})}>Excluir</button>
                  </td>
                      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <div className="col-user-cadastrar">
                        <input type="text" className="form-control-cadastrar" placeholder="Prontuario" name="prontuario" onChange={valorEntrada}></input>
                      </div>

                      <div className="col-nome-cadastrar">
                        <input type="text" className="form-control-cadastrar" placeholder="Nome" name="Nome" onChange={valorEntrada}></input>
                      </div>

                      <div className="col-tel-cadastrar">
                        <input type="text" className="form-control-cadastrar" placeholder="Telefone" name="Telefone" onChange={valorEntrada}></input>
                      </div>

                      <div className="col-email-cadastrar">
                        <input type="email" className="form-control-cadastrar" placeholder="E-mail" name="E-mail" onChange={valorEntrada}></input>
                      </div>
                      </Modal>
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
            className="button-voltar-gerenciar"
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

