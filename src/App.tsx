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
import {StorePropsType} from "./redux/State";

type AppPropsType = {
    store:StorePropsType
    // addPost:()=>void
    // updateNewPostText:(newText:string)=>void
    // updateNewMessageText:(newText:string)=>void
    // addMessage:()=>void
}


const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage} addMessage={props.store.addMessage.bind(props.store)}  updateNewMessageText={props.store.updateNewMessageText.bind(props.store)} />}/>
                <Route path='/profile' render={() => <Profile profilePage={state.profilePage} addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)} />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;
