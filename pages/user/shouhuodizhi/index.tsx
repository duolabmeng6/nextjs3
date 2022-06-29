import {observer} from "mobx-react-lite"
import {useStore} from '../../../store'
import {Button, Checkbox, Form, Input, NavBar, Toast} from 'antd-mobile';
import Router, {useRouter} from 'next/router'
import type {ToastHandler} from 'antd-mobile/es/components/toast'
import React, {FC, useEffect, useRef, useState} from 'react'
import {List, Switch, Image, ImageUploader,Dialog} from 'antd-mobile'


const index = () => {
    //获取input表单文件上传对象
    const inputRef = useRef(null)
    const {user} = useStore()
    const [address, setAddress] = useState([
        {
            id : 1,
            姓名: "姓名",
            手机号: "手机号",
            地区: "地址",
            详细地址: "详细地址",
            设置默认地址: true,
        },
        {
            id : 2,
            姓名: "姓名",
            手机号: "手机号",
            地区: "地址",
            详细地址: "详细地址",
            设置默认地址: false,
        }
    ])
    // @ts-ignore
    useEffect(() => {
        user.redata()

        async function fetchData() {
            let data = await user.getAddress()
            setAddress(data.items)
        }
        fetchData();


    }, [])

    function back() {
        Router.push("/")
    }


    return (
        <>
            <NavBar back='返回' onBack={back}>
                收货地址
            </NavBar>
            <List mode="card">
                {address.map(shdz => (
                    <List.Item
                        key={shdz.id}
                        prefix={
                            <Image
                                src=""
                                style={{borderRadius: 20}}
                                fit='cover'
                                width={40}
                                height={40}
                            />
                        }
                        description={shdz.地区+shdz.详细地址}
                        extra={
                        <>
                            <Button color="danger" size="small"
                            style={{
                                marginRight: 10,
                            }}
                            onClick={() => {
                                //确定删除框
                                Dialog.show({
                                    content: '确定删除该地址吗?',
                                    closeOnAction: true,
                                    actions: [
                                        [
                                            {
                                                key: 'cancel',
                                                text: '取消',
                                            },
                                            {
                                                key: 'delete',
                                                text: '删除',
                                                bold: true,
                                                danger: true,
                                                onClick: async () => {
                                                    let data = await user.deleteAddress(shdz.id)
                                                    console.log("删除",data)

                                                    Toast.show({
                                                        icon: 'success',
                                                        content: data.msg,
                                                    })
                                                }
                                            },
                                        ],
                                    ],
                                })

                            }}
                            >删除</Button>
                            <Button color="warning" size="small"
                            onClick={() => {
                                Router.push("/user/shouhuodizhi/edit/"+shdz.id)
                            }}
                            >编辑</Button>
                        </>
                        }
                    >
                        {shdz.姓名}
                        {shdz.手机号}


                    </List.Item>
                ))}
            </List>

            <Button block color="primary" size="large" onClick={() => {
                Router.push('/user/shouhuodizhi/edit/0')
            }}>新建收货地址</Button>


        </>
    )
}

export default observer(index)
