import React from 'react';
import Profile from "../Profile/Profile";
import axios from "axios";
import {connect} from "react-redux";

import {PostsType, ProfileType, setUser, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
}
type MapDispatchPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    setUser:(userId:string)=>void
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
        this.props.setUser(userId)


        // this.props.toggleIsFetching(true);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
        //     this.props.setUserProfile(response.data);
        // });
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
        newPostText: state.profilePage.newPostText,
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUser})(WithUrlDataContainerComponent)

