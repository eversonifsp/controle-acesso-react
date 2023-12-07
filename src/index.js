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
import { PrivateRoute, PrivateAdminRoute, PrivatePorteiroRoute } from "./privateRoute"; // Certifique-se de que esta importação está correta
import AlimentarBase from "./pages/alimentar_base";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route
        path="entrada"
        element={
          <PrivatePorteiroRoute>
            <Entrar />
          </PrivatePorteiroRoute>
        }
      />
      <Route
        path="saida"
        element={
          <PrivatePorteiroRoute>
            <Saida />
          </PrivatePorteiroRoute>
        }
      />
      <Route
        path="adm"
        element={
          <PrivateAdminRoute>
            <Adm />
          </PrivateAdminRoute>
        }
      />

      <Route 
        path="adm/alimentar_base"
        element={
          <PrivateAdminRoute>
            <AlimentarBase/>
          </PrivateAdminRoute>
        }
      />
        
      <Route
        path="portaria"
        element={
          <PrivatePorteiroRoute>
            <Portaria />
          </PrivatePorteiroRoute>
        }
      />
      <Route
        path="gerenciar"
        element={
          <PrivateAdminRoute>
            <Gerenciar />
          </PrivateAdminRoute>
        }
      />
      <Route
        path="leitorEntry"
        element={
          <PrivatePorteiroRoute>
            <LeitorEntry />
          </PrivatePorteiroRoute>
        }
      />
      <Route
        path="leitorExit"
        element={
          <PrivatePorteiroRoute>
            <LeitorExit />
          </PrivatePorteiroRoute>
        }
      />
      <Route
        path="fotoVisitante"
        element={
          <PrivatePorteiroRoute>
            <FotoVisitante />
          </PrivatePorteiroRoute>
        }
      />
      <Route
        path="cadastrar"
        element={
          <PrivatePorteiroRoute>
            <Cadastrar />
          </PrivatePorteiroRoute>
        }
      />
      <Route
        path="registro"
        element={
          <PrivatePorteiroRoute>
            <Registro />
          </PrivatePorteiroRoute>
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
