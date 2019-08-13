import _ from 'lodash'

function storage() {
    function get(key) {
        return localStorage.getItem(key)
    }

    function set(key, val) {
        if (!_.isString(val)) {
            throw new Error('Tried to set non-string in localStorage!')
        }

        localStorage.setItem(key, val)
    }

    function remove(key) {
        localStorage.removeItem(key)
    }

    function clear() {
        localStorage.clear()
    }

    return {
        get,
        set,
        remove,
        clear
    }
}

export default storage;