import React from 'react';
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StatePropsType} from "../../../redux/store";


type MapStatePropsType = {
    profilePage: ProfilePageType
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state:StatePropsType):MapStatePropsType => {
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return{
        addPost:()=>{
            dispatch(addPostAC())
        },
        updateNewPostText: (text:string)=>{
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export type  MyPostType = MapStatePropsType & MapDispatchPropsType

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
