import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfilePropsType = {
profile:ProfileType
    status:string
    updateUserStatus:(status:string)=>void
}

export const ProfileInfo = (props:ProfilePropsType) => {
    if(!props.profile){
        return <Preloader/>
    }
    const large = props.profile.photos ? props.profile.photos.large : ''
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={large} alt=""/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
};

