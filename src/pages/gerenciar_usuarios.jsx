import React, { useState, useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import apiClient from "../config/apiClient";
import { useNavigate } from "react-router-dom";

function Gerenciar() {
  const history = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({
    prontuario: "",
    nome: "",
    telefone: "",
    email: "",
    tipo: "",
    password:"",
  });

  /* Consume a api buscando usuários */
  useEffect(() => {
    // Carregar usuários da API ao montar o componente
    fetchUsuarios();
  }, []);

    const fetchUsuarios = async () => {
      try {
        const response = await apiClient.get("/usuarios");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
  };

  /* Adiciona o usuário */
  const handleAddUsuario = async () => {
    try {
      const storedToken = localStorage.getItem("token");

      const response = await apiClient.post("/usuarios", novoUsuario, {
          headers: { Authorization: storedToken },
        });

      if (response.status === 201) {
        fetchUsuarios(storedToken);
        setNovoUsuario({
          cpf: "",
          prontuario: "",
          nome: "",
          telefone: "",
          email: "",
          tipo: "",
          password:"",
        });
      } else {
        console.error("Erro ao adicionar usuário");
      }
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      alert("Erro ao adicionar usuário");
    }
  };


  /* Lógica para editar usuário */
  const handleEditUsuario = (index) => {
  };

  /* Lógica para deletar usuário */
  const handleDeleteUsuario = (index) => {
  };

  /* Modal e tabela */
  return (
    <div> 
      <main>
        <div className="container-usuario">
          <form>
            <label>CPF/Prontuário:</label>
            <input
              type="text"
              value={novoUsuario.cpf}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, cpf: e.target.value })}
            />

            <label>Nome:</label>
            <input
              type="text"
              value={novoUsuario.nome}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
            />

            <label>Telefone:</label>
            <input
              type="tel"
              value={novoUsuario.telefone}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone: e.target.value })}
            />

            <label>Email:</label>
            <input
              type="email"
              value={novoUsuario.email}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
            />

            <label>Tipo:</label>
            <input
              type="text"
              value={novoUsuario.tipo}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, tipo: e.target.value })}
            />
          </form>

        <table>
          <tbody>
              {usuarios.map((usuarios, index) => (
                <tr key={index}>
                  <td>
                    <p>{usuarios.prontuario}</p>
                  </td>
                  <td>
                    <p>{usuarios.nome}</p>
                  </td>
                  <td>
                    <p>{usuarios.telefone}</p>
                  </td>
                  <td>
                    <p>{usuarios.email}</p>
                  </td>
                  <td>
                    <p>{usuarios.tipo}</p>
                  </td>
                  <td>
                    <button onClick={() => handleEditUsuario(index)}>Editar</button>
                    <button onClick={() => handleDeleteUsuario(index)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer>
        <div className="line-button-gerenciar">
          <div className="col-button-criar">
            <button className="button-criar" type="button" onClick={handleAddUsuario}>
              Criar Usuário
            </button>
          </div>
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
    </div>
  );
}

export default Gerenciar;

