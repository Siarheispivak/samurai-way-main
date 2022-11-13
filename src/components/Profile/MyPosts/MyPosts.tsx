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
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

                export default MyPosts;