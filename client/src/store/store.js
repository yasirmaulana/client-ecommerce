import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const $http = 'http://localhost:3000/'
// const $http = 'http://35.198.207.92:3000/'
// const $http = 'https://ecommerceserver.yasirjs.com:3000/'

export const store = new Vuex.Store({
  state: {
    items: [],
    cart: [],

  },
  getters: {
    
  },
  mutations: {
    getItems: function (state, payload) {
      state.items = payload
    },
    getItemsPepakuro: function (state, payload) {
      state.items = payload
    },
    getItemsReplika: function (state, payload) {
      state.items = payload
    },
    getItemsAutomata: function (state, payload) {
      state.items = payload
    },

  },
  actions: {
    getItems: function ({ commit }) {
      let url = $http + 'items/list'
      axios
        .get(url)
        .then(response => {
          let items = response.data.data
          commit('getItems', items)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getItemsPepakuro: function ({ commit }) {
      let url = $http + 'items/list/pepakuro'
      axios
        .get(url)
        .then(response => {
          let items = response.data.data
          commit('getItemsPepakuro', items)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getItemsReplika: function ({ commit }) {
      let url = $http + 'items/list/replika'
      axios
        .get(url)
        .then(response => {
          let items = response.data.data
          commit('getItemsReplika', items)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getItemsAutomata: function ({ commit }) {
      let url = $http + 'items/list/automata'
      axios
        .get(url)
        .then(response => {
          let items = response.data.data
          commit('getItemsAutomata', items)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})