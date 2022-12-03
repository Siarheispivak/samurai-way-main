import React from 'react';
import s from './../Dialog.module.css'


 const Message = (props:any ) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export default Message;
