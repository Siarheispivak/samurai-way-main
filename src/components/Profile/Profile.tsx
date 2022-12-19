import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/State";

type ProfileTypeProps = {
    profilePage:ProfilePageType
    // addPost:()=>void
    // updateNewPostText:(newText:string)=>void
    dispatch:(action:ActionsTypes)=>void
}


const Profile = (props:ProfileTypeProps) => {

    return  (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;