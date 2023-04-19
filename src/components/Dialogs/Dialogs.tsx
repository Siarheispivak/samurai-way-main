import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {DialogType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


const Dialogs: React.FC<DialogType> = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                          avatar={d.src}/>)
    let messageElements = props.dialogsPage.message.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)

    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.UpdateNewMessageAC(text)
    }

    return (

        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                    <div>
                        <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
                        <button onClick={onAddMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;