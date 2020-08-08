import React from "react";
import styles from './mainPage.module.css';
import AuthPanel from "../Components/AuthPanel";
import LoremColumn from "../Components/LoremColumn";
import DatePanel from "../Components/DatePanel";


export interface IMainPage {
    login: string,
    logOut: Function
}

const MainPage: React.FC<IMainPage> = ({login,logOut}) => {
    return (
        <div className={styles.myFlexCont}>
            <div className={styles.myFlexBox}>
                <AuthPanel login={login} logOut={logOut}/>
            </div>
            <div className={styles.myFlexBox}>
                <LoremColumn/>
            </div>
            <div className={styles.myFlexBox}>
                <DatePanel/>
            </div>
        </div>
    )
}
export default MainPage