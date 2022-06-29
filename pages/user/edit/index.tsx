import type {NextPage} from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import { Button, DatePicker, version } from "antd";
import {observer} from "mobx-react-lite"
import {useStore} from '../../../store'
import { Button, Checkbox, Form, Input ,message} from 'antd';
import { useRouter } from 'next/router'

const edit = () => {
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
            await router.push("/")
        } catch (e) {
            // @ts-ignore
            message.error(e.data?.message || '登录失败')
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{
                    mobile: '13800138000',
                    password: '123456',
                    remember: true
                }}
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
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default observer(edit)
