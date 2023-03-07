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
    isFetching:boolean
}
export type  UsersActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:false
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
        case 'TOGGLE-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

export const follow = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const unFollow = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', count:totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-FETCHING', isFetching} as const)

export default usersReducer;