import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Read = (props) => {
  const [prontuario, setProntuario] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            alert(`Prontuário: ${result.text}\nAluno liberado!`);
            setProntuario(result.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{
          facingMode: 'environment'
        }}
        style={{ width: '100%' }}
      />
    </>
  );
};


const registraEntrada = async (e) => {
  const prontuario = valor.prontuario;
  e.preventDefault();

  if (registrado == "nao_registrado") {
  try {
    console.log(storedToken);

    const response = await apiClient.post(
      `/registro_acesso_usuarios?prontuario=${valor.prontuario}`,
      {
        tipo: "entrada",
      },
      {
        headers: { Authorization: storedToken },
      }
    );

    console.log(valor.prontuario);
    if (response.status === 201) {
      toast.success("Entrada registrada com sucesso");
    }
  } catch (error) {
    toast.error("Prontuario invalido!");
  }
}
}

export default LeitorQRCode;
