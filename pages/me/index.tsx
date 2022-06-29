import {FooterTabBar} from "../../components/FooterTabBar"
import styles from "../../styles/Home.module.css";
import React from "react";

const index = () => {

    return (
        <div className={styles.app}>
            <div className={styles.body}>
                me
            </div>
            <div className={styles.bottom}>
                <FooterTabBar></FooterTabBar>
            </div>
        </div>
    )
}

export default index
