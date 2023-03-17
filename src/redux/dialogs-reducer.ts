const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export type DialogsType = {
    id: number
    name: string
    src: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPage = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageText: string
}

export type DialogsActionsType =
    ReturnType<typeof addMessageAC>
    | ReturnType<typeof UpdateNewMessageAC>


let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', src: 'http://surl.li/dxldh'},
        {id: 2, name: 'Andrey', src: 'http://surl.li/dxldl'},
        {id: 3, name: 'Sveta', src: 'http://surl.li/dxldm'},
        {id: 4, name: 'Sasha', src: 'http://surl.li/dxldn'},
        {id: 5, name: 'Viktor', src: 'http://surl.li/dxldo'},
        {id: 6, name: 'Valera', src: 'https://surl.li/dxldq'}
    ],
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your It-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: 'Enter your message here!'
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}
export const UpdateNewMessageAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    } as const
}

const dialogsReducer = (state: DialogsPage = initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessageType = {
                id: 9,
                message: state.newMessageText
            }
            return {...state,newMessageText:'',message:[...state.message,newMessage]}
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state,newMessageText:action.newText}
        }
        default:
            return state
    }

};

export default dialogsReducer;