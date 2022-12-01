import React from 'react';
import s from './Post.module.css';

type  MyPostsProps = {
    id:number
    message:string
    likesCount:number
}


const Post: React.FC<MyPostsProps> = (props) => {

    return  (
                    <div className={s.item}>
                        <img src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg" alt=""/>
                        {props.message}
                        <div>
                            <span>likes</span> {props.likesCount}
                        </div>
                    </div>
    )
}

export default Post;