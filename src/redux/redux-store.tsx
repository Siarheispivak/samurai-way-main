import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, UpdateNewMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

export type AllActionsType =
    ReturnType<typeof addMessageAC>
    | ReturnType<typeof UpdateNewMessageAC> |
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
})
export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>



export let store = createStore(rootReducer);

