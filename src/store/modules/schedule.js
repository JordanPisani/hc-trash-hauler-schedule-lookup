import Schedule from '../../models/Schedule'

let endpoint = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer'
let trashUrl = `${endpoint}/2`
let recycleUrl = `${endpoint}/1`
let yardUrl = `${endpoint}/0`

export default {
  state: {
    instance: null,
    loading: false,
    status: null
  },
  actions: {
    findSchedule({ dispatch, commit, rootState }) {
      commit('setScheduleLoading')
      commit('setScheduleStatus', 'Finding your schedule...')

      return Schedule.find([
        dispatch('queryFeatures', trashUrl),
        dispatch('queryFeatures', recycleUrl),
        dispatch('queryFeatures', yardUrl)
      ]).then(schedule => {
        if (schedule.has_days) {
          commit('setSchedule', schedule)
        } else {
          var err = 'We weren\'t able to find your trash and recycling schedule'
          err += (rootState.provider.instance) ? ', but we know who your hauler is. Contact the provider listed above for your pickup schedule.' : '.'
          throw err
        }
        commit('setScheduleStatus', true)
      }).catch(err => {
        commit('setScheduleStatus', err)
      }).then(() => {
        commit('setScheduleLoading', false)
      })
    }
  },
  mutations: {
    setSchedule (state, data) {
      state.instance = data
    },
    setScheduleLoading (state, data = true) {
      state.loading = data
    },
    setScheduleStatus (state, data) {
      state.status = data
    }
  }
}
