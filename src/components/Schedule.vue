<template lang="html">
  <div id="schedule" class="">
    <table v-if="schedule && schedule.has_days" class="table table-striped table-bordered mb-0">
      <tbody>
        <tr v-for="key in schedule.keys" :key="key">
          <th>
            {{ schedule[key].heading }}
            <p class="small mb-0">Next Pickup(s)</p>
          </th>
          <td>
            <strong>
              {{ schedule[key].weekdays }}
            </strong>
            <ul class="mb-0">
              <li v-for="(d, index) in schedule[key].nextDates" :key="index">
                <span v-if="d.isHoliday">
                  <del>
                    {{ d.date.format('dddd MMMM Do') }}
                  </del>
                  <small class="ml-1 badge badge-pill badge-danger">
                    No pickup on holiday
                  </small>
                </span>
                <template v-else>
                  {{ d.date.format('dddd MMMM Do') }}
                </template>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else class="card-body bg-light">
      <span v-if="loading" class="fas fa-spinner fa-spin"></span>
      {{ status }}
    </div>
  </div>
</template>

<script>
import { Schedule } from '@/models'
const endpoint =
  'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer'
const trashUrl = `${endpoint}/2`
const recycleUrl = `${endpoint}/1`
const yardUrl = `${endpoint}/0`

export default {
  data: () => ({
    schedule: null,
    loading: false,
    status: null
  }),
  methods: {
    async find(query) {
      this.schedule = null
      this.loading = true
      this.status = 'Loading...'

      try {
        this.schedule = await Schedule.find([
          query(trashUrl),
          query(recycleUrl),
          query(yardUrl)
        ])
        this.status = 'ok'
      } catch (err) {
        this.status =
          "We weren't able to find your trash and recycling schedule"
        this.status += this.$parent.$refs.provider?.provider
          ? ', but we know who your hauler is. Contact the provider listed above for your pickup schedule.'
          : '.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
