import React from "react"
import { Routes, Route, Navigate} from "react-router-dom"
import {MainPage } from './pages/MainPage/MainPage'
import { AuthPage } from './pages/AuthPage/AuthPage'
/* import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages"; */

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route  path="*" element={<MainPage />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<AuthPage  />} />
            <Route path="*" element={<Navigate to="/"/>} /> 
        </Routes>
        
    )
}