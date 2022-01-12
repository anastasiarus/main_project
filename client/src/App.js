import React from "react";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import {useRoutes} from './routes'

function App() {
  const routes = useRoutes(false)
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      {routes}
    </div>
    </BrowserRouter>
  )
}

export default App;
