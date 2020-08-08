import React from "react";
import FilesPanel from "./FilesPanel";
import styles from './authPanel.module.css'
export interface IAuthPanel {
    login: string,
    logOut: Function
}

const AuthPanel: React.FC<IAuthPanel> = ({login,logOut}) => {
    const logOutClick = () => {
        logOut();
    }

    return (
        <>
            {/*<div style={{textAlign: "center"}}>*/}
            <div style={{marginLeft: "20%",marginRight: "20%"}}>

            <h3>Welcome, {login}!</h3>
            <button onClick={logOutClick} className={styles.logoutButton}>Sign-out</button>

            <FilesPanel/>
            </div>
        </>
    )
}
export default AuthPanel