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
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (newText: string) => void
    addPost: () => void
    addMessage: () => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
}


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
                {id: 6, name: 'Valera', src: 'http://surl.li/dxldq'}
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
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },


    addPost() {
        const newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''; //not working
        this._callSubscriber(this._state);
    },
    addMessage() {
        const newMessage: MessageType = {
            id: 9,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.message.push(newMessage);
        this._state.dialogsPage.newMessageText = ''; //not working
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    }
}
