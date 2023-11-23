import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Read = (props) => {
  const [setData] = useState("No result");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            alert(`Prontuário: ${result.text}\nAluno liberado!`);
            setData(result.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{
          facingMode: "environment",
        }}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default Read;
