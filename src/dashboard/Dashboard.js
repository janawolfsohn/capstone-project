import React from 'react'
import styled from 'styled-components'
import CardGrid from '../common/CardGrid'
import Header from '../modules/Header'
import JournalEntry from '../journal/JournalEntry'

import PropTypes from 'prop-types'

Dashboard.propTypes = {
  
  yesterdaysEntry: PropTypes.object,
}

export default function Dashboard({ yesterdaysEntry }) {
  return (
    <>
      <Header title="Dashboard" />
      <StyledCardGrid>
        
        <Headline>Yesterdays Journal:</Headline>
        {yesterdaysEntry ? (
          <JournalEntry entry={yesterdaysEntry} />
        ) : (
          <Headline>
            <small>No entry from yesterday</small>
          </Headline>
        )}
      </StyledCardGrid>
    </>
  )
}

const StyledCardGrid = styled(CardGrid)`
  padding-top: 0;
  gap: 0;
`

const Headline = styled.h2`
  font-weight: 400;
  color: var(--blue-main);
  line-height: 1.143;
  font-size: 87.5%;
  margin-top: 30px;
  margin-bottom: 10px;
`
