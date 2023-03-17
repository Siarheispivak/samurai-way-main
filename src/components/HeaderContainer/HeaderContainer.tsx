import React from 'react';
import Header from "./Header/Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profile-reducer";


type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string,) => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {

                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }

        });
    }

    render() {
        debugger
        return <Header {...this.props}/>

    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)