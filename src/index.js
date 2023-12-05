import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { RouterProvider, createBrowserRouter,BrowserRouter,Route,Routes } from 'react-router-dom';
import Entrar from './pages/entrada';
import Login from './pages/login';
import Portaria from './pages/portaria';
import Adm from './pages/adm';
import Saida from './pages/saida';
import Gerenciar from './pages/gerenciar_usuarios';
import Leitor from './Leitor';
import { PrivateRoute } from './privateRoute';

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
    path:"entrada",
    element: <PrivateRoute><Entrar /></PrivateRoute>
  },
  {
    path:"saida",
    element: <PrivateRoute><Saida/></PrivateRoute>
  },
  {
    path:"adm",
    element:<PrivateRoute><Adm/></PrivateRoute>
  },
  {
    path:"portaria",
    element: <PrivateRoute><Portaria/></PrivateRoute>
  },

  {
    path:"gerenciar",
    element: <PrivateRoute><Gerenciar/></PrivateRoute>
  },
  {
    path: "leitor",
    element: <PrivateRoute><Leitor/></PrivateRoute>
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);
