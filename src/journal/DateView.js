import React from 'react'
import styled from 'styled-components/macro'
import { getDateString } from '../lib/date'
import PropTypes from 'prop-types'

DateView.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
}

export default function DateView({ date }) {
  return <StyledDate dateTime={date}>{getDateString(date)}</StyledDate>
}

const StyledDate = styled.time`
  margin: 0;
  font-weight: 400;
  font-size: 87.5%;
  line-height: 1.286;
`
