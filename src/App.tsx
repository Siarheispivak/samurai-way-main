import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {AllActionsType, AppStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    dispatch:(action:AllActionsType)=>void
}


const App: React.FC<AppPropsType> = (props) => {
    // const state = props.store;

    return (
        <div className='app-wrapper'>
            <Header/>
            {/*<Navbar state={state.sidebar}/>*/}
            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render={() => <DialogsContainer dispatch={props.dispatch}/>}/>
                <Route path='/profile' render={() => <Profile dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;
