<template>
  <div id="app">
    <form is="HcEsriSearchWidget" @submit="resetApp" @result="findProviderAndSchedule"></form>

    <!-- alerts -->
    <div v-if="status" class="alert alert-warning">{{ status }}</div>

    <div v-show="searchResult" class="card mb-3">
      <div v-if="searchResult" class="card-header bg-secondary text-white font-weight-bold">
        Results For:
        {{ searchResult.name }}
      </div>

      <!-- provider -->
      <div is="Provider" ref="provider"></div>

      <!-- schedule -->
      <div is="Schedule" ref="schedule"></div>
    </div>

    <!-- <pre class="p-3 bg-dark text-white">{{ $data }}</pre> -->
  </div>
</template>

<script>
import HcEsriSearchWidget from '@hcflgov/vue-esri-search'
import Provider from '@/models/Provider'
import Logger from '@/models/Logger'

export default {
  install(Vue, options) {
    Vue.prototype.$providers = options?.providers || Provider.index
    Vue.component('HcHaulerApp', this)
  },
  data: () => ({
    searchResult: null,
    status: null
  }),
  components: {
    HcEsriSearchWidget,
    Provider: () =>
      import(/* webpackChunkName: "provider" */ '@/components/Provider'),
    Schedule: () =>
      import(/* webpackChunkName: "schedule" */ '@/components/Schedule')
  },
  methods: {
    resetApp() {
      this.status = null
      this.searchResult = null
    },
    async findProviderAndSchedule(searchResult) {
      try {
        // save search result to data
        this.searchResult = searchResult
        // find provider then schedule
        await this.$refs.provider.find(this.searchResult.queryFeatures)
        await this.$refs.schedule.find(this.searchResult.queryFeatures)
      } catch (err) {
        // search error handling
        this.status = err.message
      } finally {
        // log
        new Logger({
          app: this.$data,
          provider: this.$refs.provider.$data,
          schedule: this.$refs.schedule.$data
        })
        // emit finished
        this.$emit('finished', this)
      }
    }
  }
}
</script>

