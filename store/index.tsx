import user from "./UserStore"
import tabs from "./TabsStore"
import React from "react"
import {c} from "../utils/c";

class RootStore {
    // 组合模块
    public user: user;
    public tabs: tabs;
    constructor() {
        this.user = new user()
        this.tabs = new tabs()
    }
}
// 实例化根store注入context
const StoresContext = React.createContext(new RootStore())
// 导出方法 供组件调用方法使用store根实例
export const useStore = () => React.useContext(StoresContext)
