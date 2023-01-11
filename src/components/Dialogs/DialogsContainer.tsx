import React from 'react';
import {addMessageAC, DialogsPage, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StatePropsType} from "../../redux/store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPage: DialogsPage
}
type MapDispatchPropsType = {
    addMessage: () => void
    UpdateNewMessageAC: (text: string) => void
}


let mapStateToProps = (state: StatePropsType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        UpdateNewMessageAC: (text: string) => {
            dispatch(UpdateNewMessageAC(text))
        }
    }
}
export type DialogType = MapStatePropsType & MapDispatchPropsType

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;