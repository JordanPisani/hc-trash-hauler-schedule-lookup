<template lang="html">
  <div id="provider" class="">
    <div v-if="provider" class="card-body">
      <h4 class="card-title mb-0">{{ provider.name }}</h4>

      <p v-if="provider.address">{{ provider.address }}</p>

      <ul class="list-unstyled mb-0">
        <li v-if="provider.phone">
          <span class="fa fa-fw fa-phone" aria-hidden="true"></span> <span class="sr-only">Phone:</span>
          <a :href="`tel:${provider.phone}`">
            {{ provider.phoneFormatted }}
          </a>
        </li>
        <li v-if="provider.fax">
          <span class="fa fa-fw fa-fax" aria-hidden="true"></span> <span class="sr-only">Fax:</span>
          <a :href="`fax:${provider.fax}`">
            {{ provider.faxFormatted }}
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
    </div>

    <div v-else class="card-body">
      <span v-if="loading" class="fas fa-spinner fa-spin"></span>
      {{ status }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    loading: state => state.provider.loading,
    provider: state => state.provider.instance,
    status: state => state.provider.status
  })
}
</script>
