import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType, UserType} from "../../redux/users-reducer";
import Users from "./Users";




type MapStatePropsType = {
    users: Array<UserType>
}
type MapDispatchPropsType = {
    follow:(userID:number)=>void
    unFollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow:(userID)=>{
            dispatch(followAC(userID))
        },
        unFollow:(userID)=>{
            dispatch(unFollowAC(userID))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export type UsersTypeProps = MapStatePropsType & MapDispatchPropsType

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;