import React from 'react';
import s from './../Dialog.module.css'


 const Message = (props:any ) => {
    return (
        <div className={s.messageInner}>
            <div className={s.circle}></div>
            <div className={s.messageItem}>{props.message}</div>
        </div>

    )
}
export default Message;
