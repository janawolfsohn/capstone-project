import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import JournalPage from './JournalPage'
import 'jest-styled-components'

import journal from '../fixtures/journal.json'

describe('JournalPage', () => {
  const noop = () => {}

  it('renders the journal page', () => {
    const { getByText } = render(
      <JournalPage entries={journal} addEntry={noop} />
    )

    expect(getByText(/journal/i)).toBeInTheDocument()
    expect(getByText(/rate today/i)).toBeInTheDocument()
    expect(getByText(/rate today/i)).not.toBeDisabled()
    journal.forEach(({ motto, notes }) => {
      expect(getByText(motto)).toBeInTheDocument()
      expect(getByText(notes)).toBeInTheDocument()
    })
  })

  it('disables the Rate today button if a journal entry for today already exists', () => {
    const today = new Date()
    const todaysEntry = {
      _id: '5f281edc9fbf77777305889z',
      date: today,
      rating: 4,
      comprehension: 8,
      motto: 'Todays Motto',
      notes: 'Some very important notes for today!',
    }
    const { getByText } = render(
      <JournalPage
        entries={[todaysEntry, ...journal]}
        addEntry={noop}
        today={today}
      />
    )

    const rateTodayButton = getByText(/rate today/i)

    expect(rateTodayButton).toBeDisabled()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <JournalPage entries={journal} addEntry={noop} />
    )
    expect(tree).toMatchSnapshot()
  })
})
