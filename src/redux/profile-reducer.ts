import {AppThunk} from "./redux-store";
import {profileAPI} from "../api/api";

export type ProfileContactsType = {
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    }
}
export type ProfilePhotosType = {
    small: string,
    large: string
}
export type ProfileType = {
    aboutMe: string,
    contacts: ProfileContactsType,
    lookingForAJob: true,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: ProfilePhotosType
}


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType
    status:string
}

export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof updateStatus>


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hey,how are you?', likesCount: 12},
        {id: 2, message: 'its my first post', likesCount: 11}
    ],
    profile: {} as ProfileType,
    status:'',
}


const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: 5,
                message: action.newPostBody,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE: {

            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state,status:action.status}
        }
        case UPDATE_STATUS: {
            return {...state,status:action.status}
        }
        default:
            return state;
    }

};

export const addPostAC = (newPostBody:string) => {
    return {
        type: 'ADD-POST',
        newPostBody
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}
export const updateStatus = (status: string) => {
    return {
        type: 'UPDATE-STATUS',
        status
    } as const
}




export const getUserProfile = (userId: string): AppThunk => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}

export const getUserStatus = (userId:any): AppThunk => {
    return(dispatch)=> {
        profileAPI.getStatus(userId).then((data => {
            dispatch(setStatus(data))
        }))
    }
}

export const updateUserStatus = (status:any): AppThunk => {
    return(dispatch)=> {
        profileAPI.updateStatus(status).then((response => {
            if(response.data.resultCode === 0) {
                dispatch(updateStatus(status))
            }
        }))
    }
}

export default profileReducer;
