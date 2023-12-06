import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import apiClient from "../config/apiClient";

const LeitorQRCode = (props) => {
  const [prontuario, setProntuario] = useState("No result");
  const history = useNavigate();
  const storedToken = localStorage.getItem("token");

  const handleScan = (result, error) => {
    if (!!result) {
      alert(`Prontuário: ${result} \nAluno liberado!`);
      setProntuario(result);
      registraEntrada(result);
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

  const registraEntrada = async (prontuario) => {
    try {
      const response = await apiClient.post(`registro_acesso_usuarios?prontuario=${prontuario}`,
        {
          tipo: "entrada",
        },
        {
          headers: { Authorization: storedToken },
        }
      );
    } catch (error) {
      console.error("Erro ao registrar entrada:", error);
    }
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
          }}
        >
          Fechar Camera
        </button>
        {
          <QrReader
            onResult={handleScan}
            onError={handleError}
            constraints={{ facingMode: "environment" }}
          />
        }
      </>
    );
  };
export default LeitorQRCode;