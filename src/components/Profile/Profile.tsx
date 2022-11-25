import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;