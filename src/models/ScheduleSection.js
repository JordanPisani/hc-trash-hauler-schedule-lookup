import moment from 'moment'
import _ from 'underscore'

export default class ScheduleSection {
  constructor(heading, dowsArr, isRecycling = false) {
    var ints = this.rawDbValToDayInts(dowsArr.join('-'))
    this.heading = heading
    this.weekdays = this.pluralWeekdaysFromInts(ints)
    this.nextDates = this.nextPickupDates(ints, isRecycling)
  }

  // converts raw database string to array of day of week integers
  // "Monday-Thursday" -> [1, 4]
  rawDbValToDayInts(string) {
    return _.chain(moment()._locale._weekdaysShort)
      .map((dow, index) => {
        var strContainsDay =
          string.toLowerCase().indexOf(dow.toLowerCase()) >= 0
        return strContainsDay ? index : false
      })
      .compact()
      .value()
  }

  // returns string of plural weekdays from day of week integers
  // [1, 2] -> 'Mondays & Tuesdays'
  pluralWeekdaysFromInts(intsArr) {
    return intsArr
      .sort()
      .map((i) => {
        return moment()._locale._weekdays[i] + 's'
      })
      .join(' & ')
  }

  // returns array of next pickup dates from day of week integers, accounts for holidays
  nextPickupDates(intsArr, isRecycling = false) {
    let arr = []
    let date = null
    let isHoliday = false
    _.each(intsArr, (int, index) => {
      date = ScheduleSection.nextDayOfWeek(int)
      isHoliday = ScheduleSection.isHoliday(date, isRecycling)
      arr.push({ date, isHoliday })

      while (isHoliday) {
        int = index + 1 === intsArr.length ? intsArr[0] : intsArr[index + 1] // jump to next day in intsArr
        date = ScheduleSection.nextDayOfWeek(int, date)
        isHoliday = ScheduleSection.isHoliday(date, isRecycling)
        arr.push({ date, isHoliday })
      }
    })
    return _.chain(arr)
      .sortBy((x) => x.date.valueOf())
      .uniq((x) => x.date.valueOf(), true)
      .value()
  }

  // returns the next day of the week as a moment, offset by startDate
  static nextDayOfWeek(dayInt, startDate = null) {
    let date = startDate ? moment(startDate).add(1, 'days') : moment()
    // // test xmas 2014, a thursday or 4
    // date = (startDate) ? moment(startDate).add(1, 'days') : moment('12/25/2014', 'MM/DD/YYYY')

    if (date.isoWeekday() <= dayInt) {
      // return that week's day
      return date.isoWeekday(dayInt)
    } else {
      // return the following week's day
      return date.add(1, 'weeks').isoWeekday(dayInt)
    }
  }

  // is date a holiday
  static isHoliday(date, isRecycling = false) {
    const testDate = date.clone()
    let dateD = testDate.date()
    let dateM = testDate.month() + 1
    let dateW = testDate.day()
    let dateL = testDate.endOf('month').date()
    var dateWnum, dateStr

    // new years (except recycling), independence, christmas
    dateStr = [dateM, dateD].join('/')
    if (dateStr === '1/1' && isRecycling) {
      return false
    }
    if (dateStr === '1/1' || dateStr === '7/4' || dateStr === '12/25') {
      return true
    }

    // labor, thanksgiving
    dateWnum = Math.floor((dateD - 1) / 7) + 1
    dateStr = [dateM, dateWnum, dateW].join('/')
    if (dateStr === '9/1/1' || dateStr === '11/4/4') {
      return true
    }

    // memorial
    dateWnum = Math.floor((dateL - dateD - 1) / 7) + 1
    dateStr = [dateM, dateWnum, dateW].join('/')
    if (dateStr === '5/0/1') {
      return true
    }

    // else
    return false
  }
}
