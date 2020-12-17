import journals from '../fixtures/journal.json'

import loadLocally  from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'

export function getJournals() {
  return loadLocally('journals') ?? journals
}

export function saveJournals(journals) {
  saveLocally('journals', journals)
}