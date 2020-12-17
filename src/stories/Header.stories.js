import React from 'react'
import Header from '../common/Header'
import PageDecorator from './PageDecorator'

export default {
  title: 'common/Header',
  component: Header,
  decorators: [PageDecorator],
}

const Template = (args) => <Header {...args} />

export const header = Template.bind({})
header.args = {
  title: 'Storybook title',
  subtitle: 'Storybook subtitle',
}
