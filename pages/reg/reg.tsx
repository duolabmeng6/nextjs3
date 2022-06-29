import {observer} from "mobx-react-lite"
import {UseStore} from '../../store'
import {Button, Checkbox, Form, Input, Toast, NavBar} from 'antd-mobile';
import type {ToastHandler} from 'antd-mobile/es/components/toast'
import React, {FC, useEffect, useRef, useState} from 'react'
import Router from "next/router";

const Index = () => {
    const handler = useRef<ToastHandler>()

    const {user} = UseStore()

    function click() {
        user.name = "bbbbbbb"
    }

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        console.log(values)
        const {mobile, password} = values
        try {
            await user.login(mobile, password)
            Toast.show({
                icon: 'success',
                content: '注册成功',
            })
            await Router.push("/")
        } catch (e:any) {
            // @ts-ignore
            Toast.show({
                icon: 'fail',
                content: e.data?.message || '注册失败',
            })
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const back = () =>
        Router.push("/")


    return (
        <>
            <NavBar back='返回' onBack={back}>
                注册
            </NavBar>


            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                    mobile: '13800138000',
                    password: '123456',
                    remember: true
                }}
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        注册
                    </Button>
                }
            >
                <Form.Item
                    label="用户名"
                    name="mobile"
                    rules={[{required: true, message: '请输入用户名!'}]}

                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{required: true, message: '请输入密码!'}]}
                >
                    <Input placeholder='请输入密码' clearable type='password'/>
                </Form.Item>

            </Form>
        </>
    )
}

export default observer(Index)
