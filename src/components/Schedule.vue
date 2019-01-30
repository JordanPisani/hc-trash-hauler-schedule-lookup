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
import { mapState } from 'vuex'

export default {
  computed: mapState({
    loading: state => state.schedule.loading,
    schedule: state => state.schedule.instance,
    status: state => state.schedule.status
  })
}
</script>
