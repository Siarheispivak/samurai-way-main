import React from 'react';
import s from './Friends.module.scss'
const Friends = (props:any) => {
    return (
            <div className={s.friendsInner}>
                <img src={props.avatar} alt="picture"/>
                <p>{props.name}</p>
            </div>
    );
};

export default Friends;