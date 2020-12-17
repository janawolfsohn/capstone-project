import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

IconRangeInput.propTypes = {
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.elementType.isRequired,
}

export default function IconRangeInput({ max, current, onClick, Icon }) {
  return (
    <StyledStyledIconRangeInput>
      {[...Array(max)].map((_, index) => (
        <IconButton
          key={index}
          onClick={() => onClick(index + 1)}
          marked={index + 1 <= current}
          type="button"
        >
          <Icon />
        </IconButton>
      ))}
    </StyledStyledIconRangeInput>
  )
}

const StyledStyledIconRangeInput = styled.div`
  display: flex;
  justify-content: space-between;
  fill: white;
  stroke: var(--blue-75);
  margin-top: 10px;
`

const IconButton = styled.button`
  border: none;
  fill: ${(props) => (props.marked ? 'var(--blue-main)' : 'none')};
  stroke: ${(props) =>
    props.marked ? 'var(--blue-main)' : 'var(--blue-main)'};
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`
