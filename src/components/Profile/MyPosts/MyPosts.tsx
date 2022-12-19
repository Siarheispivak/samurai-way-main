import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionsTypes, PostsType} from "../../../redux/State";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsType = {
    posts:PostsType[]
    newPostText:string
    dispatch:(action:ActionsTypes)=>void
}

 const MyPosts = (props:MyPostsType) => {
    let postsElements = props.posts.map((p)=><Post key={p.id} message={p.message}  likesCount={p.likesCount} id={p.id} />)

     let addPost = () =>{
         props.dispatch(addPostAC());
     }

     let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value;
         props.dispatch(updateNewPostTextAC(text))
     }

     return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>

                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.myPosts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
