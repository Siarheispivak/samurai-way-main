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
import {addMessage, StatePropsType} from "./redux/State";
type AppPropsType = {

    state:StatePropsType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
    updateNewMessageText:(newText:string)=>void
    addMessage:()=>void
}


const App: React.FC<AppPropsType> = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} addMessage={addMessage}  updateNewMessageText={props.updateNewMessageText} />}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;
