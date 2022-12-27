import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AllActionsType, AppStateType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileTypeProps = {
    store: AppStateType
    dispatch:(action:AllActionsType)=>void
}


const Profile = (props: ProfileTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;