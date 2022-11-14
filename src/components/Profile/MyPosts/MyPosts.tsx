import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.MyPosts}>
                <Post message={'Hey,how are you?'} like={15}/>
                <Post message={'its my first post'} like={8}/>
            </div>
        </div>
    )
}

                export default MyPosts;