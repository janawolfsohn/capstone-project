const TODAY = 'TODAY'
const YESTERDAY = 'YESTERDAY'
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000
const LOCALE = 'us-UK'

const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}

export const getDateString = (date, today = new Date()) => {
  const testDate = toZeroTimeDate(date)
  const todaysDate = toZeroTimeDate(today)
  if (testDate.getTime() === todaysDate.getTime()) {
    return TODAY
  }
  if (todaysDate.getTime() - testDate.getTime() === MILLISECONDS_PER_DAY) {
    return YESTERDAY
  }
  return toLocaleString(testDate)
}

export const toLocaleString = (date) =>
  date.toLocaleString(LOCALE, DATE_FORMAT_OPTIONS)

export const isOneDayBefore = (olderDate, newerDate = new Date()) =>
  getDateString(olderDate, newerDate) === YESTERDAY

export const isTheSameDay = (aDate, anotherDate) =>
  getDateString(aDate, anotherDate) === TODAY

const toZeroTimeDate = (date) => {
  const resultDate = new Date(date)
  resultDate.setHours(0)
  resultDate.setMinutes(0)
  resultDate.setSeconds(0, 0)
  return resultDate
}
