export type UserType = {
    id: number
    photoUrl: string
    photos: {
        small: null,
        large: null
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type initialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}
export type  UsersActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
}
const usersReducer = (state: initialStateType = initialState, action: UsersActionsType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : {...el})}
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : {...el})
            }
        }
        case 'SET-USERS': {
            return {...state, users: action.users}
            //49 lesson 33 minute
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
};

export const followAC = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const unFollowAC = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', count:totalUsersCount} as const)

export default usersReducer;