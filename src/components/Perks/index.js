import React from 'react'
import styled from 'styled-components'

import globals from 'config/globals'
import { Text, Title } from 'components/common/Text'
import Section from 'components/common/Section'
import { Align } from 'components/common/helpers'
import Grid, { Row, Col } from 'components/Grid'
import Container from 'components/common/Container'

const StyledImage = styled.img`
  display: block;
  width: 75px;
  height: auto;
  margin: 0 auto 45px;
`

const StyledTitle = styled(Title)`
  display: block;
  color: ${() => globals.colorWhite};
  font-size: 36px;
  font-weight: 600;
`

const StyledText = styled(Text)`
  display: block;
  color: ${() => globals.colorWhite};
  font-size: 20px;
`

const StyledColContainer = styled.div`
  margin: 0 auto 100px;
  width: 350px;
`

const Perks = () => (
  <Section dark>
    <Container>
      <Align center>
        <Row>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImage src="files/communication.svg" alt="Communication" />
              <StyledTitle>Communication</StyledTitle>
              <StyledText>I communicate efficiently and never leave you not knowing.</StyledText>
            </StyledColContainer>
          </Col>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImage src="files/code-quality.svg" alt="Code quality" />
              <StyledTitle>Code quality</StyledTitle>
              <StyledText>I focus on senior maintainable code readable for humans.</StyledText>
            </StyledColContainer>
          </Col>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImage src="files/accessibility.svg" alt="Accessibility" />
              <StyledTitle>Accessibility</StyledTitle>
              <StyledText>I can make your product accessible for everyone.</StyledText>
            </StyledColContainer>
          </Col>
        </Row>
      </Align>
    </Container>
  </Section>
)

export default Perks
