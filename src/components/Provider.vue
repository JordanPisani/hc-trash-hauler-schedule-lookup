<template lang="html">
  <div id="provider" class="">
    <div v-if="provider" class="card-body">
      <h4 class="card-title mb-0">{{ provider.name }}</h4>

      <p v-if="provider.address">{{ provider.address }}</p>

      <ul class="list-unstyled mb-0">
        <li v-if="provider.phone">
          <span class="fa fa-fw fa-phone" aria-hidden="true"></span> <span class="sr-only">Phone:</span>
          <a :href="`tel:${provider.phone}`">
            {{ formatPhone(provider.phone) }}
          </a>
        </li>
        <li v-if="provider.fax">
          <span class="fa fa-fw fa-fax" aria-hidden="true"></span> <span class="sr-only">Fax:</span>
          <a :href="`fax:${provider.fax}`">
            {{ formatPhone(provider.fax) }}
          </a>
        </li>
        <li v-if="provider.email">
          <span class="fa fa-fw fa-envelope" aria-hidden="true"></span> <span class="sr-only">Email:</span>
          <a :href="`mailto:${provider.email}`" v-text="provider.email"></a><br>
        </li>
        <li v-if="provider.website">
          <span class="fa fa-fw fa-globe" aria-hidden="true"></span> <span class="sr-only">Web:</span>
          <a :href="provider.website" target="_blank">Website</a>
        </li>
      </ul>

      <div v-if="provider.message" class="alert alert-warning my-2" v-html="provider.message"></div>

    </div>

    <div v-else class="card-body">
      <span v-if="loading" class="fas fa-spinner fa-spin"></span>
      {{ status }}
    </div>

  </div>
</template>

<script>
const countyFeatureUrl =
  'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/SW_FACILITIES/MapServer/1'
const cityFeatureUrl =
  'https://maps.hillsboroughcounty.org/arcgis/rest/services/MaintStar/MapServiceBaseMap_20150801_Production_1/MapServer/80'

export default {
  data: () => ({
    provider: null,
    loading: null,
    status: null
  }),
  methods: {
    async find(query) {
      this.provider = null
      this.loading = true
      this.status = 'Loading...'

      try {
        let { attributes } = await query(countyFeatureUrl)
        this.setProvider(attributes, 'TAG')
        this.status = 'ok'
      } catch (err) {
        this.status = `A County Solid Waste Provider could not be determined. Searching City providers.`
        try {
          let { attributes } = await query(cityFeatureUrl)
          this.setProvider(attributes, 'NAME')
          this.status = 'ok'
        } catch (err) {
          // no results
          this.status = 'A Solid Waste Provider could not be determined.'
        }
      } finally {
        this.loading = false
      }
    },
    setProvider(attributes, attr) {
      this.provider = this.$providers.find(x =>
        x.ids.includes(attributes[attr])
      )
    },
    formatPhone(n) {
      return `(${n.substring(0, 3)}) ${n.substring(3, 6)}-${n.substring(6, 10)}`
    }
  }
}
</script>
