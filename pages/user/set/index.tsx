import {observer} from "mobx-react-lite"
import {useStore} from '../../../store'
import {Button, Checkbox, Form, Input, NavBar, Toast} from 'antd-mobile';
import Router, { useRouter } from 'next/router'
import type { ToastHandler } from 'antd-mobile/es/components/toast'
import React, { FC, useEffect, useRef, useState } from 'react'

const index = () => {
    const handler = useRef<ToastHandler>()

    const router = useRouter()
    const {user} = useStore()
    const form = useRef(null)

    useEffect(function (){
        user.redata()
        console.log("用户信息",user.info)
        form.current.setFieldsValue(user.info);
    },[])


    const onFinish = async (values: any) => {
        console.log('Success:', values);
        console.log(values)
        try {
            let data = await user.edit(values)
            // await router.push("/user/edit")
            if (data.message =="操作成功"){

                Toast.show({icon: 'success', content: '保存成功'})
            }else{
                Toast.show({icon: 'success', content: data.message})
            }
        } catch (e) {
            // @ts-ignore
            Toast.show({icon: 'fail', content: e.data?.message || '修改失败',})
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function back() {
        Router.push("/")
    }

    return (
        <>
            <NavBar back='返回' onBack={back}>
                设置
            </NavBar>
            头像
            收货地址
            用户协议
            隐私协议
            关于我们
            清理缓存
            注销

            <Form
                name="basic"
                layout='horizontal'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                ref={form}
            >
                <Form.Item
                    label="手机号"
                    name="mobile"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="名称"
                    name="name"
                    rules={[{ required: true, message: '名称!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item >
                    <Button block type='submit' color='primary' size='large'>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default observer(index)
