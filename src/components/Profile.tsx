import React from 'react';
import './Profile.css';

const Profile = () => {
    return  (
        <div className='content'>
            <div>
                <img src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>

        </div>
    )
}

export default Profile;