import React, {RefObject} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'


 const MyPosts = (props:any) => {
    let postsElements = props.posts.map((p:any)=><Post key={p.id} message={p.message}  likesCount={p.likesCount} id={p.id} />)

     let newPostElement = React.createRef<HTMLTextAreaElement>();

     let addPost = () =>{
         let text = newPostElement.current?.value
         props.addPost(text)
         // newPostElement.current?.value = ''
     }


     return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} ></textarea>
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
