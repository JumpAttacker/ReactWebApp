import {useState} from "react";
import Constants from "../Constants/Constants";
import {IAuthData} from "../Page/LoginPage";

const useAuth = () => {
    const [authLogin, setAuth] = useState('');
    const {login, password} = Constants;

    const Login = (authData: IAuthData) => {
        if (authData.login === login && authData.password === password) {
            setAuth(authData.login);
            return true
        } else {
            return false
        }
    }

    const Logout = () => {
        setAuth('')
    }

    return {
        authLogin,
        Login,
        Logout
    }
}

export default useAuth;