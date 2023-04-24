import React from 'react';
import Profile from "../Profile/Profile";
import {connect} from "react-redux";

import {getUserProfile, getUserStatus, PostsType, ProfileType, updateUserStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
    status:string

}
type PathParamType = {
    userId: string
}
type MapDispatchPropsType = {
    getUserProfile:(userId:string)=>void
    getUserStatus:(userId:string)=>void
    updateUserStatus:(status:string)=>void
}
export type ProfileTypeProps = MapStatePropsType & MapDispatchPropsType
type ProfileWithRouterPropsType = RouteComponentProps<PathParamType> & ProfileTypeProps


class ProfileContainer extends React.Component<ProfileWithRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {


        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        status:state.profilePage.status
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
