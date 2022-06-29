import {makeAutoObservable} from 'mobx'

class UserInfoStore {
    public name: string
    public count: number

    constructor() {
        this.name = "aaa"
        this.count = 0
        makeAutoObservable(this)
    }
    public addCount() {
        this.count = this.count + 1
    }

    // 登录
    login = async (username, password ) => {
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
            username,
            password
        })
        this.token = res.data.token
        // 还有这里哦！！
        console.log(this.token)
        setToken(res.data.token)
    }

    // 退出登录
    loginOut = () => {
        this.token = ''
        clearToken()
    }


}

export default UserInfoStore
