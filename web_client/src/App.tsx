import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import LoginPage, {IAuthData} from './Page/LoginPage';
import useAuth from "./Hooks/useAuth";
import PrivateRoute from "./Components/PrivateRouter";
import MainPage from './Page/MainPage';

const App = () => {
    const {Logout, Login, authLogin} = useAuth();

    const onSubmit = async (authData: IAuthData) => {
        const loginResult = Login(authData);
        // alert(loginResult ? 'Success!' : 'Error in login or password!')
    }

    return (
        <Router>
                <Switch>
                    <PrivateRoute authed={!authLogin} isReverse exact path="/login">
                        <LoginPage onSubmit={onSubmit}/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/" authed={!!authLogin}>
                        <MainPage login={authLogin} logOut={Logout}/>
                    </PrivateRoute>
                </Switch>
        </Router>
    );
}

export default App;
