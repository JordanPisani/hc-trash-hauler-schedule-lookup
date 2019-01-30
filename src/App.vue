<template>
  <div id="app">

    <form is="HcEsriSearchWidget" @submit="resetApp" @result="findProviderAndSchedule"></form>

    <!-- alerts -->
    <div v-if="status" class="alert alert-warning">
      {{ status }}
    </div>

    <div v-show="searchResult" class="card mb-3">
      <!-- provider -->
      <div is="Provider" ref="provider"></div>

      <!-- schedule -->
      <div is="Schedule" ref="schedule"></div>
    </div>

    <!-- <pre class="p-3 bg-dark text-white">{{ $store.state }}</pre> -->

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import HcEsriSearchWidget from 'hc-esri-search-widget'
import Provider from './components/Provider'
import Schedule from './components/Schedule'

export default {
  components: {
    HcEsriSearchWidget, Provider, Schedule
  },
  methods: mapActions(['resetApp', 'findProviderAndSchedule']),
  computed: mapState({
    searchResult: state => state.search.result,
    status: state => state.status
  })
}
</script>

<style src="./assets/main.scss" lang="scss"></style>
