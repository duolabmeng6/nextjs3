import {observer} from "mobx-react-lite"
import {useStore} from '../store'
import { Button, Checkbox, Form, Input,Toast,NavBar} from 'antd-mobile';
import { useRouter } from 'next/router'
import type { ToastHandler } from 'antd-mobile/es/components/toast'
import React, { FC, useEffect, useRef, useState } from 'react'

const Login = () => {
    const handler = useRef<ToastHandler>()

    const router = useRouter()

    const {user} = useStore()
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
                content: '登录成功',
            })
            await router.push("/")
        } catch (e) {
            // @ts-ignore
            Toast.show({
                icon: 'fail',
                content: e.data?.message || '登录失败',
            })
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const back = () =>
        Toast.show({
            content: "点击了返回区域",
            duration: 1000
        });

    return (
        <>
            <NavBar back='返回' onBack={back}>
                登录
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
                        登录
                    </Button>
                }
            >
                <Form.Item
                    label="用户名"
                    name="mobile"
                    rules={[{ required: true, message: '请输入用户名!' }]}

                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input placeholder='请输入密码' clearable type='password' />
                </Form.Item>

            </Form>
        </>
    )
}

export default observer(Login)
