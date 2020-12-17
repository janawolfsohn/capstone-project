import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { StarIcon, RectangleIcon } from '../common/icons'
import { toLocaleString } from '../lib/date'
import IconRangeInput from './IconRangeInput'

JournalForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  today: PropTypes.instanceOf(Date),
}

export default function JournalForm({ onCancel, onSave, today = new Date() }) {
  const { register, handleSubmit, errors } = useForm()
  const [comprehension, setComprehension] = useState(5)
  const [rating, setRating] = useState(3)
  const todaysDate = toLocaleString(today)

  const onSubmit = (journalEntry) => {
    journalEntry.date = new Date()
    journalEntry.rating = rating
    journalEntry.comprehension = comprehension
    onSave(journalEntry)
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Headline>TODAY, {todaysDate}</Headline>
        <StyledLabel>
          Rating:
          <IconRangeInput
            max={5}
            current={rating}
            onClick={setRating}
            Icon={StarIcon}
          />
        </StyledLabel>
        <StyledLabel>
          Comprehension:
          <IconRangeInput
            max={10}
            current={comprehension}
            onClick={setComprehension}
            Icon={RectangleIcon}
          />
        </StyledLabel>
        <StyledLabel>
          Motto:
          <MottoInput name="motto" ref={register({ required: true })} />
        </StyledLabel>
        {errors.motto && errors.motto.type === 'required' && (
          <ErrorMessage>Motto is required!</ErrorMessage>
        )}
        <StyledLabel>
          Notes:
          <NotesInput name="notes" ref={register({ required: true })} />
        </StyledLabel>
        {errors.notes && errors.notes.type === 'required' && (
          <ErrorMessage>Notes are required!</ErrorMessage>
        )}
        <ButtonGroup>
          <CancelButton onClick={onCancel} type="button">
            Cancel
          </CancelButton>
          <SubmitButton type="submit">Save</SubmitButton>
        </ButtonGroup>
      </Form>
    </>
  )
}

const ErrorMessage = styled.p`
  color: var(--orange-main);
  font-size: 75%;

  ::before {
    display: inline;
    content: '⚠ ';
  }
`

const Form = styled.form`
  display: grid;
  align-content: start;
  min-width: 300px;
  gap: 20px;
`

const NotesInput = styled.textarea`
  display: block;
  width: 90%;
  height: 120px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--blue-50);
  margin-top: 10px;
  font-size: 75%;
  color: var(--blue-main);
  resize: none;
`

const MottoInput = styled.input`
  display: block;
  width: 90%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--blue-50);
  margin-top: 10px;
  font-size: 75%;
  color: var(--blue-main);
`

const Headline = styled.h2`
  margin: 0;
  color: var(--blue-main);
  font-weight: 400;
  font-size: 87.5%;
  line-height: 1.286;
`

const StyledLabel = styled.label`
  color: var(--blue-main);
  font-weight: 400;
  font-size: 87.5%;
  line-height: 1.143;
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 97%;
`

const Button = styled.button`
  flex-grow: 1;
  border: none;
  border-radius: 5px;
  padding: 16px;
  background-color: var(--orange-main);
  color: white;
  font-weight: 700;
  font-size: 100%;
  cursor: pointer;
`

const SubmitButton = styled(Button)`
  background-color: var(--orange-main);
  color: white;
  font-weight: 700;
`
const CancelButton = styled(Button)`
  background-color: white;
  color: var(--blue-main);
  font-weight: 400;
`
