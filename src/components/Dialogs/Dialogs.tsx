import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import Avatar from "./DialogItem/Avatar";
import { DialogsPage} from "../../redux/State";

type DialogsTypeProps = {
    dialogsPage:DialogsPage
    updateNewMessageText:(newText:string)=>void
    addMessage:()=>void
}

 const Dialogs:React.FC<DialogsTypeProps> = (props) => {
    let  dialogElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.src} />)
    let  messageElements = props.dialogsPage.message.map((m) => <Message key={m.id} message={m.message} id={m.id} />)

     let addMessage = () =>{
         props.addMessage();
     }

     let onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value;
         props.updateNewMessageText(text)
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
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;