import {makeAutoObservable} from 'mobx'
import {http} from '../utils/http'
import {string} from "prop-types";
import {c} from "../utils/c";

class UserStore {
    name: string = "";
    count: number = 0;
    token: string = "";
    info = {
        name: string,
        mobile: string,
        portrait: string,
    };

    constructor() {
        makeAutoObservable(this)
    }

    addCount() {
        this.count = this.count + 1
    }

    redata = function () {
        const userinfo = c('userinfo');
        if (userinfo != undefined) {
            console.log("用户信息", userinfo)
            try {
                // @ts-ignore
                this.info = JSON.parse(userinfo)
            } catch (e) {
                c('userinfo', null)
            }
        }
    }
    // 登录
    login = async (mobile: string, password: string) => {
        const res = await http.post('/api/user/login', {
            mobile,
            password
        })
        console.log("获取token 和 user 信息")
        console.log(res.data)
        this.token = res.data.token
        this.info = res.data.user

        console.log("token", this.token)
        console.log("user", this.info)
        c('userinfo', JSON.stringify(this.info))
        c('token', this.token)
    }

    // 退出登录
    loginOut = () => {
        this.token = "";
        // @ts-ignore
        this.info = {};
        c('userinfo', null)
        c('token', null)
    }

    // 登录
    getInfo = async () => {
        const res = await http.post('/api/user/info')
        console.log("获取token 和 user 信息")
        console.log(res.data)
        this.info = res.data
        console.log("user", this.info)
        c('userinfo', JSON.stringify(this.info))
    }

    // 取用户收货地址
    async getAddress() {
        console.log("取用户收货地址")
        const res = await http.get('/api/收货地址')
        console.log("取用户收货地址", res)
        return res.data
    }
    // 删除收货地址
    async deleteAddress(id: number) {
        const res = await http.delete(`/api/收货地址/${id}`, {
        })
        console.log(res.data)
        return res.data
    }
    // 新增收货地址
    async addAddress(values: any) {
        const res = await http.post('/api/收货地址', values)
        console.log(res.data)
        return res
    }
    // 取用户收货地址 通过id
    async getAddressById(id: string | string[]) {
        console.log("取用户收货地址")
        const res = await http.get(`/api/收货地址/${id}/edit`)
        console.log("取用户收货地址", res)
        return res.data
    }

    async edit(values: any) {
        const res = await http.post('/api/user/edit', values)
        console.log("获取token 和 user 信息")
        console.log(res.data)
        this.info = res.data
        console.log("user", this.info)
        c('userinfo', JSON.stringify(this.info))
        return res
    }

    async up_portrait(base64: string) {
        const res = await http.post('/api/user/portrait', {
            portrait: base64
        })
        console.log(res.data)
        this.info = res.data
        console.log("user", this.info)
        c('userinfo', JSON.stringify(this.info))
        return res
    }


}

export default UserStore
