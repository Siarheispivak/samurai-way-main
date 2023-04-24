import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPostsContainer";
import {ProfileTypeProps} from "../ProfileContainer/ProfileContainer";
import {ProfileType, updateUserStatus} from "../../redux/profile-reducer";


type ProfileProps = ProfileTypeProps & {
    profile:ProfileType
    status:string
    updateUserStatus:(status:string)=>void
}

const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPosts  />
        </div>
    )
}

export default Profile;