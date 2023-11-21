import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Entrar from './pages/entrada';
import Login from './pages/login';
import Portaria from './pages/portaria';
import Cadastro from './pages/cadastro';
import Saida from './pages/saida';
import Secretaria from './pages/secretaria';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Login/> 
  },
  {
    path: "/",
    element:<Login/> 
  },
  {
    path:"entrar",
    element: <Entrar/>
  },
  {
    path:"sair",
    element: <Saida/>
  },
  {
    path:"cadastrar",
    element:<Cadastro/>
  },

  {
    path:"portaria",
    element: <Portaria/>
  },
  {
    path:"secretaria",
    element: <Secretaria/>

  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
