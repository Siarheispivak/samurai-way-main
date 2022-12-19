import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, UpdateNewMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

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

export type FriendsType = {
    id: number
    name: string
    src: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}

export type StatePropsType = {

    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sideBar: SideBarType
}
export type StorePropsType = {
    _state: StatePropsType
    _callSubscriber: (_state: StatePropsType) => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof UpdateNewMessageActionType>;




export const store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey,how are you?', likesCount: 12},
                {id: 2, message: 'its my first post', likesCount: 11}
            ],
            newPostText: 'it-kamasutre',
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Dimych', src: 'http://surl.li/dxldh'},
                {id: 2, name: 'Andrey', src: 'http://surl.li/dxldl'},
                {id: 3, name: 'Sveta', src: 'http://surl.li/dxldm'},
            ]
        }

    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sideBar = sidebarReducer(this._state.sideBar,action)

        this._callSubscriber(this._state);
    }

}
