import {observer} from "mobx-react-lite"
import {UseStore} from '../../../store'
import {Button, Checkbox, Form, Input, NavBar, Toast} from 'antd-mobile';
import Router, {useRouter} from 'next/router'
import type {ToastHandler} from 'antd-mobile/es/components/toast'
import React, {FC, useEffect, useRef, useState} from 'react'
import {List, Switch, Image, ImageUploader} from 'antd-mobile'
import {router} from "next/client";
import {Any} from "@react-spring/types";


const Index = () => {
    //获取input表单文件上传对象
    const inputRef = useRef(null)
    const {user} = UseStore()
    useEffect(function (){
        user.redata()
        async function getUserInfo(){
            await user.getInfo()
        }

    }, [])

    function back() {
        Router.push("/")
    }

    function upfile() {
        console.log("上传头像")
        // @ts-ignore
        inputRef.current.click()
    }

    function onChangeFile(e:any) {
        console.log("onChangeFile", e.target.files)
        const file = e.target.files[0]
        if (file) {
            console.log("file", file)
            //上传文件
            // uploadFile(file)
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = async (e) => {
                console.log("base64", reader.result)
                if (typeof reader.result === "string") {
                    await user.up_portrait(reader.result)
                }
            }
            //清除表单选择的文件
            e.target.value = null

        }

    }

    // @ts-ignore
    return (
        <>
            <NavBar back='返回' onBack={back}>
                设置
            </NavBar>

            <List header="">
                <List.Item prefix="" onClick={upfile} extra={
                    <Image
                        src={String(user.info.portrait)}
                        style={{borderRadius: 20}}
                        fit='cover'
                        width={40}
                        height={40}
                    />
                }
                >
                    头像
                    <input ref={inputRef} style={{display: "none"}} type="file" onChange={(e) => {
                        onChangeFile(e)
                    }}/>

                </List.Item>
                <List.Item prefix="" onClick={() => {
                    Router.push("/user/shouhuodizhi")
                }}>
                    收货地址
                </List.Item>
                <List.Item prefix="" onClick={() => {
                }}>
                    用户协议
                </List.Item>

                <List.Item prefix="" onClick={() => {
                }}>
                    隐私协议
                </List.Item>
                <List.Item prefix="" onClick={() => {
                }}>
                    关于我们
                </List.Item>
                <List.Item prefix="" onClick={() => {
                }}>
                    清理缓存
                </List.Item>
                <List.Item prefix="" onClick={() => {
                }}>
                    注销
                </List.Item>
            </List>

            <div style={{
                padding: 20,
            }}>
                <Button block color="warning" size="large" onClick={() => {
                    user.loginOut()
                }}>退出登录</Button>
            </div>
        </>
    )
}

export default observer(Index)
