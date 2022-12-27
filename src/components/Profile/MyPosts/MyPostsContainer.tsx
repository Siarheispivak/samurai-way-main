import React, {ChangeEvent} from 'react';
import {PostsType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {AllActionsType, AppStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
    store:AppStateType
    dispatch:(action:AllActionsType)=>void
}

 const MyPostsContainer = (props:MyPostsContainerType) => {
    let state = props.store;

     let addPost = () =>{
         props.dispatch(addPostAC());
     }
     let onPostChange = (text:string) => {
         props.dispatch(updateNewPostTextAC(text))
     }
     return (
    <MyPosts updateNewPostText={onPostChange}
             addPost={addPost}
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText}/>
    )
}
export default MyPostsContainer;
