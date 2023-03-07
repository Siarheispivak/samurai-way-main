import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (totalCount: number) => void
    users: Array<UserType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

const Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    const pagination = pages.map(p => {
        const bold = props.currentPage === p ? s.selectPage : '';
        return <span className={bold}
                     onClick={() => {
                         props.onPageChanged(p)
                     }}>{p}</span>
    })

    const userInfo = props.users.map(el => {
        return (
            <div key={el.id}>
                    <span>
                        <div>
                             <img src={el.photos.small != null ? el.photos.small : userPhoto} className={s.avatar}/>
                        </div>
                        <div>
                        {el.followed
                            ? <button onClick={() => {props.unFollow(el.id)}}>UnFollow</button>
                            : <button onClick={() => {props.follow(el.id)}}>Follow</button>}
                        </div>
                    </span>
                <span>
                    <span>
                        <div>NAME: {el.name}</div>
                        <div>ID: {el.id}</div>
                    </span>
                        <span>
                            <div>{"el.location.country"}</div>
                                <div>{"el.location.city"}</div>
                        </span>
                    </span>

            </div>
        )
    })
    return (
        <div>
            {pagination}
            <div>
                {userInfo}
            </div>
        </div>
    );
};

export default Users
;