import React from 'react';
import Profile from "../Profile/Profile";
import {connect} from "react-redux";

import {getUserProfile, PostsType, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType

}
type PathParamType = {
    userId: string
}
type MapDispatchPropsType = {
    getUserProfile:(userId:string)=>void
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
    }

    render() {


        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
