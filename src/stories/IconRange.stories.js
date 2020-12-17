import React from 'react'
import IconRange from '../journal/IconRange'
import { StarIcon, RectangleIcon } from '../common/icons'

export default {
  title: 'journal/IconRange',
  component: IconRange,
  argTypes: {
    Icon: {
      control: null,
    },
  },
}

const Template = (args) => <IconRange {...args} />

export const withStars = Template.bind({})
withStars.args = {
  max: 5,
  current: 2,
  Icon: StarIcon,
}

export const withRectangles = Template.bind({})
withRectangles.args = {
  max: 10,
  current: 7,
  Icon: RectangleIcon,
}
