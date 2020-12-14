import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import DateView from './DateView'
import 'jest-styled-components'

describe('DateView', () => {
  it('displays the date', () => {
    const date = new Date('2020-07-03')
    const { getByText } = render(<DateView date={date} />)

    expect(getByText('7/3/2020')).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const date = new Date('2020-07-03')
    const tree = renderer.create(<DateView date={date} />)
    expect(tree).toMatchSnapshot()
  })
})
