import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api/praxis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    peserta: []
  },
  getters: {
    gettersApiPeserta: function (state) {
      return state.peserta
    }
  },
  mutations: {
    login: function (state, data) {
      api.login(data)
        .then(res => {
          return res.data
        })
        .catch(err => {
          console.log('err user', err)
        })
    },
    getApiPeserta: function (state) {
      const token = localStorage.getItem("Bearer");

      api.getPeserta({
        headers: {
          Authorization: "Bearer " + token
        }
      })
        .then(res => res.data)
        .then(data => {
          state.peserta = data.result;
          console.log("get api", state.peserta)
        })
        .catch(err => console.log(err))
    }
  },
  actions: {
    getApiPeserta: function ({ commit }) {
      commit('getApiPeserta')
    }
  },
  modules: {
  }
})
