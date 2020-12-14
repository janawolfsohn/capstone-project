import React from 'react'
import renderer from 'react-test-renderer'
import { StarIcon } from '../common/icons'
import IconRange from './IconRange'
import 'jest-styled-components'

describe('IconRange', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <IconRange max={10} current={5} Icon={StarIcon} />
    )
    expect(tree).toMatchSnapshot()
  })
})
