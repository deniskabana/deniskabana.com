import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import globals from 'config/globals'
import media from 'config/media'
import { Text } from 'components/common/Text'
import Section from 'components/common/Section'
import { Align } from 'components/common/helpers'
import Container from 'components/common/Container'

const StyledSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 100px 0 0;

  ${media.desktop`
    justify-content: space-between;
  `}
`

const StyledSocial = styled.a`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  width: 50px;
  margin: 0 30px 40px;

  ${media.desktop`
    flex: 0 1 auto;
  margin: 0 30px;
    width: 85px;
    height: 85px;
  `}
`

const StyledIcon = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: transform ${() => globals.animation},
    opacity ${() => globals.animation};

  &:hover,
  &:focus {
    opacity: 0.8;
    transform: scale(1.1);
  }
`

const Connect = () => (
  <Section dark id="lets-connect">
    <Container>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <Section.Title light>Let's connect!</Section.Title>
      </ScrollAnimation>
      <StyledSocialMedia>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={90}>
          <StyledSocial href="tel:+420720062021" title="Call me">
            <StyledIcon src="files/phone.svg" alt="Phone number" />
          </StyledSocial>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={180}>
          <StyledSocial href="mailto:me@deniskabana.com" title="Email me">
            <StyledIcon src="files/mail.svg" alt="Email address" />
          </StyledSocial>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={270}>
          <StyledSocial href="https://www.linkedin.com/in/denis-kabana/" title="Connect on LinkedIn">
            <StyledIcon src="files/linkedin.svg" alt="LinkedIn" />
          </StyledSocial>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={360}>
          <StyledSocial href="https://www.facebook.com/deniskabana" title="Chat on Messenger">
            <StyledIcon src="files/facebook.svg" alt="Facebook" />
          </StyledSocial>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" animateOnce delay={450}>
          <StyledSocial href="https://github.com/deniskabana" title="Check my GitHub">
            <StyledIcon src="files/github.svg" alt="GitHub" />
          </StyledSocial>
        </ScrollAnimation>
      </StyledSocialMedia>
    </Container>
  </Section>
)

export default Connect
