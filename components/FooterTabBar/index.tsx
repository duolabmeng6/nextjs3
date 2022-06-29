import {TabBar} from "antd-mobile";
import React, {useState} from "react";
import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline} from "antd-mobile-icons";
import Router from "next/router";


export function FooterTabBar({activeKey="/"}) {
    const tabs = [
        {
            key: '/',
            title: '首页',
            icon: <AppOutline/>,
        },
        {
            key: '/tab2',
            title: '我的待办',
            icon: <UnorderedListOutline/>,
        },
        {
            key: '/tab3',
            title: '我的消息',
            icon: <MessageOutline/>,
        },
        {
            key: '/me',
            title: '个人中心',
            icon: <UserOutline/>,
        },
    ]

    const setRouteActive = (value: string) => {
        Router.push(value)
    }
    return (
        <>
            <TabBar activeKey={activeKey} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                ))}
            </TabBar>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()

    return {
        props: {
            stars: json.stargazers_count,
        },
    }
}

export default Index
