import React from 'react';
import userPhoto from "../assets/images/user.png";
import s from "./Users.module.css";
import axios from "axios";
import {UsersTypeProps} from "./UsersContainer";

class Users extends React.Component<UsersTypeProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);

        });
    }


    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        const pagination = pages.map(p => {
            const bold = this.props.currentPage === p ? s.selectPage : ''
            return <span className={bold}
                         onClick={() => {this.onPageChanged(p)}}>{p}</span>
        })

        const userInfo = this.props.users.map(el => {
            return (
                <div key={el.id}>
                    <span>
                        <div>
                             <img src={el.photos.small != null ? el.photos.small : userPhoto} className={s.avatar}/>
                        </div>
                        <div>
                        {el.followed
                            ? <button onClick={() => {
                                this.props.unFollow(el.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
                            }}>Follow</button>}
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
    }
}

export default Users;