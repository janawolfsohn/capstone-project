import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import PageDecorator from './PageDecorator'
import dashboard from '../fixtures/dashboard.json'

const { buddies, team, yesterdaysEntry } = dashboard

export default {
  title: 'dashboard/Dashboard',
  component: Dashboard,
  decorators: [PageDecorator],
}

const Template = (args) => <Dashboard {...args} />

export const WithoutYesterdaysJournal = Template.bind({})

WithoutYesterdaysJournal.args = {
  buddies,
  team,
}

WithoutYesterdaysJournal.argTypes = {
  yesterdaysEntry: {
    control: null,
  },
}

export const WithYesterdaysJournal = Template.bind({})
WithYesterdaysJournal.args = {
  buddies,
  team,
  yesterdaysEntry,
}
