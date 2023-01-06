import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AllActionsType, AppStateType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileTypeProps = {
    dispatch:(action:AllActionsType)=>void
}


const Profile = (props: ProfileTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer  dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;