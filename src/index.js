import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Entrar from './pages/entrada';
import Login from './pages/login';
import Portaria from './pages/portaria';
import Adm from './pages/adm';
import Saida from './pages/saida';

const router = createBrowserRouter([
  {
    path: "/login",
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
    path:"adm",
    element:<Adm/>
  },
  {
    path:"portaria",
    element: <Portaria/>
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
