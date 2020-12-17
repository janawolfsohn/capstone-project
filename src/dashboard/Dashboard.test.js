import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Dashboard from './Dashboard'
import 'jest-styled-components'
import dashboard from '../fixtures/dashboard.json'

describe('Dashboard', () => {
  const { userName, buddies, team, yesterdaysEntry } = dashboard

  it('renders the dashboard', () => {
    const { getByText, getAllByText } = render(
      <Dashboard
        buddies={buddies}
        yesterdaysEntry={yesterdaysEntry}
        team={team}
      />
    )

    expect(getByText(/dashboard/i)).toBeInTheDocument()
    expect(getByText(/Your Code Buddy for Today:/i)).toBeInTheDocument()
    expect(getByText(/Your Current Team:/i)).toBeInTheDocument()
    expect(getByText(/Yesterdays Journal:/i)).toBeInTheDocument()

    expect(getAllByText(userName).length).toBe(2)

    buddies
      .filter(({ name }) => name !== userName)
      .forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument()
      })

    team
      .filter(({ name }) => name !== userName)
      .forEach(({ name }) => expect(getByText(name)).toBeInTheDocument())

    expect(getByText(yesterdaysEntry.motto)).toBeInTheDocument()
    expect(getByText(yesterdaysEntry.notes)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <Dashboard
        buddies={buddies}
        yesterdaysEntry={yesterdaysEntry}
        team={team}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
