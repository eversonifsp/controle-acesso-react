import "./css/registro-style.css";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import logoif from "../img/logoIF.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import apiClient from "../config/apiClient";

function Registro() {

  const storedToken = localStorage.getItem("token");
  console.log(storedToken);
  const history = useNavigate();

  const [valor, setValor] = useState({
    prontuario: "",
  });
  const valorSaida = (e) =>
    setValor({ ...valor, [e.target.name]: e.target.value });

  const registraSaida = async (e) => {
    e.preventDefault();
    {
      console.log(valor);
    }
    // Bloquear o recarregamento da página
    // if(valor.cb_cpf == ""){
    //   toast.error("prontuario ou cpf invalido")
    // }else{
    //   toast.success("entrada registrada com sucesso")
    // }
    try {
      console.log("chegou");

      console.log(storedToken);

      const response = await apiClient.post(
        `/registro_acesso_usuarios?prontuario=${valor.prontuario}`,
        {
          tipo: "saida",
        },
        {
          headers: { Authorization: storedToken },
        } //{
        //   params: {"prontuario": valor.prontuario}
        // }
      );

      console.log(valor.prontuario);
      if (response.status === 201) {
        toast.success("Saida registrada com sucesso");
      } else {
        toast.error("Usuario ou senha invalida!");
      }
    } catch (error) {
      toast.error("Usuario ou senha invalida!");
    }
  };
  return (
    <fragment>  

<header>
    <div className="line-gerenciar">
        <div className="col-gerenciar"> <h2>Registros</h2> </div>
        <div className='col-gerenciar-logo'> <img src={logoif} alt="Logo do Instituto Federal de Cubatão" className='logoif'/> </div>
    </div>
  </header>

  <main>

    <div className="line-filtrar-por">
        
        <p>Filtrar por:</p>

        <div className="por-user">
            <input type="radio" className="radio-filtro" name="opcao" id="opc1" value="user"></input>
              <label for="opc1" className="tipo"> Por Usuário </label>
        </div>

        <div className="por-data">
            <input type="radio" className="radio-filtro" name="opcao" id="opc2" value="data"></input>
            <label for="opc2" className="tipo"> Por Data </label>
        </div>
    </div>



    <div className="line-input">
        <div className="col-input">
            <input type="text" className="input-control" placeholder="Insira o Prontuário ou Data"></input>
        </div>
        
        <div className="col-filtrar">
            <button className="filtro"> Filtrar </button>
        </div>
    </div>


    <div className="container-registros">

      <table>
          <thead>
            <tr>
              <th> <h2>Prontuário</h2> </th>
              <th><h2>Nome</h2></th>
              <th><h2>Data</h2></th>
              <th><h2>Entrada</h2></th>
              <th><h2>Saída</h2></th>
            </tr>
          </thead>

        <tbody>
          <tr>
              <td> <p> CB000000X </p> </td>
              <td> <p> Ronaldo Fenômeno </p> </td>
              <td> <p>01/01/2024</p> </td>
              <td> <p>00:00</p> </td>
              <td> <p>00:00</p> </td>
          </tr>

          <tr>
              <td> <p> CB000000X </p> </td>
              <td> <p> Romário </p> </td>
              <td> <p> 01/01/2024</p> </td>
              <td> <p>00:00</p> </td>
              <td> <p>00:00</p> </td>
          </tr>

        </tbody>
      </table>
</div>

  </main>

  <footer>

  <div className='line-button-regi'>
    <div className='col-button-voltar-regi'>
      <button className='button-voltar-regi' type='button'> <IoArrowBackCircle /> Voltar</button>
  </div>
</div>

  </footer>

    </fragment>
  );
}

export default Registro;
