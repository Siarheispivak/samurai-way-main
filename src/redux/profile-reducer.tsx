import {ActionsTypes,PostsType, ProfilePageType} from "./State.js";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

const profileReducer = (state:ProfilePageType,action:ActionsTypes) => {
    console.log(state)
    switch (action.type) {
        case ADD_POST: //'ADD-POST'
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state
            break;
        case UPDATE_NEW_POST_TEXT: //'UPDATE-NEW-POST-TEXT'
            state.newPostText = action.newText;
            return state
            break;
    }
    return state
};


export default profileReducer;
