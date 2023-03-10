import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPostsContainer";
import {ProfileTypeProps} from "../ProfileContainer/ProfileContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfileProps = ProfileTypeProps & {
    profile:ProfileType
}

const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPosts  />
        </div>
    )
}

export default Profile;