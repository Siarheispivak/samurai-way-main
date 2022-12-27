 type PostsType = {
    id: number
    message: string
    likesCount: number
}
 type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type ProfileActionsType =
      ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hey,how are you?', likesCount: 12},
        {id: 2, message: 'its my first post', likesCount: 11}
    ],
    newPostText: 'it-kamasutre',
}

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

const profileReducer = (state:ProfilePageType = initialState,action:ProfileActionsType) => {
    // console.log(state)
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
        case UPDATE_NEW_POST_TEXT: //'UPDATE-NEW-POST-TEXT'
            state.newPostText = action.newText;
            return state
    }
    return state
};


export default profileReducer;
