import Provider from '../../models/Provider'

export default {
  state: {
    instance: null,
    loading: false,
    status: null
  },
  actions: {
    findProvider ({ dispatch, commit }) {
      commit('setProviderLoading')
      commit('setProviderStatus', 'Loading...')

      return new Promise((resolve, reject) => {
        dispatch('queryCounty').then(provider => resolve(provider)).catch(warn => {
          commit('setProviderStatus', `${warn} Searching City providers.`)
          dispatch('queryCities').then(provider => resolve(provider)).catch(err => reject(err))
        })
      }).then(provider => {
        commit('setProvider', provider)
        commit('setProviderStatus', true)
      }).catch(err => {
        commit('setProviderStatus', err)
      }).then(() => {
        commit('setProviderLoading', false)
      })
    },
    queryCounty ({ dispatch }) {
      let countyFeatureUrl = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/SW_FACILITIES/MapServer/1'

      return new Promise((resolve, reject) => {
        dispatch('queryFeatures', countyFeatureUrl).then(feature => {
          if (feature) {
            resolve(new Provider(feature, 'TAG'))
          } else {
            reject('A County Solid Waste Provider could not be determined.')
          }
        })
      })
    },
    queryCities ({ dispatch }) {
      let cityFeatureUrl = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/MaintStar/MapServiceBaseMap_20150801_Production_1/MapServer/80'

      return new Promise((resolve, reject) => {
        dispatch('queryFeatures', cityFeatureUrl).then(feature => {
          if (feature) {
            resolve(new Provider(feature, 'NAME'))
          } else {
            reject('A Solid Waste Provider could not be determined.')
          }
        })
      })
    }
  },
  mutations: {
    setProvider (state, data) {
      state.instance = data
    },
    setProviderLoading (state, data = true) {
      state.loading = data
    },
    setProviderStatus (state, data) {
      state.status = data
    }
  }
}
