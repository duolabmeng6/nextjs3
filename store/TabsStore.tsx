import {makeAutoObservable} from 'mobx'

class TabsStore {
    path: string = "/";

    constructor() {
        makeAutoObservable(this)
    }

    setPath = (path: string) => {
        this.path = path;
    }
}

export default TabsStore
