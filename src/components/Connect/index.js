import React from 'react'
import styled from 'styled-components'

import globals from 'config/globals'
import { Text } from 'components/common/Text'
import Section from 'components/common/Section'
import { Align } from 'components/common/helpers'
import Container from 'components/common/Container'

const StyledSocialMedia = styled.div`
  display: flex;
  width: 100%;
  margin: 100px 0 0;
  justify-content: space-between;
`

const StyledSocial = styled.a`
  display: flex;
  align-items: center;
  width: 85px;
  margin: 0 30px;
  height: 85px;
  flex: 0 1 auto;
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
      <Section.Title light>Let's connect!</Section.Title>
      <StyledSocialMedia>
        <StyledSocial href="tel:+420720062021" title="Call me">
          <StyledIcon src="files/phone.svg" alt="Phone number" />
        </StyledSocial>
        <StyledSocial href="mailto:me@deniskabana.com" title="Email me">
          <StyledIcon src="files/mail.svg" alt="Email address" />
        </StyledSocial>
        <StyledSocial href="https://www.linkedin.com/in/denis-kabana/" title="Connect on LinkedIn">
          <StyledIcon src="files/linkedin.svg" alt="LinkedIn" />
        </StyledSocial>
        <StyledSocial href="https://www.facebook.com/deniskabana" title="Chat on Messenger">
          <StyledIcon src="files/facebook.svg" alt="Facebook" />
        </StyledSocial>
        <StyledSocial href="https://github.com/deniskabana" title="Check my GitHub">
          <StyledIcon src="files/github.svg" alt="GitHub" />
        </StyledSocial>
      </StyledSocialMedia>
    </Container>
  </Section>
)

export default Connect
