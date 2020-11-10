import storage from '../../common/storage'

import axios from '../../common/api'

import router from '../../router'

const state = {
    data: storage.get('session_data'),
    users: []
}

const getters = {
    responseData: state => (state.data ? state.data : null),
    responseUsers: state => (state.users ? state.users : null)
}

const actions = {
    async signin({ commit, dispatch }, data) {
        await axios.post('/user/auth', data).then(response => {
            commit('responseData', response.data)
            axios.init()

            dispatch('getMe', { root: true })
        })
    },
    async getMe({ commit }) {
        axios.init()
        await axios.get('/user/me').then(response => {
            commit('userData', response.data)
        })

        router.push('/home')
    },
    async getUsers({ commit }) {
        axios.init()
        await axios.get('/user/list').then(response => {
            commit('usersData', response.data)
        })
    },

    /**
     * Logout the current user by removing the token from storage.
     *
     * Will also remove `Authorization <token>` header from requests.
     **/
    async signout() {
        // Remove the token and remove axios header from /common/api
        state.data = null

        axios.close()
        router.push('/')
    }
}

const mutations = {
    responseData(state, data) {
        storage.set('session_data', {
            user: {
                token: data.access_token,
                expires: data.expires
            }
        })

        state.data = storage.get('session_data')
    },
    userData(state, data) {
        storage.set('session_data', {
            account: {
                name: data.name,
                lastname: data.lastname
            }
        })

        state.data = storage.get('session_data')
    },
    usersData(state, data) {
        state.users = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
