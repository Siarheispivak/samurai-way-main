import React from 'react';
import s from "./Users.module.scss";
import userPhoto from "../../assets/images/user.png";

import {NavLink} from "react-router-dom";
import {FollowingInProgressType, setCurrentPage, UserType} from "../../../redux/users-reducer";
import {followUnfollowAPI} from "../../../api/api";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (totalCount: number) => void
    users: Array<UserType>
    followingInProgress:FollowingInProgressType
    follow:(userId:number)=>void
    unFollow:(userId:number)=>void
}

const Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    const pagination = pages.map(p => {
        const bold = props.currentPage === p ? s.selectPage : '';
        return <span key={p} className={bold}
                     onClick={() => {
                         props.onPageChanged(p)
                     }}>{p}</span>
    })

    const userInfo = props.users.map(el => {
        return (
            <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img src={el.photos.small != null ? el.photos.small : userPhoto} className={s.avatar}/>
                            </NavLink>

                        </div>
                        <div>
        {el.followed
            ? <button disabled={props.followingInProgress.some(id=>id === el.id)} onClick={() => {props.unFollow(el.id)}}>UnFollow</button>
            : <button disabled={props.followingInProgress.some(id=>id === el.id)} onClick={() => {props.follow(el.id)}}>Follow</button>}
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