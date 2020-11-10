import storage from '../storage'

import axios from 'axios'

import qs from 'qs'
/**
 * Manage your api.
 *
 * Current implementation Api should always be accessed through this instace.
 *
 * Perform a custom Axios request.
 *
 * data is an object containing the following properties:
 *  - method
 *  - url
 *  - data ... request payload
 *  - auth (optional)
 *    - username
 *    - password
 **/

// axios.defaults.baseURL = 'http://localhost:8000/api/v1'
axios.defaults.baseURL = 'https://domain/api/v1'

export default {
    init() {
        const headers = axios.defaults.headers.common

        headers['Content-Type'] = 'application/x-www-form-urlencoded'
        headers['Authorization'] = 'bearer ' + storage.get('session_data').user.token
    },

    close: () => ((axios.defaults.headers.common = {}), storage.remove('session_data')),

    get: endpoint => axios.get(endpoint),

    post: (endpoint, data) => axios.post(endpoint, qs.stringify(data)),

    put: (endpoint, data) => axios.put(endpoint, data),

    delete: (endpoint, data) => axios.delete(endpoint, data)
}
