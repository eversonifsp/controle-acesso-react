import { useState } from "react";
import './css/alimentar-base.css'
import apiClient from "../config/apiClient";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Loading from "react-loading";

export default function AlimentarBase(){
  const [file, setFile] = useState(null);

  const { promiseInProgress } = usePromiseTracker()

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const upload = async (e) => {
    const formData = new FormData();
    formData.append('file', file);

    trackPromise(
      apiClient.post('/usuarios/importar_csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': localStorage.getItem('token'),
        },
      }).then(() => toast.success("CSV importado com sucesso!"))
        .catch(() => toast.error("Erro ao importar CSV!"))
    )    
  }

  return(
    <div className="container">
      <ToastContainer />
      <input type="file" onChange={handleFileChange} />
      <button onClick={upload} className={`custom-button ${promiseInProgress && 'disabled'}`} disabled={promiseInProgress}>
        {promiseInProgress ? (
          <Loading type="spin" color="#fff" height={20} width={20} />
        ) : (
          "Enviar"
        )}
      </button>
    </div>
  );
}