import React from 'react'
import BuddyPage from '../buddies/BuddyPage'
import PageDecorator from './PageDecorator'
import buddies from '../fixtures/buddies.json'

export default {
  title: 'buddies/BuddyPage',
  component: BuddyPage,
  decorators: [PageDecorator],
}

const Template = (args) => <BuddyPage {...args} />

export const buddyPage = Template.bind({})
buddyPage.args = {
  date: new Date('2020-08-22T13:41:16.930Z'),
  buddies,
}
