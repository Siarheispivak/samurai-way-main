import React from 'react';
import userPhoto from "../assets/images/user.png";
import s from "./Users.module.css";
import axios from "axios";
import {UsersTypeProps} from "./UsersContainer";

class Users extends React.Component<UsersTypeProps> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
                {this.props.users.map(el => {
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
                                <div>{el.fullName}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{"el.location.country"}</div>
                                <div>{"el.location.city"}</div>
                            </span>
                        </span>

                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Users;