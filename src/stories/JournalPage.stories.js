import React from 'react'
import { action } from '@storybook/addon-actions'
import JournalPage from '../journal/JournalPage'
import PageDecorator from './PageDecorator'
import journal from '../fixtures/journal.json'

export default {
  title: 'journal/JournalPage',
  component: JournalPage,
  decorators: [PageDecorator],
}

const Template = (args) => <JournalPage {...args} />

export const journalPage = Template.bind({})
journalPage.args = {
  entries: journal,
  addEntry: action('add entry'),
}
