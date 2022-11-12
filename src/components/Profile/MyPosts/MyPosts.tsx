import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import './MyPosts.module.css'

const MyPosts = () => {
    return (
            <div>
            My posts
            <div>
            <textarea></textarea>
            <button>Add Post</button>

            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
            </div>
                <div/>

            )
}

export default MyPosts;