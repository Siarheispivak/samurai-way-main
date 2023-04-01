import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followSuccess,
    FollowingInProgressType,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollowSuccess,
    UserType, unFollow, follow,
} from "../../redux/users-reducer";
import Users from "./Users/Users";
import Preloader from "../common/preloader/Preloader";
import {Redirect} from "react-router-dom";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:FollowingInProgressType
    isAuth:boolean
}
type MapDispatchPropsType = {
    followSuccess: (userID: number) => void
    unFollowSuccess: (userID: number) => void
    follow:(userId:number)=>void
    unFollow:(userId:number)=>void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress:(disabled:boolean,userId:number)=>void
    getUsers:(currentPage:number, pageSize:number)=>void
}

class UsersContainer extends React.Component<UsersTypeProps> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);


    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}

                />
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}
export type UsersTypeProps = MapStatePropsType & MapDispatchPropsType
export default connect(mapStateToProps, {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unFollow
})(UsersContainer)