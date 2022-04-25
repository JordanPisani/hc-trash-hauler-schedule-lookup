import { standardClient, recyclingClient, DaysOfWeek } from './holidays'

/**
 *
 * @param dayOfWeek
 * @param startDate
 * @param excludeStartDate
 */
export function nexDayOfWeek(
  dayOfWeek: keyof typeof DaysOfWeek,
  startDate = new Date(),
  excludeStartDate = false
): Date {
  startDate = excludeStartDate
    ? new Date(startDate.setDate(startDate.getDate() + 1))
    : startDate

  const startDateDayOfMonth = startDate.getDate()
  const startDateDayOfWeek = startDate.getDay()
  const distance = DaysOfWeek[dayOfWeek] - startDateDayOfWeek

  let date = new Date(new Date().setDate(startDateDayOfMonth + distance))
  return date < startDate ? new Date(date.setDate(date.getDate() + 7)) : date
}

/**
 *
 * @param this
 * @param dayOfWeek
 */
export function nextDayOfWeekSkipHolidays(
  this: ScheduleTypes,
  dayOfWeek: keyof typeof DaysOfWeek
): Date {
  let date = nexDayOfWeek(dayOfWeek)
  while (
    this === 'recycle'
      ? recyclingClient.isHoliday(date)
      : standardClient.isHoliday(date)
  ) {
    date = nexDayOfWeek(dayOfWeek, date, true)
  }
  return date
}

/**
 * Sorts array of dates in ascending order
 * @param a
 * @param b
 */
export function sortDatesAsc(a: Date, b: Date) {
  return a.valueOf() - b.valueOf()
}

/**
 *
 * @param phone
 */
export function formatPhone(phone: string) {
  return `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(
    6,
    10
  )}`
}

/**
 *
 */
export enum CollectionTypes {
  garbage = 'Garbage',
  recycle = 'Recycling',
  yard = 'Yard Waste',
}
