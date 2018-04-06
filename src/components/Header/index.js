import React from 'react'
import styled, { keyframes } from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import globals from 'config/globals'
import media from 'config/media'
import { Text } from 'components/common/Text'
import Container from 'components/common/Container'

const StyledHeaderBg = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url(files/background.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.2;
`

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 90px 0;
  position: relative;
  background: ${() => globals.colorGray};
  color: white;
  width: 100%;
  height: auto;
  overflow: hidden;

  ${media.tablet`
    height: 93vh;
  `}

  &:after {
    content: ' ';
    display: block;
    background: ${() => globals.colorWhite};
    width: 130vw;
    height: 200px;
    position: absolute;
    top: 98%;
    transform-origin: left bottom;
    transform: rotateZ(-2deg);
  }
`

const StyledTitle = styled.h1`
  position: relative;
  margin: -20px 0 40px;
  color: ${globals.colorGolden};
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 34px;

  ${media.tablet`
    font-size: 48px;
  `}

  ${media.desktop`
    font-size: 105px;
  `}
`

const StyledSubtitle = styled(Text)`
  position: relative;
  font-size: 24px;
  font-weight: 500;

  ${media.desktop`
    font-size: 47px;
  `}
`

const bounceAnimation = keyframes`
  0%, 4%, 12.5%, 20%, 25% {transform: translateY(0);}
  10% {transform: translateY(-10px);}
  15% {transform: translateY(-5px);}
`

const StyledArrow = styled.a`
  display: none;
  width: 72px;
  height: 39px;
  position: absolute;
  left: 50%;
  margin-left: -36px;
  bottom: 10%;
  opacity: 0.4;
  background: url(files/arrow.svg) no-repeat center;
  background-size: 100% auto;
  animation: ${bounceAnimation} ease-out 4s infinite;

  ${media.phone`
    display: block;
  `}
`

const Header = () => (
  <StyledHeader id="header">
    <StyledHeaderBg />
    <Container>
      <StyledTitle>&lt;DenisKabana /&gt;</StyledTitle>
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
        <StyledSubtitle>Web and web app full stack developer and project manager.</StyledSubtitle>
      </ScrollAnimation>
    </Container>
    <StyledArrow href="#about-me" title="Scroll down to the next section" />
  </StyledHeader>
)

export default Header
