 export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
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
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            // const stateCopy = {...state, posts: state.posts.map((st) => ({...st}))};
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';

            // const stateCopy = {...state,newPostText:'',posts: [...state.posts,newPost]};

            return {...state,newPostText:'',posts: [...state.posts,newPost]}
        }
        case UPDATE_NEW_POST_TEXT: {
            // const stateCopy = {...state};
            // stateCopy.newPostText = action.newText;
            // return stateCopy

            return {...state, newPostText: action.newText};
        }
        default:
            return state;
    }

};
export default profileReducer;
