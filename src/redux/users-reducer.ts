import {addMessageAC, UpdateNewMessageAC} from "./dialogs-reducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export type UserType= {
    id:number
    followed:boolean
    fullName:string
    status:string
    location:{
        city:string
        country:string
    }
}
export type UsersType = {
    users:Array<UserType>
}
export type  UsersActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>

let initialState = {
    users: [
        {id: 1,followed:false, fullName: 'Dimych', status: 'Magistr',location:{city:'Minsk',country:'Belarus'}},
        {id: 2,followed:false, fullName: 'Andrey', status: 'Padawan',location:{city:'Moscow',country:'Russia'}},
        {id: 3,followed:true, fullName: 'Sveta', status: 'Ledi-Jedi',location:{city:'Dubai',country:'UAE'}},
        {id: 4,followed:false, fullName: 'Sasha', status: 'Jedi',location:{city:'Minsk',country:'Belarus'}}
    ]
}

const usersReducer = (state:UsersType = initialState,action:UsersActionsType):UsersType => {
    switch (action.type) {
        case FOLLOW:{
        // const usersCopy = {...state,users:[...state.users]}
        return  { ...state,users:state.users.map(el => el.id === action.userID ? {...el, followed: true} : {...el})}
        }
        case UNFOLLOW:{
            return  { ...state,users:state.users.map(el => el.id === action.userID ? {...el, followed: false} : {...el})}
        }
        default:
            return state;
    }
};
export const followAC = (userID) => ({type:FOLLOW,userID})
export const unFollowAC = (userID) => ({type:UNFOLLOW,userID})

export default usersReducer;