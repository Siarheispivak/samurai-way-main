import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType, ProfilePageType} from "../../../redux/State";

type MyPostsType = {
    posts:PostsType[]
    newPostText:string
    addPost:()=>void
    updateNewPostText:(newText:string)=>void//1!!!!!!!!!!
}

 const MyPosts = (props:MyPostsType) => {
     console.log(props.posts)
    let postsElements = props.posts.map((p)=><Post key={p.id} message={p.message}  likesCount={p.likesCount} id={p.id} />)


     // let newPostElement = React.createRef<HTMLTextAreaElement>();

     let addPost = () =>{
         props.addPost();
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

                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.myPosts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
