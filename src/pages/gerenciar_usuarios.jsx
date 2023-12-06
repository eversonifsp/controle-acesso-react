import React, { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import apiClient from "../config/apiClient";

function Gerenciar() {
  const [usuarios, setUsuarios] = useState([]);

  /* Consume a api buscando usuários */
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await apiClient.get("/usuarios");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
  };

  fetchUsuarios();
}, []);

  /* Adiciona o usuário e fecha o modal */
  const handleAddUsuario = async () => {
    try {
      const response = await fetch("https://sua-api.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });

      if (response.ok) {
        // Atualiza a lista de usuários após a adição bem-sucedida
        fetchUsuarios();
        // Limpa os dados do novo usuário
        setNovoUsuario({
          prontuario: "",
          nome: "",
          telefone: "",
          email: "",
          tipo: "",
        });
      } else {
        console.error("Erro ao adicionar usuário");
      }
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
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
          <table>
          <form>
            <label>Prontuário:</label>
            <input
              type="text"
              value={novoUsuario.prontuario}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, prontuario: e.target.value })}
            />

            <label>Nome:</label>
            <input
              type="text"
              value={novoUsuario.nome}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
            />

            <label>Telefone:</label>
            <input
              type="text"
              value={novoUsuario.telefone}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone: e.target.value })}
            />

            <label>Email:</label>
            <input
              type="text"
              value={novoUsuario.email}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
            />

            <label>Tipo:</label>
            <input
              type="text"
              value={novoUsuario.tipo}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, tipo: e.target.value })}
            />

            <button type="button" onClick={handleAddUsuario}>
              Adicionar Usuário
            </button>
          </form>

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
            <button className="button-criar" type="submit">
              Criar Usuário
            </button>
          </div>

          <div className="col-button-voltar-gerenciar">
            <button className="button-voltar-gerenciar" type="button">
              <IoArrowBackCircle /> Voltar
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Gerenciar;
