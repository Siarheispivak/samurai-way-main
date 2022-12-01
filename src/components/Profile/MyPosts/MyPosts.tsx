import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'


export const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hey,how are you?', likesCount:12},
        {id: 2, message: 'its my first post', likesCount:11}
    ]

    let postsElements = postsData.map(p=><Post message={p.message}  likesCount={p.likesCount} id={p.id} />)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add post</button>
            </div>
            <div className={s.myPosts}>
                {postsElements}
            </div>
        </div>
    )
}

