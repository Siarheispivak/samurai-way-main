import React from 'react';
import s from './../Dialog.module.css'
import {NavLink} from "react-router-dom";



const DialogItem = (props:any) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>

            <img src={props.avatar} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;