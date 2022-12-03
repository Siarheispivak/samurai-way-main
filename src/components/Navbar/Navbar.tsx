import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";




const Navbar: React.FC<any> = (props) => {



    let friendsElements = props.state.friends.map((fr:any)=><Friends key={fr.id} name={fr.name} avatar={fr.src}/>)

    return  (
        <div className={s.sideBar}>
            <nav className={s.nav}>
                <div className={s.item}><NavLink className={s.links} to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink className={s.links} to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
                <div className={s.item}><NavLink className={s.links} to="/news" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink className={s.links} to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink className={s.links} to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
            </nav>
            <div className={s.friends}>

                <h3>FRIENDS</h3>
                <div className={s.friendsItems}>
                    {friendsElements}
                </div>

            </div>
        </div>

    )
}

export default Navbar;