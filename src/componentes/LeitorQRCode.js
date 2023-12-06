import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

const LeitorQRCode = (props) => {
  const [prontuario, setProntuario] = useState("No result");
  const history = useNavigate();

  const handleScan = (result, error) => {
    if (!!result) {
      alert("Prontuário: ${result}\nAluno liberado!");
      setProntuario(result);
    }

    if (!!error) {
      console.info(error);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const closeCam = () => {
    history("/entrada");
    window.location.reload();
  };

  return (
    <>
      <button
        onClick={closeCam}
        style={{
          backgroundColor: "lightgreen",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: ".5em",
        }}>
        Fechar Camera
      </button>
      {
        <QrReader
          onResult={handleScan}
          onError={handleError}
          constraints={{ facingMode: "environment" }}
          style={{ width: "100%" }}
        />
      }
    </>
  );
};

export default LeitorQRCode;
