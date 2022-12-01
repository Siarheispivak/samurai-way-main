import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name: string
    id: number
}
type MessageType = {
    id:number
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
    let message = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your It-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}

    ]

    let  dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let  messageElements = message.map(m => <Message message={m.message} id={m.id}/>)


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    );
};

