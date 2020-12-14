import styled from 'styled-components/macro'

export default styled.main`
  display: grid;
  align-content: start;
  gap: 20px;
  padding: 30px;
  overflow-y: scroll;

  > *:last-child {
    position: relative;
  }

  > *:last-child:after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 80px;
  }
`
