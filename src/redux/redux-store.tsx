import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profile-reducer";
import dialogsReducer, {DialogsActionsType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersActionsType} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer
})
export let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//все типы экшенов для всего App
export type AppActionsType =
    | UsersActionsType
    | ProfileActionsType
    // | SidebarActionsType
    | AuthActionsType
    | DialogsActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store.getState()



