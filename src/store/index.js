import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api/praxis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    peserta: [],
    loading: false
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
      state.loading = true;

      api.getPeserta({
        headers: {
          Authorization: "Bearer " + token
        }
      })
        .then(res => res.data)
        .then(data => {
          state.peserta = data.result;
          console.log("get api", state.peserta)
          state.loading = false;
        })
        .catch(err => {
          console.log("get api", err);
          state.loading = false;
        })
    },
    getApiUsers: async function(){
      const token = localStorage.getItem("Bearer");

      const res = await api.getUsers({
        headers: {
          Authorization: "Bearer " + token
        }
      })

      console.log(res);
    }
  },
  actions: {
    getApiPeserta: function ({ commit }) {
      commit('getApiPeserta')
    },
    getApiUsers: function({commit}){
      commit('getApiUsers');
    }
  },
  modules: {
  }
})
