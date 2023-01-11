import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostType} from "./MyPostsContainer";


 const MyPosts = (props:MyPostType) => {
    let postsElements = props.profilePage.posts.map((p)=><Post key={p.id} message={p.message}  likesCount={p.likesCount} id={p.id} />)
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
                    <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
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
