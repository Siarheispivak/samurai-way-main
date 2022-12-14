import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {AllActionsType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {store} from "./redux/store";
import UsersContainer from "./components/Users/UsersContainer";




type AppPropsType = {
    dispatch:(action:AllActionsType)=>void
}


const App: React.FC<AppPropsType> = (props) => {
    const state = store.getState();

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;
