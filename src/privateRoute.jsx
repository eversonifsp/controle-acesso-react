import React from 'react'
import { Navigate } from "react-router-dom";

export function PrivateRoute({children}){
    
    const user = localStorage.getItem("token");

    return user ? children : <Navigate to="/login"/>;
}
  
  export function PrivatePorteiroRoute({ children }) {
    const userType = localStorage.getItem("userType");
  
    const isPorteiro = userType === 'porteiro' || userType === 'admin'
  
    return isPorteiro ? {children} : <Navigate to="/login" />;
  }
  
  export function PrivateAdminRoute({ children }) {
    const userType = localStorage.getItem("userType");
  
    const isAdmin = userType === 'admin'
  
    return isAdmin ? {children} : <Navigate to="/login" />;
  }