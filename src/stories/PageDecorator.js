import React from 'react'
import styled from 'styled-components'

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
`

export default (storyFn) => <PageLayout>{storyFn()}</PageLayout>
