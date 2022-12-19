import {ActionsTypes, DialogsPage, MessageType} from "./State.js";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}
export const UpdateNewMessageActionType = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    } as const
}

const dialogsReducer = (state:DialogsPage,action:ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 9,
                message: state.newMessageText
            }
            state.message.push(newMessage);
            state.newMessageText = '';
            return state
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
            break;
    }
    return state
};

export default dialogsReducer;