import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message:string
    like:number
}

const Post = (props:PostPropsType) => {

    return  (
                    <div className={s.item}>
                        <img src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg" alt=""/>
                        {props.message}
                        <div>
                            <span>{props.like}</span>
                        </div>
                    </div>
    )
}

export default Post;