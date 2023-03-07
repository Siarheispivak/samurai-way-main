import React from 'react';
import preloader from "../../assets/loader/Spinner.svg";
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div>
            {<img src={preloader} className={s.preloader}/>}
        </div>
    );
};

export default Preloader;