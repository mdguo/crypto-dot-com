import _ from 'lodash'

function storage(key) {
    function get() {
        return localStorage.getItem(key)
    }

    function set(val) {
        if (!_.isString(val)) {
            throw new Error('Tried to set non-string in localStorage!')
        }

        localStorage.setItem(key, val)
    }

    function remove() {
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