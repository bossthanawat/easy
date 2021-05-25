import React from 'react'
import styled from 'styled-components'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PageLoader = () => {
  return (
    <Wrapper>
      <span>Loading ...</span>
    </Wrapper>
  )
}

export default PageLoader
