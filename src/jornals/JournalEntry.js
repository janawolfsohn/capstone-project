import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import { RectangleIcon, StarIcon } from '../common/icons'
import DateView from './DateView'
import IconRange from './IconRange'

JournalEntry.propTypes = {
  entry: PropTypes.object.isRequired,
  hasDateHeader: PropTypes.bool,
}

export default function JournalEntry({ entry, hasDateHeader }) {
  return (
    <JournalContainer>
      {hasDateHeader && <DateView date={entry.date} />}
      <Headline>Rating:</Headline>
      <IconRange current={entry.rating} max={5} Icon={StarIcon} />
      <Headline>Comprehension:</Headline>
      <IconRange current={entry.comprehension} max={10} Icon={RectangleIcon} />
      <Headline>Motto:</Headline>
      <Motto>{entry.motto}</Motto>
      <Headline>Notes:</Headline>
      <Notes>{entry.notes}</Notes>
    </JournalContainer>
  )
}

const JournalContainer = styled.section`
  border-radius: 6px;
  box-shadow: var(--shadow-blue);
  padding: 20px;
  color: var(--blue-main);
  width: 100%;
`

const Headline = styled.p`
  font-weight: 400;
  color: var(--blue-75);
  line-height: 1.333;
  font-size: 75%;
  margin-top: 20px;
  margin-bottom: 10px;
`

const Motto = styled.q`
  display: inline-block;
  font-weight: 400;
  font-size: 100%;
  line-height: 1;
`

const Notes = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 87.5%;
  line-height: 1.429;
`
