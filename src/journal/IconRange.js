import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

IconRange.propTypes = {
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  Icon: PropTypes.elementType.isRequired,
}

export default function IconRange({ current, max, Icon }) {
  return (
    <StyledIconRange current={current}>
      {[...new Array(max)].map((_, index) => (
        <Icon key={index} />
      ))}
    </StyledIconRange>
  )
}

const StyledIconRange = styled.div`
  display: flex;
  justify-content: space-between;
  fill: var(--blue-50);

  /*
    let current be 4, then :nth-child(-n+4) matches :nth-child(4) and every element below
  */
  > :nth-child(-n + ${(props) => props.current}) {
    fill: var(--blue-main);
  }
`
