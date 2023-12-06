import React, { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import Modal from "../componentes/Modal";

function Gerenciar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [usuario, setUsers] = useState([]);

  /* Abrir o modal */
  const openModal = () => {
    setIsModalVisible(true);
  };

  /* Fechar o modal */
  const closeModal = () => {
    setIsModalVisible(false);
  };

  /* Adiciona o usuário e fecha o modal */
  const handleAddUsuario = (novoUsuario) => {
    setUsers([...usuario, novoUsuario]);
    closeModal();
  };

  /* Lógica para editar usuário */
  const handleEditUsuario = (index) => {
  };

  /* Lógica para deletar usuário */
  const handleDeleteUsuario = (index) => {
  };

  return (
    <div>
      <tbody>
        {usuario.map((user, index) => (
          <tr key={index}>
            <td>
              <p>{usario.prontuario}</p>
            </td>
            <td>
              <p>{usario.nome}</p>
            </td>
            <td>
              <p>{usario.telefone}</p>
            </td>
            <td>
              <p>{usario.email}</p>
            </td>
            <td>
              <p>{usario.tipo}</p>
            </td>
            <td>
              <button onClick={() => handleEditUsuario(index)}>Editar</button>
              <button onClick={() => handleDeleteUsuario(index)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>

      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSave={handleAddUsuario}
      />
    </div>
  );
}

export default Gerenciar;

