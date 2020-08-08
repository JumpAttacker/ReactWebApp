import React, {useState} from 'react';
import styles from './login.module.css';

enum InputType {
    Login,
    Password
}

export interface ILoginPageProps{
    onSubmit: Function
}

export interface IAuthData{
    login: string
    password: string
}

const LoginPage: React.FC<ILoginPageProps> = ({onSubmit}) => {
    const [authData, setAuthData] = useState({
        login: '',
        password: ''
    } as IAuthData)

    const handleChange = (value: string, type: InputType) => {
        console.log(value)
        if (type === InputType.Login) {
            setAuthData(prevState => {
                return {...prevState, login: value}
            })
        } else {
            setAuthData(prevState => {

                return {...prevState, password: value}
            })
        }
    }

    const handleSubmit = (event: any) => {
        console.log('submit',authData)
        onSubmit(authData);
        event.preventDefault();
    }
    return (
        <form className={styles.parent + ' ' + styles.center} onSubmit={handleSubmit}>
            <div className={styles.div1}>
                <label><b>Login</b></label>
            </div>
            <div className={styles.div2}>
                {/*<input type="text" placeholder="Enter Username" name="login" required/>*/}
                <input type="text" value={authData.login} onChange={(event) => handleChange(event.target.value, InputType.Login)}/>
            </div>
            <div className={styles.div3}>
                <label><b>Password</b></label>
            </div>
            <div className={styles.div4}>
                {/*<input type="password" placeholder="Enter Password" name="psw" required/>*/}
                <input type="password" value={authData.password} onChange={(event) => handleChange(event.target.value, InputType.Password)}/>
            </div>
            <div className={styles.div5}>
                <input type="submit" value="Sign in"/>
            </div>
        </form>
    )
}
export default LoginPage