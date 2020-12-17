import React from 'react'
import JournalEntry from '../journal/JournalEntry'
import journal from '../fixtures/journal.json'

const [entry] = journal

export default { title: 'journal/JournalEntry', component: JournalEntry }

const Template = (args) => <JournalEntry {...args} />

export const journalEntry = Template.bind({})
journalEntry.args = {
  entry,
  hasDateHeader: true,
}
