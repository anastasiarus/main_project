import React from "react";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import {useRoutes} from './routes.js'
import { useAuth } from "./hooks/auth";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
    <BrowserRouter>
    <div className="app-wrapper">
      {routes}
    </div>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
