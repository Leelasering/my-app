import React from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {getAuthMeThunkCreator, setAuthUserData} from "./Redux/Auth_reduser";
import {setUserProfile} from "./Redux/Profile_reducer";
import {initializeApp} from "./Redux/App_reduser";
import Preloader from "./Components/General/PreLoader/Preloader";


class App extends React.Component {
    componentDidMount() {
        
          this.props.initializeApp();
    }


    render() {
        if(!this.props.initialized)
        {
          return <Preloader/>
        }

        else {

        return (

            <div className="App">
                <div className="Sub_Con">
                    <div className="big_header"></div>
                    <div className="Container">
                        <HeaderContainer/>
                        <NavBarContainer/>
                        <div className="content">
                            <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/News" render={() => <News/>}/>
                            <Route path="/Music" render={() => <Music/>}/>
                            <Route path="/Settings" render={() => <Settings/>}/>
                            <Route path="/Users" render={() => <UsersContainer/>}/>
                            <Route path="/Login" render={() => <Login/>}/>
                        </div>
                        {/*<Profile /> <Dialogs/>*/}
                    </div>
                </div>
            </div>

        );
         }
    }
}
let mapStateToProps = (state) => ({
    initialized: state.App.initialized



})
 export default connect(mapStateToProps, {initializeApp})(App);


