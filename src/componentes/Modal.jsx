import React, { useState } from "react";

 function Modal({ isVisible, onClose, onSave }) {
  const [novoUsuario, setNovoUsuario] = useState({
    prontuario: "",
    nome: "",
    telefone: "",
    email: "",
    tipo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario({ ...novoUsuario, [name]: value });
  };

  /* Salvar novo usuário */
  const handleSave = () => {
    onSave(novoUsuario);
  };

  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <div>
        <label>Prontuário</label>
        <input type="text" name="prontuario" onChange={handleChange} />
      </div>
      <div>
        <label>Nome</label>
        <input type="text" name="nome" onChange={handleChange} />
      </div>
      <div>
        <label>Telefone</label>
        <input type="text" name="telefone" onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Tipo</label>
        <input type="text" name="tipo" onChange={handleChange} />
      </div>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}

export default Modal;