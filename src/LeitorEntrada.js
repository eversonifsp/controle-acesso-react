import React from "react";
import LeitorQRCodeEntry from "./componentes/LeitorQRCodeEntry";
import { useNavigate } from "react-router-dom";

function Leitor() {
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
      <LeitorQRCodeEntry />
    </div>
  );
}

export default Leitor;
