import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import s from './Users.module.css'
import {setUsersAC} from "../../redux/users-reducer";


export const Users: React.FC<UsersTypeProps> = (props) => {
    if(props.users.length === 0 ){
        props.setUsers([
            {id: 1,photoUrl: 'http://surl.li/ejqss', followed: false, fullName: 'Dimych', status: 'Magistr', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2,photoUrl: 'http://surl.li/ejqrv', followed: false, fullName: 'Andrey', status: 'Padawan', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3,photoUrl: 'http://surl.li/ejqqk', followed: true, fullName: 'Sveta', status: 'Ledi-Jedi', location: {city: 'Dubai', country: 'UAE'}},
            {id: 4,photoUrl: 'http://surl.li/ejqsh', followed: false, fullName: 'Sasha', status: 'Jedi', location: {city: 'Minsk', country: 'Belarus'}}

        ])
    }
    return (
        <div>
            {props.users.map(el => {
                return (
                    <div key={el.id}>
                        <span>
                            <div>
                                <img src={el.photoUrl} className={s.avatar}/>
                            </div>
                            <div>
                                {el.followed
                                    ? <button onClick={()=>{props.unFollow(el.id)}}>UnFollow</button>
                                    : <button onClick={()=>{props.follow(el.id)}}>Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{el.fullName}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{el.location.country}</div>
                                <div>{el.location.city}</div>
                            </span>
                        </span>

                    </div>
                )
            })}
        </div>
    );
};

