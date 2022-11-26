import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>Me Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add post</button>
            </div>
            <div className={s.myPosts}>
                <Post message={'Hey,how are you?'} likesCount={15}/>
                <Post message={'its my first post'} likesCount={8}/>
            </div>
        </div>
    )
}

