import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Entrar from './pages/entrada';
import Login from './pages/login';
import Portaria from './pages/portaria';
import Adm from './pages/adm';
import Saida from './pages/saida';
import Gerenciar from './pages/gerenciar_usuarios';
import LeitorEntry from './LeitorEntry';
import LeitorExit from './LeitorExit';


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
    element: <Entrar />
  },
  {
    path:"saida",
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

  {
    path:"gerenciar",
    element: <Gerenciar/>
  },
  {
    path: "leitorEntry",
    element: <LeitorEntry/>
  },
  {
    path: "leitorExit",
    element: <LeitorExit/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);
