import {FooterTabBar} from "../../components/FooterTabBar"
import styles from "../../styles/Home.module.css";
import React from "react";
import {Button} from "antd-mobile";
import Router from "next/router";

const index = () => {

    return (
        <div className={styles.app}>
            <div className={styles.body}>
                index
                <Button onClick={()=>Router.push("/login")}>登录</Button>
                <Button onClick={()=>Router.push("/user/set")}>设置</Button>

            </div>
            <div className={styles.bottom}>
                <FooterTabBar></FooterTabBar>
            </div>
        </div>
    )
}

export default index
