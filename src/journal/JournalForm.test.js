import React from 'react'
import { render, wait } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import JournalForm from './JournalForm'
import 'jest-styled-components'

describe('JournalForm', () => {
  it('renders the form', () => {
    const noop = () => {}

    const { getByText } = render(<JournalForm onCancel={noop} onSave={noop} />)

    expect(getByText(/rating/i)).toBeInTheDocument()
    expect(getByText(/comprehension/i)).toBeInTheDocument()
    expect(getByText(/motto/i)).toBeInTheDocument()
    expect(getByText(/notes/i)).toBeInTheDocument()
    expect(getByText(/cancel/i)).toBeInTheDocument()
    expect(getByText(/save/i)).toBeInTheDocument()
  })

  it('calls onCancel on cancel click', () => {
    const onCancelMock = jest.fn()
    const onSaveMock = jest.fn()

    const { getByText } = render(
      <JournalForm onCancel={onCancelMock} onSave={onSaveMock} />
    )

    const cancelBtn = getByText(/cancel/i)
    userEvent.click(cancelBtn)

    expect(onCancelMock).toHaveBeenCalled()
    expect(onSaveMock).not.toHaveBeenCalled()
  })

  it('calls neither onCancel nor onSave on save click without input but shows an error message', async () => {
    const onCancelMock = jest.fn()
    const onSaveMock = jest.fn()

    const { getByText } = render(
      <JournalForm onCancel={onCancelMock} onSave={onSaveMock} />
    )
    const saveButton = getByText(/save/i)
    userEvent.click(saveButton)

    await wait()

    expect(onCancelMock).not.toHaveBeenCalled()
    expect(onSaveMock).not.toHaveBeenCalled()
    expect(getByText(/motto is required!/i)).toBeInTheDocument()
    expect(getByText(/notes are required!/i)).toBeInTheDocument()
  })

  it('it calls onSave with the form data', async () => {
    const onCancelMock = jest.fn()
    const onSaveMock = jest.fn()

    const { getByText, getByLabelText } = render(
      <JournalForm onCancel={onCancelMock} onSave={onSaveMock} />
    )

    const mottoInput = getByLabelText('Motto:')
    const notesInput = getByLabelText('Notes:')
    const saveButton = getByText(/save/i)

    userEvent.type(mottoInput, 'This is my motto')
    userEvent.type(notesInput, 'And these are my notes')
    userEvent.click(saveButton)

    await wait()

    expect(onCancelMock).not.toHaveBeenCalled()
    expect(onSaveMock).toHaveBeenCalled()

    const actualEntry = onSaveMock.mock.calls[0][0]
    expect(actualEntry.rating).toBe(3)
    expect(actualEntry.comprehension).toBe(5)
    expect(actualEntry.motto).toBe('This is my motto')
    expect(actualEntry.notes).toBe('And these are my notes')
  })

  it('renders correctly', () => {
    const noOp = () => {}
    const tree = renderer.create(
      <JournalForm
        onCancel={noOp}
        onSave={noOp}
        today={new Date('2020-08-22T13:41:16.930Z')}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
