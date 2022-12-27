import React, {ChangeEvent} from 'react';
import {addMessageAC, DialogsPage, UpdateNewMessageActionType} from "../../redux/dialogs-reducer";
import {AllActionsType, AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type DialogsContainerTypeProps = {
    store: AppStateType
    dispatch:(action:AllActionsType)=>void
}

const DialogsContainer: React.FC<DialogsContainerTypeProps> = (props) => {
    let state = props.store.dialogsPage
    let addMessage = () => {
        props.dispatch(addMessageAC())
    }

    let onMessageChange = (text:string) => {
        props.dispatch(UpdateNewMessageActionType(text))
    }
    return (
    <Dialogs UpdateNewMessage={onMessageChange}
             addMessage={addMessage}
             dialogsPage={state}/>
    );
};

export default DialogsContainer;