import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, ProfileActionsType, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, UpdateNewMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type AllActionsType =
    ReturnType<typeof addMessageAC>
    | ReturnType<typeof UpdateNewMessageActionType> |
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
export type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

export let store = createStore(rootReducers);

