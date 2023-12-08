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
import LeitorSaida from "./LeitorSaida";
import LeitorEntrada from "./LeitorEntrada";
import Registro from "./pages/registro";
import {
  PrivateAdminRoute,
  PrivatePorteiroRoute,
} from "./privateRoute";
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
            <AlimentarBase />
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
        path="leitorEntrada"
        element={
          <PrivatePorteiroRoute>
            <LeitorEntrada />
          </PrivatePorteiroRoute>
        }
      />
      <Route
        path="leitorSaida"
        element={
          <PrivatePorteiroRoute>
            <LeitorSaida />
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
