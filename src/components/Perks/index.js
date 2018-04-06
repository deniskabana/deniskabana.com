import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import globals from 'config/globals'
import media from 'config/media'
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
  display: flex;
  align-items: center;
  width: 75px;
  height: 100px;
  margin: 0 auto;

  ${media.tablet`
    height: 130px;
  `}
`

const StyledTitle = styled(Title)`
  display: block;
  color: ${() => globals.colorWhite};
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 24px;

  ${media.tablet`
    font-size: 36px;
  `}
`

const StyledText = styled(Text)`
  display: block;
  color: ${() => globals.colorWhite};
  font-size: 18px;
`

const StyledColContainer = styled.div`
  margin: 0 0 80px;
  padding: 0 15px;
  max-width: 350px;

  ${media.tablet`
    margin: 0 auto 180px;
    padding: 0 30px;
  `}
`

const StyledSection = styled(Section)`
  padding: 80px 0 0;

  ${media.tablet`
    padding: 180px 0 0;
  `}
`

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  width: 100%;
  margin-right: 0;

  ${media.tablet`
    margin-left: -15px;
    margin-right: -15px;
  `}
`

const perksData = [
  {icon: 'communication.svg', label: 'Communication', text: 'I communicate efficiently and never leave you not knowing.'},
  {icon: 'code-quality.svg', label: 'Code quality', text: 'I focus on senior maintainable code readable for humans.'},
  {icon: 'accessibility.svg', label: 'Accessibility', text: 'I can make your product accessible for everyone.'},
  {icon: 'optimisation.svg', label: 'Optimisation', text: 'SEO, load optimisations and valid, fast code without bloat.'},
  {icon: 'fullstack.svg', label: 'Full stack', text: 'I work with Javascript and that is on both frontend and backend.'},
  {icon: 'management.svg', label: 'Management', text: 'I love helping with the whole project, not just development!'},
]

const Perks = () => (
  <StyledSection dark id="im-good-at">
    <Container>
      <Align center>
        <StyledRow>
          {perksData.map((perk, index) => (
            <Col sm={6} md={4} key={index}>
              <StyledColContainer>
                <ScrollAnimation animateIn="zoomIn" animateOnce delay={90 * index}>
                  <StyledImageWrapper>
                    <StyledImage src={`files/${perk.icon}`} alt={perk.label} />
                  </StyledImageWrapper>
                  <StyledTitle>{perk.label}</StyledTitle>
                  <StyledText>{perk.text}</StyledText>
                </ScrollAnimation>
              </StyledColContainer>
            </Col>
          ))}
        </StyledRow>
      </Align>
    </Container>
  </StyledSection>
)

export default Perks
