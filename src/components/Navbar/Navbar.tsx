import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return  (
        <nav className={s.nav}>
        <div className={s.item}><a className={s.links} href="/profile">Profile</a></div>
        <div className={s.item}><a className={`${s.links} ${s.active}`} href="/dialogs">Messages</a></div>
        <div className={s.item}><a className={s.links} href="/news">News</a></div>
        <div className={s.item}><a className={s.links} href="/music">Music</a></div>
        <div className={s.item}><a className={s.links} href="/settings">Settings</a></div>
    </nav>
    )
}

export default Navbar;