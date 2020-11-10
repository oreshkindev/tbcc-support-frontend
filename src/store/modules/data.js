import _ from 'lodash'

import axios from '../../common/api'

const state = {
    data: []
}

const getters = {
    responseData: state => (state.data ? state.data : null),
    responseByGroup: state => {
        return _.uniqBy(state.data, 'from_id')
    },
    responseById: state => from_id => {
        let data = state.data.filter(u => u.from_id == from_id).reverse()

        return _.uniqBy(data, 'id')
    }
}

const actions = {
    async remove({ commit }, data) {
        axios.init()

        await axios.delete('/ticket/' + data.id)
    },

    async setStatus({ commit }, data) {
        axios.init()

        await axios.put('/ticket/' + data.ticket_id, { status: data.status })
    }
}

const mutations = {
    responseData(state, data) {
        if (data.length == 1) {
            data.forEach(e => {
                state.data.unshift(e)
            })
        } else {
            state.data = data
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
