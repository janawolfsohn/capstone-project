import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import JournalEntry from './JournalEntry'
import 'jest-styled-components'
import journal from '../fixtures/journal.json'

describe('JournalEntry', () => {
  const [entry] = journal
  const dateString = new Date(entry.date).toLocaleDateString()

  it('displays the title and subtitle and no date', () => {
    const { getByText, queryByText } = render(<JournalEntry entry={entry} />)

    expect(queryByText(dateString)).not.toBeInTheDocument()
    expect(getByText(entry.motto)).toBeInTheDocument()
    expect(getByText(entry.notes)).toBeInTheDocument()
  })

  it('displays the title and subtitle and date', () => {
    const { getByText } = render(<JournalEntry entry={entry} hasDateHeader />)

    expect(getByText(dateString)).toBeInTheDocument()
    expect(getByText(entry.motto)).toBeInTheDocument()
    expect(getByText(entry.notes)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<JournalEntry entry={entry} hasDateHeader />)
    expect(tree).toMatchSnapshot()
  })
})
