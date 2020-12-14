import React from 'react'
import styled from 'styled-components/macro'
import headerSvg from '../assets/background_shape.svg'
import PropTypes from 'prop-types'

Header.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default function Header({ title, subtitle }) {
  return (
    <StyledHeader>
      <Headline>{title}</Headline>
      {subtitle ? <Subheadline>{subtitle}</Subheadline> : ''}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${headerSvg});
  background-size: cover;
`

const Headline = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 100%;
  line-height: 1.125;
  color: var(--blue-main);
  text-transform: uppercase;
`

const Subheadline = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 75%;
  line-height: 1.5;
  color: var(--blue-75);
`
