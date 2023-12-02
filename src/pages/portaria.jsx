import { useNavigate } from "react-router-dom";
import "./css/portaria-style.css";
import logoif from "../img/logoIF.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Portaria = () => {
  const history = useNavigate();
  const token = localStorage.getItem("token");

  const entry = () => {
    if (token) {
      history("/entrada");
    } else {
        toast.error("Usuario não autenticado. Redirecionando para o login");
        history("/login")
    }
  };

  const exit = () => {
    if (token) {
      history("/saida");
    } else {
        toast.error("Usuario não autenticado. Redirecionando para o login");
        history("/login")
    }
  };
  return (
    <view>
      <div className="container-portaria">
        <div className="line-portaria">
          <div className="col-portaria-logo">
            {" "}
            <img
              src={logoif}
              alt="Logo do Instituto Federal de Cubatão"
              className="logoif"
            />{" "}
          </div>
        </div>

        <ToastContainer />
        <div className="col-registrar-entrada">
          <button className="button-entrada" onClick={entry}>
            {" "}
            Registrar entrada
          </button>
        </div>

        <ToastContainer />
        <div className="col-registrar-saida">
          <button className="button-saida" onClick={exit}>
            {" "}
            Registrar Saída{" "}
          </button>
        </div>
      </div>
    </view>
  );
};

export default Portaria;
