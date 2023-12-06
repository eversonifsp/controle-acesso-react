import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entrar from "./pages/entrada";
import Login from "./pages/login";
import Portaria from "./pages/portaria";
import Adm from "./pages/adm";
import Saida from "./pages/saida";
import Gerenciar from "./pages/gerenciar_usuarios";
import LeitorExit from "./LeitorExit";
import LeitorEntry from "./LeitorEntry";
import FotoVisitante from "./FotoVisitante";
import Cadastrar from "./pages/cadastro";
import Registro from "./pages/registro";
import { PrivateRoute } from "./privateRoute"; // Certifique-se de que esta importação está correta
import AlimentarBase from "./pages/alimentar_base";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route
        path="entrada"
        element={
          <PrivateRoute>
            <Entrar />
          </PrivateRoute>
        }
      />
      <Route
        path="saida"
        element={
          <PrivateRoute>
            <Saida />
          </PrivateRoute>
        }
      />
      <Route
        path="adm"
        element={
          <PrivateRoute>
            <Adm />
          </PrivateRoute>
        }
      />

      <Route 
        path="adm/alimentar_base"
        element={
          <PrivateRoute>
            <AlimentarBase/>
          </PrivateRoute>
        }
      />
        
      <Route
        path="portaria"
        element={
          <PrivateRoute>
            <Portaria />
          </PrivateRoute>
        }
      />
      <Route
        path="gerenciar"
        element={
          <PrivateRoute>
            <Gerenciar />
          </PrivateRoute>
        }
      />
      <Route
        path="leitorEntry"
        element={
          <PrivateRoute>
            <LeitorEntry />
          </PrivateRoute>
        }
      />
      <Route
        path="leitorExit"
        element={
          <PrivateRoute>
            <LeitorExit />
          </PrivateRoute>
        }
      />
      <Route
        path="fotoVisitante"
        element={
          <PrivateRoute>
            <FotoVisitante />
          </PrivateRoute>
        }
      />
      <Route
        path="cadastrar"
        element={
          <PrivateRoute>
            <Cadastrar />
          </PrivateRoute>
        }
      />
      <Route
        path="registro"
        element={
          <PrivateRoute>
            <Registro />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
