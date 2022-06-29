import {Button, Checkbox, Form, Input, NavBar, Toast, Cascader, Space} from 'antd-mobile';
import Router, {useRouter} from 'next/router'
import React, {FC, useEffect, useRef, useState, useImperativeHandle} from 'react'
import options from './cities'
import {useStore} from "../../../../store";

const index = () => {
    const {user} = useStore()
    const router = useRouter()
    const {id} = router.query
    const [address, setAddress] = useState<string[]>([])
    const addressChildRef = useRef();
    const [shdzs, setshdzs] = useState({
        id: 0,
        姓名: "",
        手机号: "",
        地区: "",
        详细地址: "",
        设置默认地址: false,
    })
    const form = useRef(null)
    useEffect(function () {
        // 异步调用 getAddressById 并且回填到表单
        if (id != undefined) {
            user.getAddressById(id).then(data => {
                console.log("data", data)
                console.log(data.地区.split("-"))


                form.current.setFieldsValue(data)
                setshdzs(data)
                // setAddress(data.地区.split("-"))
                addressChildRef.current.changeVal(data.地区.split("-"))
            })
        }


    }, [id])
    let onFinish = async (values: any) => {
        values.地区 = address.join("-")
        console.log("values", values)
        let data = await user.addAddress(values)
        console.log("新增收货地址", data)
        if (data.status === 0) {
            Toast.show({icon: 'success', content: '保存成功'})
            await router.push("/user/shouhuodizhi")
        }

    };

    return (
        <>
            <NavBar back='返回' onBack={
                () => {
                    router.push("/user/shouhuodizhi")
                }
            }>
                设置
            </NavBar>

            <Form
                name='form'
                onFinish={onFinish}
                ref={form}
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        提交
                    </Button>
                }
            >
                <Form.Item name='姓名' label='姓名' rules={[{required: true}]}>
                    <Input placeholder='请输入姓名'/>
                </Form.Item>
                <Form.Item name='手机号' label='联系电话' rules={[{required: true}]}>
                    <Input placeholder='请输入联系电话'/>
                </Form.Item>
                <Form.Item name='address' label='所在地区' rules={[
                    {
                        validator: (rule, value) => {
                            if (address.length < 2) {
                                return Promise.reject('请选择地区')
                            }
                            return Promise.resolve()
                        }
                    }
                ]}>
                    <CascaderCity cRef={addressChildRef} setParent={setAddress}/>
                </Form.Item>
                <Form.Item name='详细地址' label='详细地址' rules={[{required: true}]}>
                    <Input placeholder='请输入详细地址'/>
                </Form.Item>
                <Form.Item name='default' label='设置默认地址'>
                    <Checkbox>设置默认地址</Checkbox>
                </Form.Item>
            </Form>
        </>
    )
}

// 渲染所选值
function CascaderCity(props) {
    const {setParent, cRef} = props
    const [visible, setVisible] = useState(false)
    // const [df, setdf] = useState<string[]>([])
    const [value, setValue] = useState<string[]>([])

    //更新value
    useImperativeHandle(cRef, () => ({
        // changeVal 就是暴露给父组件的方法
        changeVal: (val: string[]) => {
            console.log("设置不上去????", val)
            setValue(val)
            // setdf(val)

        }
    }));


    return (
        <Space align='center'>
            <Button
                onClick={() => {
                    setVisible(true)
                }}
            >
                选择
            </Button>
            <Cascader
                // defaultValue={df}
                options={options}
                visible={visible}
                onClose={() => {
                    setVisible(false)
                }}
                value={value}
                onConfirm={setValue}
                onSelect={(val, extend) => {
                    console.log('onSelect', val, extend.items)
                    console.log('value', value)
                    setParent(val)
                }}
            >
                {items => {
                    if (items.every(item => item === null)) {
                        return '未选择'
                    } else {
                        return items.map(item => item?.label ?? '未选择').join('-')
                    }
                }}
            </Cascader>
        </Space>
    )
}

export default index
