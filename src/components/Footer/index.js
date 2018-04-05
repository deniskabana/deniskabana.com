import React from 'react'
import styled from 'styled-components'

import globals from 'config/globals'
import Section from 'components/common/Section'
import { Text, Title } from 'components/common/Text'
import { Align } from 'components/common/helpers'
import Container from 'components/common/Container'

const StyledSection = styled(Section)`
  background-color: #25252B;
  padding: 20px 0;
`

const StyledText = styled(Text)`
  color: ${() => globals.colorWhite};
  font-size: 16px;
`
const StyledSubfooter = styled(Text)`
  color: #A3A0A0;
  font-size: 11px;
`

const Footer = () => (
  <StyledSection>
    <Container>
      <Align center>
        <StyledText>Copyright &copy; Denis Kabana {new Date().getFullYear()}</StyledText>
        <br />
        <StyledSubfooter>Icons made by Smashicons and Dave Gandy from www.flaticon.com is licensed by CC 3.0 BY.</StyledSubfooter>
      </Align>
    </Container>
  </StyledSection>
)

export default Footer
