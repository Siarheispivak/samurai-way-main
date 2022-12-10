import React, {ChangeEvent} from 'react';
import s from './../Dialog.module.css'

type MessageType = {
    key:number
    id:number
    message:string
}

 const Message = (props:MessageType ) => {

    return (
        <div className={s.messageInner}>
            <div className={s.circle}></div>
            <div className={s.messageItem}>{props.message}</div>
        </div>

    )
}
export default Message;
