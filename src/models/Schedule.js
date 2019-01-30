import ScheduleSection from './ScheduleSection'

export default class Schedule {
  constructor () {
    this.trashDays = []
    this.recycleDays = []
    this.yardDays = []
  }

  get has_days () {
    return (this.trashDays.length || this.recycleDays.length || this.yardDays.length)
  }

  get keys () {
    return ['garbage','recycle','yard']
  }

  get garbage () {
    return new ScheduleSection('Garbage Days', this.trashDays)
  }

  get recycle () {
    return new ScheduleSection('Recycling Days', this.recycleDays, true)
  }

  get yard () {
    return new ScheduleSection('Yard Waste Days', this.yardDays)
  }

  static find (promiseArr) {
    var schedule = new this()
    return Promise.all(promiseArr).then(results => {
      results.forEach(feature => {
        if (feature) {
          switch (feature.attributes.CollectionType) {
            case "Trash": {
              schedule.trashDays.push(feature.attributes.Day1)
              schedule.trashDays.push(feature.attributes.Day2)
              break
            }
            case "Recycle": {
              schedule.recycleDays.push(feature.attributes.Day)
              break
            }
            case "Yard Waste": {
              schedule.yardDays.push(feature.attributes.Day)
              break
            }
          }
        }
      })
      return schedule
    })
  }
}
