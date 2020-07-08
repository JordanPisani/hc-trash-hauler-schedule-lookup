import Vue from 'vue'
import Vuex from 'vuex'

import { VuexModule as search } from 'hc-esri-search-widget'
import provider from './modules/provider'
import schedule from './modules/schedule'
import loggly from './modules/loggly'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { search, provider, schedule, loggly },
  state: {
    status: null
  },
  actions: {
    findProviderAndSchedule ({ dispatch, commit }, searchResult) {
      // save search result to store state
      dispatch('saveSearchResult', searchResult).then(() => {
        // find provider then schedule
        return dispatch('findProvider').then(() => dispatch('findSchedule'))
      }).catch(err => {
        // search error handling
        commit('setAppStatus', err)
      }).then(() => {
        dispatch('loggly')
      })
    },
    resetApp ({ commit }) {
      commit('setSearchResult', null)
      commit('setAppStatus', null)
      commit('setProvider', null)
      commit('setProviderStatus', null)
      commit('setSchedule', null)
      commit('setScheduleStatus', null)
    },
    queryFeatures ({ rootState }, url) {
      return rootState.search.result.queryFeatures(url).catch(() => null)
    }
  },
  mutations: {
    setAppStatus (state, data) {
      state.status = data
    }
  }
})
