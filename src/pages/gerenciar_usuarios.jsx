import React, { useState, useEffect } from "react";
import { Button, Modal, } from 'antd'; 
import { IoArrowBackCircle } from "react-icons/io5";
import apiClient from "../config/apiClient";
import { useNavigate } from "react-router-dom";
import "./css/gerenciar.css";
import logoif from "../img/logoIF.png";
import axios from "axios";
import { toast } from "react-toastify";

function Gerenciar() {
  const [usuarios, setUsuarios] = useState([]);
  const history = useNavigate();

  const [valor, setValor] = useState({
    cpf: "",
    nome: "",
    telefone: "",
  });

 

  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const fetchUsuarios = () => {
    apiClient.get("/usuarios", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    }).then(({ data }) => {
      setUsuarios(data);
    }).catch((error) => console.log('error', error))
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (userId) => {
    setIsModalOpen(true);
    const userModal = userId;
    localStorage.setItem("userModal", userModal);
    console.log(userModal);
    
    
  };

  const handleOk =  async() => {
    const userIdmodal = localStorage.getItem("userModal");
      try {
        console.log(`/usuarios/${userIdmodal}`);
        const response = await apiClient.put(`/usuarios/${userIdmodal}`,valor,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );

        if (response.status === 200) {
          window.location.reload();
          toast.success("Usuário atualizado com sucesso!");
          setIsModalOpen(false);
          fetchUsuarios();
        }
      } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
      } 
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => fetchUsuarios(), []);

  const storedToken = localStorage.getItem("token");

  const handleDeleteUser = async (userId) => {
    try {

      console.log(`/usuarios/${userId}`);
      const response = await apiClient.delete(`/usuarios/${userId}`, {
        headers: { Authorization: storedToken },
      });


      
      if (response.status === 204) {
        toast.success('Usuário excluído com sucesso!');
        window.location.reload();
      }
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };

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
                  <h2>Nome</h2>
                </th>
                <th>
                  <h2>Autorização</h2>
                </th>
                <th>
                  <h2>Turno</h2>
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
                    <p>{usuario.nome || '-'}</p>
                  </td>
                  <td>
                    <p>{usuario.autorizado_sair || '-'}</p>
                  </td>
                  <td>
                    <p>{usuario.turno|| '-'}</p>
                  </td>
                  <td>
                    <p>{usuario.tipo || '-'}</p>
                  </td>
                  <td>
                    <button type="primary" onClick={() => (showModal(usuario.id))}>Editar</button>
                    <button onClick={() => handleDeleteUser(usuario.id)}>Excluir</button>
                  </td>
                      <Modal title="Basic Modal" open={isModalOpen}  onOk={() => handleOk()} onCancel={handleCancel}>
                      <div className="col-user-cadastrar">
                        <input type="text" className="form-control-cadastrar" placeholder="nome" name="nome" onChange={valorEntrada}></input>
                      </div>

                      <div className="col-nome-cadastrar">
                      <select className="form-control-cadastrar" name="turno" value={valor.turno} onChange={valorEntrada}>
                      <option value="">Escolha o turno</option>
                      <option value="manha">Manha</option>
                      <option value="tarde">Tarde</option>
                      </select>
                      </div>

                      <div className="col-tel-cadastrar">
                      <select className="form-control-cadastrar" name="tipo" value={valor.tipo} onChange={valorEntrada}>
                      <option value="">Escolha o tipo</option>
                      <option value="outros_colaboradores_campus">Outros Colaboradores do Campus</option>
                      <option value="aluno">Aluno</option>
                      <option value="admin">Admin</option>
                      <option value="secretario">Secretário</option>
                      <option value="porteiro">Porteiro</option>
                      </select>
                      </div>

                      <div className="col-email-cadastrar">
                      <select className="form-control-cadastrar" name="autorizado_sair" value={valor.autorizado_sair} onChange={valorEntrada}>
                      <option value="">Escolha</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                      </select>
                      </div>
                      </Modal>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div >
  );
}

export default Gerenciar;

