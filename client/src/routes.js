import React from "react"
import { Routes, Route, Navigate} from "react-router-dom"
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import { AuthPage } from './pages/AuthPage/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route exact path="registration"  element={<RegistrationPage />} /> 
                <Route exact path="*" element={<Navigate to="/registration"/>} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route exact path="/" element={<AuthPage  />} />
            <Route exact path="*" element={<Navigate to="/"/>} /> 
        </Routes>
        
    )
}