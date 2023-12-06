import React from 'react';
import Camera from './componentes/Camera';
import { useNavigate } from 'react-router-dom';

function FotoVisitante() {
  const history = useNavigate();

  const closeCam = () => {
    history("/entrada");
    window.location.reload();
  };
  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <button
        onClick={closeCam}
        style={{
          backgroundColor: "lightgreen",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: ".5em",
        }}
      >
        Fechar Camera
      </button>
      <Camera />
      <div className="col-button-voltar-entrar">
        <button
              className="button-voltar-entrar"
              type="button"
              onClick={() => history("/entrada")}
            >
              {" "}
              <IoArrowBackCircle /> Voltar
        </button>
      </div>
    </div>
  )
}

export default FotoVisitante;
