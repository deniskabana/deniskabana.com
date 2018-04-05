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
`

const StyledImageWrapper = styled.div`
  display: block;
  width: 75px;
  height: 130px;
  margin: 0 auto;
`

const StyledTitle = styled(Title)`
  display: block;
  color: ${() => globals.colorWhite};
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
`

const StyledText = styled(Text)`
  display: block;
  color: ${() => globals.colorWhite};
  font-size: 20px;
`

const StyledColContainer = styled.div`
  margin: 0 auto 180px;
  padding: 0 30px;
  max-width: 350px;
`

const StyledSection = styled(Section)`
  padding: 180px 0 0;
`

const Perks = () => (
  <StyledSection dark id="im-good-at">
    <Container>
      <Align center>
        <Row>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImageWrapper>
                <StyledImage src="files/communication.svg" alt="Communication" />
              </StyledImageWrapper>
              <StyledTitle>Communication</StyledTitle>
              <StyledText>I communicate efficiently and never leave you not knowing.</StyledText>
            </StyledColContainer>
          </Col>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImageWrapper>
                <StyledImage src="files/code-quality.svg" alt="Code quality" />
              </StyledImageWrapper>
              <StyledTitle>Code quality</StyledTitle>
              <StyledText>I focus on senior maintainable code readable for humans.</StyledText>
            </StyledColContainer>
          </Col>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImageWrapper>
                <StyledImage src="files/accessibility.svg" alt="Accessibility" />
              </StyledImageWrapper>
              <StyledTitle>Accessibility</StyledTitle>
              <StyledText>I can make your product accessible for everyone.</StyledText>
            </StyledColContainer>
          </Col>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImageWrapper>
                <StyledImage src="files/optimisation.svg" alt="Optimisation" />
              </StyledImageWrapper>
              <StyledTitle>Optimisation</StyledTitle>
              <StyledText>SEO, load optimisations and valid, fast code without bloat.</StyledText>
            </StyledColContainer>
          </Col>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImageWrapper>
                <StyledImage src="files/fullstack.svg" alt="Full stack" />
              </StyledImageWrapper>
              <StyledTitle>Full stack</StyledTitle>
              <StyledText>I work with Javascript and that is on frontend and on backend.</StyledText>
            </StyledColContainer>
          </Col>
          <Col sm={6} md={4}>
            <StyledColContainer>
              <StyledImageWrapper>
                <StyledImage src="files/management.svg" alt="Management" />
              </StyledImageWrapper>
              <StyledTitle>Management</StyledTitle>
              <StyledText>I love helping with the whole project, not just development!</StyledText>
            </StyledColContainer>
          </Col>
        </Row>
      </Align>
    </Container>
  </StyledSection>
)

export default Perks
