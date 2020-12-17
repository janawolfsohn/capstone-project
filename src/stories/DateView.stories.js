import React from 'react'
import DateView from '../journal/DateView'

export default {
  title: 'journal/DateView',
  component: DateView,
  argTypes: {
    date: {
      control: 'date',
    },
  },
}

const Template = (args) => <DateView {...args} />

export const dateView = Template.bind({})
dateView.args = {
  date: '2020-08-01T13:41:16.930Z',
}
