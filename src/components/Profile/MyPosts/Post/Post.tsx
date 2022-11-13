import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return  (
                    <div className={s.item}>
                        <img src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg" alt=""/>
                        post 1
                        <div>
                            <span>like</span>
                        </div>
                    </div>
    )
}

export default Post;