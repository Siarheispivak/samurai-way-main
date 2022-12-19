import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {ActionsTypes, DialogsPage} from "../../redux/State";
import {addMessageAC, UpdateNewMessageActionType} from "../../redux/dialogs-reducer";

type DialogsTypeProps = {
    dialogsPage:DialogsPage
    dispatch:(action:ActionsTypes)=>void
}

 const Dialogs:React.FC<DialogsTypeProps> = (props) => {
    let  dialogElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.src} />)
    let  messageElements = props.dialogsPage.message.map((m) => <Message key={m.id} message={m.message} id={m.id} />)

     let addMessage = () =>{
         props.dispatch(addMessageAC())
     }

     let onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value;
            props.dispatch(UpdateNewMessageActionType(text))
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
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;