import React from "react";
import styles from './smile.module.css'
import './smile.css'

const Smile = () => {
    return (
        <>
            <div id="smile">

                <div className="mouth"></div>
                <div className="eye left"></div>
                <div className="eye right"></div>
            </div>
            {/*<svg className={styles.svg} viewBox="0 0 10 10">*/}
            {/*    <circle className={styles.smile} cx="5" cy="5" r="4"*/}
            {/*            stroke-dashoffset="-.5"*/}
            {/*            stroke-dasharray="11.5,13.6327"/>*/}
            {/*    <circle className={styles.eyes} cx="5" cy="5" r="4"*/}
            {/*            stroke-dashoffset="-15.5"*/}
            {/*            stroke-dasharray="0,6.6327,0,17.5"/>*/}
            {/*</svg>*/}
            {/*<h1>Hover me !</h1>*/}
        </>
    )
}
export default Smile