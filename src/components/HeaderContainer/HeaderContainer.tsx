import React from 'react';
import Header from "./Header/Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    getAuthUserData:()=>void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props}/>

    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)