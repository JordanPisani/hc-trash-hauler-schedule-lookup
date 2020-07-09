import axios from 'axios'
const logUrl = 'https://logs-01.loggly.com/inputs/ff424bed-98df-4ab6-ac0e-49dc5d9ae378/tag/hc-trash-hauler/'

export default class Logger {
    constructor(state) {
        state = JSON.stringify(state)
        if (process.env.NODE_ENV === 'production') {
            axios.post(logUrl, state, {
                headers: { 'Content-Type': 'text/plain' }
            })
        } else {
            console.log('Log:', JSON.parse(state))
        }
    }
}