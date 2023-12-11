import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoArrowBackCircle } from "react-icons/io5";
import apiClient from "../config/apiClient";
import { useNavigate } from "react-router-dom";
import logoif from "../img/logoIF.png";
import { toast } from "react-toastify";
import { set } from "date-fns";
import './css/gerenciar.css'

function Gerenciar() {
  const [usuarios, setUsuarios] = useState([]);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const history = useNavigate();

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      border: 'none',
      borderRadius: '8px',
      width: '80%', // Ajuste a largura do modal
      maxWidth: '600px', // Defina uma largura máxima se desejar
      maxHeight: '80%', // Ajuste a altura máxima do modal se necessário
      overflow: 'auto', // Adiciona rolagem se o conteúdo for muito grande
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  const [valor, setValor] = useState({
    cpf: "",
    nome: "",
    telefone: "",
  });

  const [filtro, setFiltro] = useState("")

  const valorEntrada = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const fetchUsuarios = () => {
    apiClient
      .get("/usuarios", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
        params: {
          filtro,
        }
      })
      .then(({ data }) => {
        setUsuarios(data);
      })
      .catch((error) => console.log("error", error));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openDeleteModal = (usuario) => {
    setUserSelected(usuario);
    setDeleteModalIsOpen(true);
  };
  
  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const handleOk = async () => {
    try {
      const response = await apiClient.put(`/usuarios/${valor.id}`, valor, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      if (response.status === 200) {
        toast.success("Usuário atualizado com sucesso!");
        setIsModalOpen(false);
        fetchUsuarios();
      }
    } catch (error) {
      toast.error("Erro ao atualizar usuário!");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const returnAdm = () => {
    history("/adm");
  };

  useEffect(() => fetchUsuarios(), []);

  const storedToken = localStorage.getItem("token");
  const userNow = localStorage.getItem("userNow");

  const handleDeleteUser = async () => {
    
    if (userSelected) {
      const userIdString = String(userSelected.id);
      const userNowString = String(userNow);
      if (userIdString !== userNowString) {
        try {
          const response = await apiClient.delete(`/usuarios/${userSelected.id}`, {
            headers: { Authorization: storedToken },
          });
  
          if (response.status === 204) {
            toast.success("Usuário excluído com sucesso!");
            fetchUsuarios();
          }
        } catch (error) {
          toast.error("Não é possível excluir o usuário logado");
        }
      } else {
        toast.error("Não é possível excluir o usuário logado");
      }
    }
    closeDeleteModal();
  };

  const editUser = (user) => {
    setUserSelected(user)
    setValor(user)
    setIsModalOpen(true)
  }

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = usuarios.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(usuarios.length / recordsPerPage);

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

  return (
    <div>
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

      <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems:'flex-end', gap: 20}}>
        <div>
          <input
            onKeyDown={(event) => {
              if (event.key === 'Enter') fetchUsuarios()
            }}
            type="text"
            className="form-control-entrar"
            style={{ width: 250 }}
            placeholder="prontuario ou nome ou CPF"
            name="filtro"
            onChange={(e) => setFiltro(e.target.value)}
          ></input>
        </div>

        <button className='filtrar-button' onClick={fetchUsuarios}>Filtrar</button>
      </div>

      <main>
        {
          totalPages > 0 ? (
            <div>
              <div className="tabela">
                <table>
                  <thead>
                    <tr>
                      <th>
                        {" "}
                        <h2>Prontuário</h2>{" "}
                      </th>
                      <th>
                        {" "}
                        <h2>CPF</h2>{" "}
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
                    {currentRecords.map((usuario, index) => (
                      <tr key={index}>
                        <td>
                          <p>{usuario.prontuario || "-"}</p>
                        </td>
                        <td>
                          <p>{usuario.cpf || "-"}</p>
                        </td>
                        <td>
                          <p>{usuario.nome || "-"}</p>
                        </td>
                        <td>
                          <p>{usuario.autorizado_sair || "-"}</p>
                        </td>
                        <td>
                          <p>{usuario.turno || "-"}</p>
                        </td>
                        <td>
                          <p>{usuario.tipo || "-"}</p>
                        </td>
                        <td>
                          <button
                            type="primary"
                            onClick={() => editUser(usuario)}
                          >
                            Editar
                          </button>
                          <button onClick={() => openDeleteModal(usuario)}>
                            Excluir
                          </button>
                        </td>
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
          ) : (
            <div style={{marginTop: 20}}>
              <p style={{textAlign: 'center'}}>Nenhum usuario foi encontrado!</p>
            </div>
          )
        }
      </main>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
      >
        <div style={{display: "flex", flexDirection: 'column', gap: 10}}>
          <div>
            <h2 style={{ textAlign: 'center'}}>Editar Usuário</h2>
          </div>

          <div>
            <p>Nome:</p>
            <input
              type="text"
              className="input-form-gerenciar"
              placeholder="nome"
              name="nome"
              value={valor.nome}
              onChange={valorEntrada}
            ></input>
          </div>

          <div>
            <p>Prontuario:</p>
            <input
              type="text"
              className="input-form-gerenciar"
              placeholder="prontuario"
              name="prontuario"
              value={valor.prontuario}
              onChange={valorEntrada}
            ></input>
          </div>

          <div>
            <p>CPF:</p>
            <input
              type="text"
              className="input-form-gerenciar"
              placeholder="cpf"
              name="cpf"
              value={valor.cpf}
              onChange={valorEntrada}
            ></input>
          </div>

          <div>
            <p>Turno:</p>
            <select
              className="input-form-gerenciar"
              name="turno"
              value={valor.turno}
              onChange={valorEntrada}
            >
              <option value="">Escolha o turno</option>
              <option value="manha">Manha</option>
              <option value="tarde">Tarde</option>
            </select>
          </div>

          {
          userNow != userSelected?.id && 
          <div>
            <p>Tipo:</p>
            <select
              className="input-form-gerenciar"
              name="tipo"
              value={valor.tipo}
              onChange={valorEntrada}
            >
              <option value="">Escolha o tipo</option>
              <option value="outros_colaboradores_campus">
                Outros Colaboradores do Campus
              </option>
              <option value="aluno">Aluno</option>
              <option value="admin">Admin</option>
              <option value="secretario">Secretário</option>
              <option value="porteiro">Porteiro</option>
            </select>
          </div>}

          <div>
            <p>Autorizado Sair:</p>
            <select
              className="input-form-gerenciar"
              name="autorizado_sair"
              value={valor.autorizado_sair}
              onChange={valorEntrada}
            >
              <option value="">Escolha</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
            <button onClick={handleCancel} style={{ padding: 10, width: '20%', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer', borderRadius: '5px' }}>Cancelar</button>
            <button onClick={handleOk} style={{ padding: 10, width: '20%', backgroundColor: '#28a745', color: 'white', cursor: 'pointer', borderRadius: '5px' }}>Salvar</button>
          </div>
          
        </div>
      </Modal>
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel="Confirmação de Exclusão">
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
            <p>Você tem certeza que deseja excluir este usuário?</p>
            <button onClick={handleDeleteUser} style={{ padding: 10, width: '20%', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer', borderRadius: '5px' }}>Sim</button>
            <button onClick={closeDeleteModal} style={{ padding: 10, width: '20%', backgroundColor: '#28a745', color: 'white', cursor: 'pointer', borderRadius: '5px' }}>Cancelar</button>
          </div>
      </Modal>
    </div>
  );
}

export default Gerenciar;
