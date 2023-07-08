import React from 'react';
import s from './Dialog.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {DialogType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";


const Dialogs: React.FC<DialogType> = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                          avatar={d.src}/>)
    let messageElements = props.dialogsPage.message.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)

    let addNewMessage = (values:any) => {
        props.addMessage(values.newMessageBody)
    }


    return (

        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)


export default Dialogs;