import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api/praxis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    cv: [],
    peserta: [],
    karya: []
  },
  getters: {
    gettersApiPeserta: function (state) {
      return state.peserta
    },
    gettersKarya: function (state) {
      return state.karya
    },
    gettersCV: function (state) {
      return state.cv
    },
    gettersUser: function (state) {
      return state.user
    }
  },
  mutations: {
    getApiUser: function (state) {
      const token = localStorage.getItem('Bearer')
      console.log('get user', token)
      api.getUser({
        headers: {
          "Authorization": "Bearer: " + token
        }
      })
        .then(res => {
          res.data
        })
        .then(res => {
          console.log('get user', res)
          state.user = res.username
        })
        .catch(err => {
          console.log('err user', err)
        })
    },
    getApiFiles: function (state) {
      const token = localStorage.getItem('Bearer')
      api.getFiles({
        headers: {
          "Authorization": "Bearer: " + token
        }
      })
        .then(res => {
          res.data
        })
        .then(res => {
          console.log('get files', res)
          state.cv = res
        })
        .catch(err => {
          console.log('err files', err)
        })
    },

    getApiPeserta: function (state) {
      const access = localStorage.getItem('Bearer')
      console.log('ini token yg dimasukin', access)
      api.getPeserta({
        headers: {
          "Authorization": "Bearer: " + access
        }
      })
        .then(res => res.data)
        .then(data => {
          state.peserta = data;

          // gabungin cv dan data peserta
          // for (let i = 0; i < state.peserta.length; i++) {
          //   state.peserta[i].cv = state.cv[i];
          // }
          console.log("get api", state.peserta)
        })
        .catch(err => console.log(err))
    }
  },
  actions: {
    getApiPeserta: function ({ commit }) {
      commit('getApiPeserta')
    },
    getApiFiles: function ({ commit }) {
      commit('getApiFiles')
    },
    getApiUser: function ({ commit }) {
      commit('getApiUser')
    }
  },
  modules: {
  }
})
