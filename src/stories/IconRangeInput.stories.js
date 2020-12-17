import React from 'react'
import { action } from '@storybook/addon-actions'
import IconRangeInput from '../journal/IconRangeInput'
import { StarIcon, RectangleIcon } from '../common/icons'

export default {
  title: 'journal/IconRangeInput',
  component: IconRangeInput,
  argTypes: {
    Icon: {
      control: null,
    },
  },
}

const Template = (args) => <IconRangeInput {...args} />

export const withStars = Template.bind({})
withStars.args = {
  max: 5,
  current: 2,
  Icon: StarIcon,
  onClick: action('clicked'),
}

export const withRectangles = Template.bind({})
withRectangles.args = {
  max: 10,
  current: 7,
  Icon: RectangleIcon,
  onClick: action('clicked'),
}
