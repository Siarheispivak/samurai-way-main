import React from 'react';
import s from './Dialog.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import Avatar from "./DialogItem/Avatar";


 const Dialogs:React.FC<any> = (props) => {

    let  dialogElements = props.state.dialogs.map((d:any) => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.src} />)
    let  messageElements = props.state.message.map((m:any) => <Message key={m.id} message={m.message} id={m.id}/>)

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

export default Dialogs;