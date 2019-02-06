import axios from 'axios'

export default {
  actions: {
    loggly ({ rootState }) {
      if (process.env.NODE_ENV === 'production') {
        var logUrl = 'https://logs-01.loggly.com/inputs/ff424bed-98df-4ab6-ac0e-49dc5d9ae378/tag/hc-trash-hauler/'
        axios.post(logUrl, JSON.stringify(rootState), {
          headers: {'Content-Type': 'text/plain'}
        }).then(res => {})
      } else {
        console.log(rootState)
      }
    }
  }
}
