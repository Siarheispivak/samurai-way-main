import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostType} from "./MyPostsContainer";

type MyPostsPropsType = MyPostType

 const MyPosts = (props:MyPostsPropsType) => {
    const {profilePage,addPost, updateNewPostText} = props
    let postsElements = profilePage.posts.map((p)=><Post key={p.id} message={p.message}  likesCount={p.likesCount} id={p.id} />)
     let onAddPost = () =>{
         addPost()
     }

     let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value;
         updateNewPostText(text)
     }

     return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={profilePage.newPostText} onChange={onPostChange}/>
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
