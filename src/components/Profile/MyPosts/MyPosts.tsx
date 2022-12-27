import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType} from "../../../redux/store";

type MyPostsType = {
    addPost:()=>void
    posts:PostsType[]
    newPostText:string
    updateNewPostText:(text:string)=>void
}

 const MyPosts = (props:MyPostsType) => {
    let postsElements = props.posts.map((p)=><Post key={p.id} message={p.message}  likesCount={p.likesCount} id={p.id} />)

     let onAddPost = () =>{
         props.addPost()
     }

     let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value;
         props.updateNewPostText(text)
     }

     return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>

                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.myPosts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
