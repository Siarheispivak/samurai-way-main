import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    setAuthUserData:(userId: number, email: string, login: string) => void // зчем сюда передаём??? или лучше передать только мапстэйттупропс в хедер Контейнере?
    login: string,
    isAuth:boolean
}

const Header = (props:HeaderPropsType) => {
    return <header className={s.header}>
        <img src="https://www.brandbucket.com/images5/gc/logo-envato.png?" alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
}

export default Header;