import styles from '../styles/Home.module.css'
import {observer} from "mobx-react-lite"
import {UseStore} from '../store'
import {useEffect} from 'react'
import React, {useState} from 'react'
import {FooterTabBar} from "../components/FooterTabBar"
import {Button} from "antd-mobile";
import Router from "next/router";

export function getStaticProps() {
    //服务器运行的代码
    return {
        props: {}
    }
}

const Home = () => {
    const {tabs} = UseStore()
    const {user} = UseStore()
    //
    // useEffect(function () {
    //     user.redata()
    // }, [])

    useEffect(() => {
        console.log("tabs ", tabs.path)
        console.log("客户端获取数据12333", location.href)
    }, [])


    return (
        <div className="fixe flex-col h-screen">
            {/*<img className="h-[260px] w-full fixed z-0" src="/header.400aaebf.png" alt=""/>*/}

            <div className="flex-none z-10">
                <div className="px-4 w-full">
                    <div className="flex-grow justify-center px-2 my-4 mx-auto w-full">
                        <div className="w-full">
                            <div className="relative z-50">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <input type="text" name="s" id="s"
                                       className="bg-[rgba(0,0,0,.1)] block w-full rounded-md  border-transparent border-gray-300 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 transition duration-150 ease-in-out focus:bg-[rgba(0,0,0,.1)] focus:text-white focus:outline-none sm:text-sm"
                                       placeholder="输入纪念馆ID或馆名"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex h-[100px] w-full  justify-center items-center text-center ">
                    <div className="flex-1 text-white">
                        <p className="text-lg">八一建军节</p>
                        <p className="text-sm">还有36天</p>
                    </div>
                    <div className="flex-1 text-white">
                        <p className="text-2xl">6月25日</p>
                        <p className="text-sm">农历五月甘八</p>
                    </div>
                </div>
            </div>


             <div className="flex-grow">
                    <ul className="flex justify-center items-center text-center">
                        <li className="flex-1">
                            <div className="mx-auto w-[40px] h-[40px] "><img src="/tool1.png" alt=""/></div>
                            <p className="text-sm">管理纪念馆</p></li>
                        <li className="flex-1">
                            <div className="mx-auto w-[40px] h-[40px] "><img src="/tool2.png" alt=""/></div>

                            <p className="text-sm">创建纪念馆</p></li>
                        <li className="flex-1">
                            <div className="mx-auto w-[40px] h-[40px] "><img src="/tool3.png" alt=""/></div>
                            <p className="text-sm">人物纪念馆</p></li>
                    </ul>
            </div>

            <div className="flex-none">
                <FooterTabBar></FooterTabBar>
            </div>
        </div>
    )
}


export default observer(Home)
