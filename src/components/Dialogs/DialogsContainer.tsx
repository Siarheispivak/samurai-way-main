import React from 'react';
import {addMessageAC, DialogsPage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


type MapStatePropsType = {
    dialogsPage: DialogsPage

}
type MapDispatchPropsType = {
    addMessage: (newMessageBody:string) => void
}
export type DialogType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (newMessageBody:string) => {
            dispatch(addMessageAC(newMessageBody))
        }
    }
}



export default compose<React.ComponentType>(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs);
