import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import apiClient from "../config/apiClient";

const LeitorQRCode = (props) => {
  const [prontuario, setProntuario] = useState("No result");
  const storedToken = localStorage.getItem("token");

  const handleScan = (result, error) => {
    if (!!result) {
      alert("Prontuário: ${result} \nAluno liberado!");
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

  

  const registraEntrada = async (prontuario) => {
    try {
      const response = await apiClient.post(
        `/registro_acesso_usuarios?prontuario=${prontuario}`,
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
