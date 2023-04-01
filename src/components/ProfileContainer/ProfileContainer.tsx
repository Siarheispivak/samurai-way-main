import React from 'react';
import Profile from "../Profile/Profile";
import {connect} from "react-redux";

import {getUserProfile, PostsType, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
    isAuth:boolean
}
type MapDispatchPropsType = {
    getUserProfile:(userId:string)=>void
}
export type ProfileTypeProps = MapStatePropsType & MapDispatchPropsType

type PathParamType = {
    userId: string
}
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
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
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
        newPostText: state.profilePage.newPostText,
        isAuth: state.auth.isAuth,
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

