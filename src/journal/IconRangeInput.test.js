import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import IconRangeInput from './IconRangeInput'
import { StarIcon } from '../common/icons'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'

describe('IconRangeInput', () => {
  it('calls the onClick callback with the correct value', () => {
    const onClickMock = jest.fn()

    const { getAllByRole } = render(
      <IconRangeInput
        max={10}
        current={5}
        onClick={onClickMock}
        Icon={StarIcon}
      />
    )

    const thirdButton = getAllByRole('button')[2]

    userEvent.click(thirdButton)

    expect(onClickMock).toBeCalledWith(3)
  })

  it('renders correctly', () => {
    const noop = () => {}
    const tree = renderer.create(
      <IconRangeInput max={10} current={5} onClick={noop} Icon={StarIcon} />
    )
    expect(tree).toMatchSnapshot()
  })
})
