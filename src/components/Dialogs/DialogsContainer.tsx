import React from 'react';
import {addMessageAC, UpdateNewMessageActionType} from "../../redux/dialogs-reducer";
import {AllActionsType} from "../../redux/redux-store";
import StoreContext from '../../StoreContext';
import Dialogs from "./Dialogs";

type DialogsContainerTypeProps = {
    dispatch: (action: AllActionsType) => void
}

const DialogsContainer: React.FC<DialogsContainerTypeProps> = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState().dialogsPage
                let addMessage = () => {
                    props.dispatch(addMessageAC())
                }

                let onMessageChange = (text: string) => {
                    props.dispatch(UpdateNewMessageActionType(text))
                }
                return (
                    <Dialogs UpdateNewMessage={onMessageChange}
                             addMessage={addMessage}
                             dialogsPage={state}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;