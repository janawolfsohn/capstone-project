import { useEffect, useState } from 'react'
import { isOneDayBefore } from '../lib/date'
import { getJournals, saveJournals } from '../services/journals'
import { v4 as uuid } from 'uuid'

export default function useJournals() {
  const [entries, setEntries] = useState(getJournals())
  const [yesterdaysEntry, setYesterdaysEntry] = useState()

  useEffect(() => {
    setYesterdaysEntry(entries.find(({ date }) => isOneDayBefore(date)))
  }, [entries])

  const addEntry = (entry) => {
    const newEntry = { ...entry, _id: uuid() }
    const updatedEntries = [newEntry, ...entries]
    saveJournals(updatedEntries)
    setEntries(updatedEntries)
  }

  return { entries, addEntry, yesterdaysEntry }
}
