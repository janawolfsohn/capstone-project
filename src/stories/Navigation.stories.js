import React from 'react'
import Navigation from '../common/Navigation'

export default {
  title: 'common/Navigation',
  component: Navigation,
}

const Template = () => <Navigation />

export const navigation = Template.bind({})
navigation.parameters = {
  controls: { hideNoControlsWarning: true },
}
