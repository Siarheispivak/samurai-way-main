const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type UserType = {
    id: number
    photoUrl:string
    photos:{
        small: null,
        large: null
    }
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersType = {
    users: Array<UserType>
}
export type  UsersActionsType =  ReturnType<typeof followAC> & ReturnType<typeof setUsersAC> |
     ReturnType<typeof unFollowAC> & ReturnType<typeof setUsersAC>
let initialState = {
    users: []
}
const usersReducer = (state: UsersType = initialState, action: UsersActionsType): UsersType => {
    switch (action.type) {
        case FOLLOW: {
            // const usersCopy = {...state,users:[...state.users]}
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : {...el})}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : {...el})}
        }
        case SET_USERS:{
            return {...state,users:[...state.users, ...action.users]}
            //49 lesson 33 minute
        }
        default:
            return state;
    }
};
export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})

export default usersReducer;