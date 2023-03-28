export type AuthActionsType = setAuthUserDatatype

type initialStateType = {
    userId: number
    email: string
    login: string
    isAuth:boolean
}

let initialState: initialStateType = {
    userId: 0,
    email: '',
    login: '',
    isAuth:false
}
const authReducer = (state: initialStateType = initialState, action: AuthActionsType): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }

        default:
            return state;
    }
};
type setAuthUserDatatype = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: 'SET_USER_DATA',
    data: {userId, email, login}
} as const)

export default authReducer;