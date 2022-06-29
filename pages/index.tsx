import styles from '../styles/Home.module.css'
import {observer} from "mobx-react-lite"
import {useStore} from '../store'
import {useEffect} from 'react'
import React, {useState} from 'react'
import {FooterTabBar} from "../components/FooterTabBar"
import {Button} from "antd-mobile";
import Router from "next/router";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


export function getStaticProps() {
    //服务器运行的代码
    return {
        props: {}
    }
}

const Home = () => {
    const {tabs} = useStore()
    const {user} = useStore()
    //
    // useEffect(function () {
    //     user.redata()
    // }, [])

    useEffect(() => {
        console.log("tabs ", tabs.path)
        console.log("客户端获取数据12333", location.href)
    }, [])


    return (
        <div className="bg-white h-screen flex flex-col">
            <div className="flex-none h-[260px] w-full bg-no-repeat " style={{
                backgroundImage: "url(/header.400aaebf.png)",
                backgroundSize: "100% 100%"
            }}>
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

                <div className="flex h-[100px] w-full  justify-center items-center text-center">
                    <div className="flex-1 text-white text-left p-10">
                        <p className="text-lg">八一建军节</p>
                        <p className="text-sm my-4">还有36天</p>
                    </div>
                    <div className="flex-1 text-white">
                        <p className="text-3xl">6月25日</p>
                        <p className="text-sm my-2">农历五月甘八</p>
                    </div>
                </div>


            </div>

            <div className=" flex-grow px-4">
                <ul className="flex justify-center items-center text-center  bg-white shadow -mt-6 px-4 py-2 shadow  shadow-md rounded-lg">
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


                {/*<div className="mt-4 flex items-center p-2 shadow">*/}
                {/*    <div className="h-[32px] w-[32px] bg-slate-300">*/}
                {/*        <img src="/tool1.png" alt=""/></div>*/}
                {/*    <div className="ml-2 flex-grow">滚动的的通知</div>*/}
                {/*    <div>6天前</div>*/}
                {/*</div>*/}

                <Swiper
                    modules={[Autoplay, Navigation]}
                    direction={"vertical"}
                    className="h-[30px] w-full mt-4 bg-gray-50 rounded-lg"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <div className="h-[30px] flex items-center p-2 text-gray-500">
                            <div className="h-[22px] w-[22px] bg-slate-300 rounded-full">
                                <img src="/tool1.png" alt=""/></div>
                            <div className="ml-2 text-blue-400">冰冰冰</div>
                            <div className="ml-2 flex-grow text-sm">滚动的的通知1</div>
                            <div className="text-sm">3天前</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[30px] flex items-center p-2 text-gray-500">
                            <div className="h-[22px] w-[22px] bg-slate-300 rounded-full">
                                <img src="/tool1.png" alt=""/></div>
                            <div className="ml-2 text-blue-400">冰冰冰</div>
                            <div className="ml-2 flex-grow text-sm">滚动的的通知1</div>
                            <div className="text-sm">3天前</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[30px] flex items-center p-2 text-gray-500">
                            <div className="h-[22px] w-[22px] bg-slate-300 rounded-full">
                                <img src="/tool1.png" alt=""/></div>
                            <div className="ml-2 text-blue-400">冰冰冰</div>
                            <div className="ml-2 flex-grow text-sm">滚动的的通知1</div>
                            <div className="text-sm">3天前</div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="flex items-center mt-2">
                    <div className="">
                        <span className="border-b-2 border-green-500 text-2xl">管理纪念馆</span>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex-none text-sm text-gray-400">查看更多></div>
                </div>


                <Swiper
                    className="h-auto w-full mt-4 bg-gray-50 rounded-lg"
                    spaceBetween={0}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}

                >
                    <SwiperSlide>
                        <div className="mt-2 flex flex-col w-full">
                            <div className="bg-gray-50 pb-4">
                                <div className="flex w-auto justify-end text-xs text-white">
                                    <div
                                        className="h-[22px] w-[53px] py-1 px-2 text-xs"
                                        style={{
                                            background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAsCAMAAAC6/t3UAAAA4VBMVEUAAAAHwGYJvGwlgdcjhs4KuXIkg9Mgi8UiiMoMtncgjMQNtHslgdclgtYlgtUlgdclgdYHwGYlgdYmgdclgdclgdclgtUmgdclgtUHv2cmgdYlgtQIv2clg9MHwGYHv2YJu24IvWsfjcAekbock7UamawYm6cXnqMWoJ8Tp5EQrIkPsIMOsn8Hv2cNtHwiiMkhisYLuHQKunEkg9Mfj74bl7AVopsVpJkUpZYRqo0QroYkhNEjhc8jhs0ih8sgjMMMtXkMtnYIvmglgtUlgdcdkrgclbMclrEZmqkUppUSqY6D6uOrAAAAIHRSTlMA8/Ly8vLy8vLyCPIvGXxnVuXBt6iUQ+Xf09DQn5RgK2E28MMAAAEJSURBVFjD3dhHdsIwFIXh5zghiQy2Q0tv7r3SO5jU/S8ImcMKGNyB/g18Ax0d6T0SrhdGqOLHdwIVx9IbteW6Rt3lsRvedZ1hGIOBaZpflmV9/wyHtm3/Oo7juq7neaPReDyZ/Pm+/z+dBkEwm4VhGEVRoijKLe/q2MUpiXdH2p5XVWVZzueLxXK5WqVpmmXZen0elSSbzXab53lRFB+8T95uF/OIoSiJqIujmjiKZByl4qgWjqInHKXjKIajqIujmjiKZByl4qgWjqJnHKXjKIaj6BVHqTCKNWBUH3dWbRGvsIajHkR8RHowilUwqr+HUR0Rv5wajroXcejpoSjkgKrjxu4ObJlwAFpI9XFUbBf2AAAAAElFTkSuQmCC) no-repeat",
                                            backgroundSize: "100%"
                                        }}
                                    >
                                        亲友团
                                    </div>
                                </div>

                                <div className="flex flex-row p-4">
                                    <div className="h-[92px] w-[75px] p-2"
                                         style={{
                                             background: "url(/border1.3acff93c.png) no-repeat"
                                             ,
                                             backgroundSize: "100%"
                                         }}>
                                        <img className="h-auto w-full"
                                             src="/getImages.png"
                                             alt=""/>
                                    </div>
                                    <div className="pt-1 pl-4">
                                        <div className="text-xl">xxx纪念馆</div>
                                        <div className="mt-1 text-sm text-gray-400">1111-11-11-2222-22-22</div>
                                        <div className="mt-1 text-sm text-gray-400">天道酬勤</div>
                                    </div>
                                </div>

                                <div className="flex justify-end pr-4">
                                    <div className="rounded-full bg-red-300 px-6 py-1 text-sm text-white"
                                         style={{
                                             backgroundImage: "linear-gradient(90deg,#07c065,#2680d8)"
                                         }}>去祭拜
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-2 flex flex-col w-full">
                            <div className="bg-gray-50 pb-4">
                                <div className="flex w-auto justify-end text-xs text-white">
                                    <div
                                        className="h-[22px] w-[53px] py-1 px-2 text-xs"
                                        style={{
                                            background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAsCAMAAAC6/t3UAAAA4VBMVEUAAAAHwGYJvGwlgdcjhs4KuXIkg9Mgi8UiiMoMtncgjMQNtHslgdclgtYlgtUlgdclgdYHwGYlgdYmgdclgdclgdclgtUmgdclgtUHv2cmgdYlgtQIv2clg9MHwGYHv2YJu24IvWsfjcAekbock7UamawYm6cXnqMWoJ8Tp5EQrIkPsIMOsn8Hv2cNtHwiiMkhisYLuHQKunEkg9Mfj74bl7AVopsVpJkUpZYRqo0QroYkhNEjhc8jhs0ih8sgjMMMtXkMtnYIvmglgtUlgdcdkrgclbMclrEZmqkUppUSqY6D6uOrAAAAIHRSTlMA8/Ly8vLy8vLyCPIvGXxnVuXBt6iUQ+Xf09DQn5RgK2E28MMAAAEJSURBVFjD3dhHdsIwFIXh5zghiQy2Q0tv7r3SO5jU/S8ImcMKGNyB/g18Ax0d6T0SrhdGqOLHdwIVx9IbteW6Rt3lsRvedZ1hGIOBaZpflmV9/wyHtm3/Oo7juq7neaPReDyZ/Pm+/z+dBkEwm4VhGEVRoijKLe/q2MUpiXdH2p5XVWVZzueLxXK5WqVpmmXZen0elSSbzXab53lRFB+8T95uF/OIoSiJqIujmjiKZByl4qgWjqInHKXjKIajqIujmjiKZByl4qgWjqJnHKXjKIaj6BVHqTCKNWBUH3dWbRGvsIajHkR8RHowilUwqr+HUR0Rv5wajroXcejpoSjkgKrjxu4ObJlwAFpI9XFUbBf2AAAAAElFTkSuQmCC) no-repeat",
                                            backgroundSize: "100%"
                                        }}
                                    >
                                        亲友团
                                    </div>
                                </div>

                                <div className="flex flex-row p-4">
                                    <div className="h-[92px] w-[75px] p-2"
                                         style={{
                                             background: "url(/border1.3acff93c.png) no-repeat"
                                             ,
                                             backgroundSize: "100%"
                                         }}>
                                        <img className="h-auto w-full"
                                             src="/getImages.png"
                                             alt=""/>
                                    </div>
                                    <div className="pt-1 pl-4">
                                        <div className="text-xl">xxx纪念馆</div>
                                        <div className="mt-1 text-sm text-gray-400">1111-11-11-2222-22-22</div>
                                        <div className="mt-1 text-sm text-gray-400">天道酬勤</div>
                                    </div>
                                </div>

                                <div className="flex justify-end pr-4">
                                    <div className="rounded-full bg-red-300 px-6 py-1 text-sm text-white"
                                         style={{
                                             backgroundImage: "linear-gradient(90deg,#07c065,#2680d8)"
                                         }}>去祭拜
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-2 flex flex-col w-full">
                            <div className="bg-gray-50 pb-4">
                                <div className="flex w-auto justify-end text-xs text-white">
                                    <div
                                        className="h-[22px] w-[53px] py-1 px-2 text-xs"
                                        style={{
                                            background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAsCAMAAAC6/t3UAAAA4VBMVEUAAAAHwGYJvGwlgdcjhs4KuXIkg9Mgi8UiiMoMtncgjMQNtHslgdclgtYlgtUlgdclgdYHwGYlgdYmgdclgdclgdclgtUmgdclgtUHv2cmgdYlgtQIv2clg9MHwGYHv2YJu24IvWsfjcAekbock7UamawYm6cXnqMWoJ8Tp5EQrIkPsIMOsn8Hv2cNtHwiiMkhisYLuHQKunEkg9Mfj74bl7AVopsVpJkUpZYRqo0QroYkhNEjhc8jhs0ih8sgjMMMtXkMtnYIvmglgtUlgdcdkrgclbMclrEZmqkUppUSqY6D6uOrAAAAIHRSTlMA8/Ly8vLy8vLyCPIvGXxnVuXBt6iUQ+Xf09DQn5RgK2E28MMAAAEJSURBVFjD3dhHdsIwFIXh5zghiQy2Q0tv7r3SO5jU/S8ImcMKGNyB/g18Ax0d6T0SrhdGqOLHdwIVx9IbteW6Rt3lsRvedZ1hGIOBaZpflmV9/wyHtm3/Oo7juq7neaPReDyZ/Pm+/z+dBkEwm4VhGEVRoijKLe/q2MUpiXdH2p5XVWVZzueLxXK5WqVpmmXZen0elSSbzXab53lRFB+8T95uF/OIoSiJqIujmjiKZByl4qgWjqInHKXjKIajqIujmjiKZByl4qgWjqJnHKXjKIaj6BVHqTCKNWBUH3dWbRGvsIajHkR8RHowilUwqr+HUR0Rv5wajroXcejpoSjkgKrjxu4ObJlwAFpI9XFUbBf2AAAAAElFTkSuQmCC) no-repeat",
                                            backgroundSize: "100%"
                                        }}
                                    >
                                        亲友团
                                    </div>
                                </div>

                                <div className="flex flex-row p-4">
                                    <div className="h-[92px] w-[75px] p-2"
                                         style={{
                                             background: "url(/border1.3acff93c.png) no-repeat"
                                             ,
                                             backgroundSize: "100%"
                                         }}>
                                        <img className="h-auto w-full"
                                             src="/getImages.png"
                                             alt=""/>
                                    </div>
                                    <div className="pt-1 pl-4">
                                        <div className="text-xl">xxx纪念馆</div>
                                        <div className="mt-1 text-sm text-gray-400">1111-11-11-2222-22-22</div>
                                        <div className="mt-1 text-sm text-gray-400">天道酬勤</div>
                                    </div>
                                </div>

                                <div className="flex justify-end pr-4">
                                    <div className="rounded-full bg-red-300 px-6 py-1 text-sm text-white"
                                         style={{
                                             backgroundImage: "linear-gradient(90deg,#07c065,#2680d8)"
                                         }}>去祭拜
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


                {/*https://play.tailwindcss.com/8ndP3njdQ8*/}
                <div className="mt-2 flex items-center">
                    <div className="">
                        <span className="border-b-2 border-green-500 text-2xl">纪念馆排行</span>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex-none text-sm text-gray-400">查看更多></div>
                </div>

                <div className="mt-4 flex justify-center items-center">
                    <div className="rounde-lg flex items-end">
                        <div className="flex h-[166px] w-[116px] flex-col p-2 items-center rounded-md bg-gray-100">
                            <img className="top-20 h-7 w-7" src="r1.png" alt=""/>
                            <div
                                className="-mt-1 h-[62px] w-[62px] overflow-hidden rounded-full border-2 border-[#F7CA45]">
                                <img className="h-full w-full bg-white" src="/getImages.png" alt=""/>
                            </div>
                            <div className="mt-[18px] text-sm text-gray-600">孙悟空馆子1</div>
                            <div className="mt-2 text-xs text-gray-400">缅怀值: <span className="text-red-400">9999</span>
                            </div>
                        </div>
                        <div className="p-2 order-first flex h-[156px] w-[116px] flex-col items-center rounded-md">
                            <img className="top-20 h-7 w-7" src="r2.png" alt=""/>
                            <div
                                className="-mt-1 h-[55px] w-[55px] overflow-hidden rounded-full border-2 border-[#E9B2B0] bg-white">
                                <img className="h-full w-full bg-white" src="/getImages.png" alt=""/>
                            </div>
                            <div className="mt-4 text-sm text-gray-600">孙悟空馆子2</div>
                            <div className="mt-2 text-xs text-gray-400">缅怀值: <span className="text-red-400">9999</span>
                            </div>
                        </div>
                        <div className="p-2 flex h-[156px] w-[116px] flex-col items-center rounded-md">
                            <img className="top-20 h-7 w-7" src="r3.png" alt=""/>
                            <div
                                className="-mt-1 h-[55px] w-[55px] overflow-hidden rounded-full border-2 border-orange-400 bg-white">
                                <img className="h-full w-full bg-white" src="/getImages.png" alt=""/>
                            </div>
                            <div className="mt-4 text-sm text-gray-600">孙悟空馆子3</div>
                            <div className="mt-2 text-xs text-gray-400">缅怀值: <span className="text-red-400">9999</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 flex items-center">
                    <div className="">
                        <span className="border-b-2 border-green-500 text-2xl">最新纪念馆</span>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex-none text-sm text-gray-400">查看更多></div>
                </div>


                {/*https://play.tailwindcss.com/tGAL4iuDJe*/}
                <div className="mt-2 flex flex-col">
                    <div className="overflow-hidden bg-gray-50 pb-4 mt-2">
                        <div className="relative flex w-auto justify-start text-white">
                            <div className="absolute left-[-18px] top-[5px] py-1 px-4 text-xs"
                                 style={{
                                     transform: "rotate(-45deg)",
                                     background: "#4c98f9"
                                 }}>单人馆
                            </div>
                        </div>

                        <div className="flex flex-row p-4">
                            <div className="h-[92px] w-[75px] p-2"
                                 style={{
                                     background: "url(/border1.3acff93c.png) no-repeat",
                                     backgroundSize: "100%"
                                 }}>
                                <img className="h-auto w-full"
                                     src="/getImages.png"
                                     alt=""/>
                            </div>
                            <div className="pt-1 pl-4">
                                <div className="text-xl">孙悟空</div>
                                <div className="mt-1 text-sm text-gray-400">生卒:1111-11-11-2222-22-22</div>
                                <div className="mt-1 text-sm text-gray-400">离世65年0月3天</div>
                            </div>
                        </div>


                    </div>
                    <div className="overflow-hidden bg-gray-50 pb-4 mt-2">
                        <div className="relative flex w-auto justify-start text-white">
                            <div className="absolute left-[-18px] top-[5px] py-1 px-4 text-xs"
                                 style={{
                                     transform: "rotate(-45deg)",
                                     background: "#4c98f9"
                                 }}>单人馆
                            </div>
                        </div>

                        <div className="flex flex-row p-4">
                            <div className="h-[92px] w-[75px] p-2"
                                 style={{
                                     background: "url(/border1.3acff93c.png) no-repeat",
                                     backgroundSize: "100%"
                                 }}>
                                <img className="h-auto w-full"
                                     src="/getImages.png"
                                     alt=""/>
                            </div>
                            <div className="pt-1 pl-4">
                                <div className="text-xl">孙悟空</div>
                                <div className="mt-1 text-sm text-gray-400">生卒:1111-11-11-2222-22-22</div>
                                <div className="mt-1 text-sm text-gray-400">离世65年0月3天</div>
                            </div>
                        </div>


                    </div>
                    <div className="overflow-hidden bg-gray-50 pb-4 mt-2">
                        <div className="relative flex w-auto justify-start text-white">
                            <div className="absolute left-[-18px] top-[5px] py-1 px-4 text-xs"
                                 style={{
                                     transform: "rotate(-45deg)",
                                     background: "#4c98f9"
                                 }}>单人馆
                            </div>
                        </div>

                        <div className="flex flex-row p-4">
                            <div className="h-[92px] w-[75px] p-2"
                                 style={{
                                     background: "url(/border1.3acff93c.png) no-repeat",
                                     backgroundSize: "100%"
                                 }}>
                                <img className="h-auto w-full"
                                     src="/getImages.png"
                                     alt=""/>
                            </div>
                            <div className="pt-1 pl-4">
                                <div className="text-xl">孙悟空</div>
                                <div className="mt-1 text-sm text-gray-400">生卒:1111-11-11-2222-22-22</div>
                                <div className="mt-1 text-sm text-gray-400">离世65年0月3天</div>
                            </div>
                        </div>


                    </div>
                    <div className="overflow-hidden bg-gray-50 pb-4 mt-2">
                        <div className="relative flex w-auto justify-start text-white">
                            <div className="absolute left-[-18px] top-[5px] py-1 px-4 text-xs"
                                 style={{
                                     transform: "rotate(-45deg)",
                                     background: "#4c98f9"
                                 }}>单人馆
                            </div>
                        </div>

                        <div className="flex flex-row p-4">
                            <div className="h-[92px] w-[75px] p-2"
                                 style={{
                                     background: "url(/border1.3acff93c.png) no-repeat",
                                     backgroundSize: "100%"
                                 }}>
                                <img className="h-auto w-full"
                                     src="/getImages.png"
                                     alt=""/>
                            </div>
                            <div className="pt-1 pl-4">
                                <div className="text-xl">孙悟空</div>
                                <div className="mt-1 text-sm text-gray-400">生卒:1111-11-11-2222-22-22</div>
                                <div className="mt-1 text-sm text-gray-400">离世65年0月3天</div>
                            </div>
                        </div>


                    </div>
                    <div className="overflow-hidden bg-gray-50 pb-4 mt-2">
                        <div className="relative flex w-auto justify-start text-white">
                            <div className="absolute left-[-18px] top-[5px] py-1 px-4 text-xs"
                                 style={{
                                     transform: "rotate(-45deg)",
                                     background: "#4c98f9"
                                 }}>单人馆
                            </div>
                        </div>

                        <div className="flex flex-row p-4">
                            <div className="h-[92px] w-[75px] p-2"
                                 style={{
                                     background: "url(/border1.3acff93c.png) no-repeat",
                                     backgroundSize: "100%"
                                 }}>
                                <img className="h-auto w-full"
                                     src="/getImages.png"
                                     alt=""/>
                            </div>
                            <div className="pt-1 pl-4">
                                <div className="text-xl">孙悟空</div>
                                <div className="mt-1 text-sm text-gray-400">生卒:1111-11-11-2222-22-22</div>
                                <div className="mt-1 text-sm text-gray-400">离世65年0月3天</div>
                            </div>
                        </div>


                    </div>
                </div>


                {/*https://play.tailwindcss.com/BuAPyjQJ5Z*/}
                <div className="w-[345px]">
                    <div className="mt-2 flex items-center">
                        <div className="">
                            <span className="border-b-2 border-green-500 text-2xl">人物纪念馆</span>
                        </div>
                        <div className="flex-grow"></div>
                        <div className="flex-none text-sm text-gray-400">查看更多></div>
                    </div>

                    <div className="mt-4 flex flex-nowrap items-center justify-between">
                        <div className="text-center">
                            <div className="border border-black p-2">
                                <img className="h-[77px] w-[60px] bg-gray-300" src="" alt=""/>
                            </div>
                            <div className="mt-2 text-sm text-gray-400">啊啊啊</div>
                        </div>

                        <div className="text-center">
                            <div className="border border-black p-2">
                                <img className="h-[77px] w-[60px] bg-gray-300" src="" alt=""/>
                            </div>
                            <div className="mt-2 text-sm text-gray-400">啊啊啊</div>
                        </div>
                        <div className="text-center">
                            <div className="border border-black p-2">
                                <img className="h-[77px] w-[60px] bg-gray-300" src="" alt=""/>
                            </div>
                            <div className="mt-2 text-sm text-gray-400">啊啊啊</div>
                        </div>
                        <div className="text-center">
                            <div className="border border-black p-2">
                                <img className="h-[77px] w-[60px] bg-gray-300" src="" alt=""/>
                            </div>
                            <div className="mt-2 text-sm text-gray-400">啊啊啊</div>
                        </div>
                    </div>
                </div>


                {/*https://play.tailwindcss.com/R18cO2RhBu*/}
                <div className="w-[345px]">
                    <div className="mt-2 flex items-center">
                        <div className="">
                            <span className="border-b-2 border-green-500 text-2xl">今日生祭</span>
                        </div>
                        <div className="flex-grow"></div>
                        <div className="flex-none text-sm text-gray-400">查看更多></div>
                    </div>

                    <div className="mt-2 flex flex-col">
                        <div className="overflow-hidden bg-gray-50 pb-4">
                            <div className="flex flex-row p-4">
                                <div className="h-[92px] w-[75px] p-2"
                                     style={{
                                         background: "url(/border1.3acff93c.png) no-repeat"
                                         ,
                                         backgroundSize: "100%"
                                     }}>
                                    <img className="h-auto w-full"
                                         src="/getImages.png"
                                         alt=""/>
                                </div>
                                <div className="pt-1 pl-4">
                                    <div className="text-xl">孙悟空</div>
                                    <div className="mt-1 text-sm text-gray-400">1111-11-11-2222-22-22</div>
                                    <div className="mt-1 text-sm text-gray-400">伟大的人</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 flex flex-col">
                        <div className="overflow-hidden bg-gray-50 pb-4">
                            <div className="flex flex-row p-4">
                                <div className="h-[92px] w-[75px] p-2"
                                     style={{
                                         background: "url(/border1.3acff93c.png) no-repeat"
                                         ,
                                         backgroundSize: "100%"
                                     }}>
                                    <img className="h-auto w-full"
                                         src="/getImages.png"
                                         alt=""/>
                                </div>
                                <div className="pt-1 pl-4">
                                    <div className="text-xl">孙悟空</div>
                                    <div className="mt-1 text-sm text-gray-400">1111-11-11-2222-22-22</div>
                                    <div className="mt-1 text-sm text-gray-400">伟大的人</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col">
                        <div className="overflow-hidden bg-gray-50 pb-4">
                            <div className="flex flex-row p-4">
                                <div className="h-[92px] w-[75px] p-2"
                                     style={{
                                         background: "url(/border1.3acff93c.png) no-repeat"
                                         ,
                                         backgroundSize: "100%"
                                     }}>
                                    <img className="h-auto w-full"
                                         src="/getImages.png"
                                         alt=""/>
                                </div>
                                <div className="pt-1 pl-4">
                                    <div className="text-xl">孙悟空</div>
                                    <div className="mt-1 text-sm text-gray-400">1111-11-11-2222-22-22</div>
                                    <div className="mt-1 text-sm text-gray-400">伟大的人</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*https://play.tailwindcss.com/PkGYOoqppz*/}
                <div className="mt-2 flex items-center">
                    <div className="">
                        <span className="border-b-2 border-green-500 text-2xl">纪念馆留言</span>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex-none text-sm text-gray-400">查看更多></div>
                </div>
                <div className="border-b border-gray-200 py-6">
                    <div className="flex flex-row">
                        <div className="px-2">
                            <div className="relative flex h-8 w-8 rounded-full">
                                <img src="/getImages.png"
                                     className="absolute left-0 top-0 h-full w-full rounded-full bg-slate-600 object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center">
                                <div className="flex-none text-sm text-[#828391]">猪八戒</div>
                                <div className="flex-1 pl-2 text-xs text-gray-400">7天前</div>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">老妈老爸早昨天看到您们孙子及她的孩子们。都挺好的。放心就好。感恩您们的护佑@……～</div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-200 py-6">
                    <div className="flex flex-row">
                        <div className="px-2">
                            <div className="relative flex h-8 w-8 rounded-full">
                                <img src="/getImages.png"
                                     className="absolute left-0 top-0 h-full w-full rounded-full bg-slate-600 object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center">
                                <div className="flex-none text-sm text-[#828391]">猪八戒</div>
                                <div className="flex-1 pl-2 text-xs text-gray-400">7天前</div>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">老妈老爸早昨天看到您们孙子及她的孩子们。都挺好的。放心就好。感恩您们的护佑@……～</div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-200 py-6">
                    <div className="flex flex-row">
                        <div className="px-2">
                            <div className="relative flex h-8 w-8 rounded-full">
                                <img src="/getImages.png"
                                     className="absolute left-0 top-0 h-full w-full rounded-full bg-slate-600 object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center">
                                <div className="flex-none text-sm text-[#828391]">猪八戒</div>
                                <div className="flex-1 pl-2 text-xs text-gray-400">7天前</div>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">老妈老爸早昨天看到您们孙子及她的孩子们。都挺好的。放心就好。感恩您们的护佑@……～</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="py-10"></div>
            <div className="flex-none fixed bg-white w-screen bottom-0">
                <FooterTabBar></FooterTabBar>
            </div>
        </div>
    )
}


export default observer(Home)
