import { useState } from "react";
import "./css/alimentar-base.css";
import apiClient from "../config/apiClient";
import { IoArrowBackCircle } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Loading from "react-loading";
import logoif from "../img/logoIF.png";
import { useNavigate } from "react-router-dom";

export default function AlimentarBase() {
  const history = useNavigate();

  const [file, setFile] = useState(null);

  const { promiseInProgress } = usePromiseTracker();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const upload = async (e) => {
    const formData = new FormData();
    formData.append("file", file);

    trackPromise(
      apiClient
        .post("/usuarios/importar_csv", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        })
        .then(() => toast.success("CSV importado com sucesso!"))
        .catch(() => toast.error("Erro ao importar CSV!"))
    );
  };

  return (
    <div>
      <header>
        <button
          className="button-voltar-regi"
          type="button"
          onClick={() => history("/adm")}
        >
          {" "}
          <IoArrowBackCircle /> Voltar
        </button>
        <div className="line-gerenciar">
          <div className="col-gerenciar">
            {" "}
            <h2>Alimentar Base</h2>{" "}
          </div>
          <div className="col-gerenciar-logo">
            {" "}
            <img
              src={logoif}
              alt="Logo do Instituto Federal de Cubatão"
              className="logoif"
            />{" "}
          </div>
        </div>
      </header>

      <main>
        <div className="container-alimentar">
          <div className="col-input-file">
            <input type="file" onChange={handleFileChange} id="input-csv" />

            <label for="input-csv">
              {" "}
              <span>Upload csv</span>{" "}
            </label>
          </div>

          <div className="col-upload">
            <button
              onClick={upload}
              className={`custom-button ${promiseInProgress && "disabled"}`}
              disabled={promiseInProgress}
            >
              {promiseInProgress ? (
                <Loading type="spin" color="#fff" height={20} width={20} />
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </div>
      </main>

      <footer>
        <div className="line-button-regi">
          <div className="col-button-voltar-regi"></div>
        </div>
      </footer>
    </div>
  );
}
