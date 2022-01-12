import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { LinksPage } from './pages/LinksPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path='links' exact>
                    <LinksPage />
                </Route>
                <Route path='registration' exact>
                    <RegistrationPage />
                </Route>
                <Route path='detail/:id' exact>
                    <DetailPage />
                </Route>
                <Navigate to='/registration' />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/' exact>
                <AuthPage />
            </Route>
            <Navigate to='/' />
        </Routes>
    )
}