import { Link } from "react-router-dom";
import "./css/portaria-style.css";
import logoif from "../img/logoIF.png";

const Portaria = () => {
  return (
    <view>
      <div className="container">
        <div className="col-login-logo">
          {" "}
          <img
            src={logoif}
            alt="Logo do Instituto Federal de Cubatão"
            className="logoif"
          />{" "}
        </div>
        <div className="">
          <Link to="/entrar">
            <button className="entrada"> Registrar entrada</button>
          </Link>
        </div>

        <div className="">
          <Link to="/cadastrar">
            <button className="cadastro"> Cadastrar visitante </button>
          </Link>
        </div>
        <div>
          <Link to="/sair">
            <button className="saida">Registrar Saida</button>
          </Link>
        </div>
      </div>
    </view>
  );
};

export default Portaria;
