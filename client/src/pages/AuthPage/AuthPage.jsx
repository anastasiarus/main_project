
import  React, {useContext, useEffect, useState} from 'react'
import classes from "./AuthPage.module.css";
import {useHttp} from '../../hooks/http'
import {useMessage} from '../../hooks/message'
import { AuthContext } from '../../context/AuthContext';

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {console.log(e.message)}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {console.log(e.message)}
  }

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Авторизация</h1>
      <div className={classes.card}>
        <div className={classes.cardContent}>
          <span className={classes.cardTitle}>АВТОРИЗАЦИЯ</span>
          <div className={classes.input}>
          <label htmlFor="text">Ваше имя:</label>
          <input id="firstName" type="text" name="firstName" className={classes.validate} onChange={changeHandler} />
        </div>
        <div className={classes.input}>
          <label htmlFor="text">Ваша фамилия:</label>
          <input id="lastName" type="text" name="lastName" className={classes.validate} onChange={changeHandler} />
        </div>
          <div className={classes.input}>
          <label htmlFor="email">Почта:</label>
          <input id="email" type="email" name="email" className={classes.validate} onChange={changeHandler} />
        </div>
        <div className={classes.input}>
        <label htmlFor="password">Пароль:</label>
          <input id="password" type="password" name="password"  className={classes.validate} onChange={changeHandler}/>
        </div>
        </div>
        <div className={classes.cardAction}>
          <button className={classes.btnLogin} onClick={loginHandler} disabled={loading}>Войти</button>
          <button className={classes.btnReg} onClick={registerHandler} disabled={loading}>Регистрация</button>
        </div>
  </div>
    </div>
  )
}