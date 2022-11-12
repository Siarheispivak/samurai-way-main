import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return  (
        <nav className={s.nav}>
        <div className={s.item}><a className={`${s.links} ${s.active}`} href="">Profile</a></div>
        <div className={s.item}><a className={s.links} href="">Messages</a></div>
        <div className={s.item}><a className={s.links} href="">News</a></div>
        <div className={s.item}><a className={s.links} href="">Music</a></div>
        <div className={s.item}><a className={s.links} href="">Settings</a></div>
    </nav>
    )
}

export default Navbar;