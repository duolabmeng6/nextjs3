import {TabBar} from "antd-mobile";
import React, {useEffect, useState} from "react";
import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline} from "antd-mobile-icons";
import Router from "next/router";
import {UseStore} from "../../store";


const FooterTabBar = () => {
    const {tabs} = UseStore()

    const tabsItem = [
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
        tabs.path = value
    }

    return (
        <>
            <TabBar activeKey={tabs.path} onChange={value => setRouteActive(value)}>
                {tabsItem.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                ))}
            </TabBar>
        </>
    )
}

export {FooterTabBar}