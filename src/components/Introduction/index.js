import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import media from 'config/media'
import { Text } from 'components/common/Text'
import Section from 'components/common/Section'
import { Align } from 'components/common/helpers'
import Container from 'components/common/Container'

const StyledAvatar = styled.div`
  display: block;
  border-radius: 50%;
  margin-bottom: 200px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.6);
  background: url(files/denis.jpg) no-repeat center;
  background-size: cover;
  width: 190px;
  height: 190px;
  margin: 0 auto 50px;

  ${media.tablet`
    width: 320px;
    height: 320px;
    margin: 0 auto 100px;
  `}
`

const StyledIntroTitle = styled.h2`
  display: block;
  font-family: 'Raleway';
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;

  ${media.tablet`
    font-size: 71px;
    margin-bottom: 60px;
  `}
`

const StyledText = styled(Text)`
  display: block;
  font-size: 18px;

  ${media.tablet`
    font-size: 24px;
  `}
`

const Introduction = () => (
  <Section id="about-me">
    <Container>
      <Align center>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <StyledAvatar title="Denis Kabana" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <StyledIntroTitle>Hi, I'm Denis.</StyledIntroTitle>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <StyledText>
            I love what I do and I can help you love your project too.
            <br />
            Besides being a developer I am also a music composer and project manager.
          </StyledText>
        </ScrollAnimation>
      </Align>
    </Container>
  </Section>
)

export default Introduction
