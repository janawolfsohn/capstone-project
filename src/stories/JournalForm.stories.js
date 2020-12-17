import React from 'react'
import { action } from '@storybook/addon-actions'

import JournalForm from '../journal/JournalForm'

export default {
  title: 'journal/JournalForm',
  component: JournalForm,
}

const Template = (args) => <JournalForm {...args} />

export const journalForm = Template.bind({})
journalForm.args = {
  onSave: action('save clicked'),
  onCancel: action('cancel clicked'),
  today: new Date('2020-08-22T13:41:16.930Z'),
}
journalForm.parameters = {
  controls: { hideNoControlsWarning: true },
}
