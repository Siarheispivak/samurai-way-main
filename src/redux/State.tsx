import React from "react";
import {rerenderEntireTree} from "../render";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
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

let state: StatePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hey,how are you?', likesCount: 12},
            {id: 2, message: 'its my first post', likesCount: 11}
        ]
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
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Dimych', src: 'http://surl.li/dxldh'},
            {id: 2, name: 'Andrey', src: 'http://surl.li/dxldl'},
            {id: 3, name: 'Sveta', src: 'http://surl.li/dxldm'},
        ]
    }

}
export let addPost:any = (postMessage:any) => {
    let newPost = {
        id:7,
        message:postMessage,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}

export default state;