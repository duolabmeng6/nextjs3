const c = (key, data) => {
    if (typeof window == 'undefined') {
        return undefined;
    }
    if (data === undefined) {
        return localStorage.getItem(key)
    }
    if (data == null) {
        localStorage.removeItem(key)
    }

    localStorage.setItem(key, data)
}
export {c}