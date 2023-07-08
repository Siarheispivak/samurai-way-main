import React from 'react';
import {addPostAC, ProfilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";


type MapStatePropsType = {
    profilePage: ProfilePageType

}
type MapDispatchPropsType = {
    addPost: (newPostBody:string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostBody:any) => {
            dispatch(addPostAC(newPostBody))
        }
    }
}

export type  MyPostType = MapStatePropsType & MapDispatchPropsType

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)

