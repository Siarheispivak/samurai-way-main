import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostType} from "./MyPostsContainer";
import {Field, Form, reduxForm} from "redux-form";

type MyPostsPropsType = MyPostType

 const MyPosts = (props:MyPostsPropsType) => {
    const {profilePage,addPost} = props
    let postsElements = profilePage.posts.map((p)=><Post key={p.id} message={p.message}  likesCount={p.likesCount} id={p.id} />)
     let onAddNewPost = (value:any) => {
         addPost(value.newPostBody)
     }

     return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddNewPost}/>
            <div className={s.myPosts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props:any) => {
    return(
        <Form  onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostBody" placeholder="Enter your message"/>
            <button>Add post</button>
        </Form>
    )
}

const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;
