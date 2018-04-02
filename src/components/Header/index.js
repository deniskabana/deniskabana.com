import React from 'react'
import styled, { keyframes } from 'styled-components'

import globals from 'config/globals'
import { H1, H2 } from 'components/common/Text'

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
  position: relative;
  background: #32323B;
  color: white;
  width: 100%;
  height: 95vh;
  overflow: hidden;
  min-height: 400px;

  &:after {
    content: ' ';
    display: block;
    background: white;
    width: 130vw;
    height: 200px;
    position: absolute;
    top: 98%;
    transform-origin: left bottom;
    transform: rotateZ(-2deg);
  }
`

const StyledTitle = styled(H1)`
  position: relative;
  margin: -20px 0 40px;
  color: ${globals.colorGolden};
  font-family: 'Source Code Pro';
  font-size: 105px;
  letter-spacing: 0.8;
`

const StyledSubtitle = styled(H2)`
  position: relative;
`

const bounceAnimation = keyframes`
  0%, 4%, 12.5%, 20%, 25% {transform: translateY(0);}
  10% {transform: translateY(-10px);}
  15% {transform: translateY(-5px);}
`

const StyledArrow = styled.a`
  display: block;
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
`

const Header = () => (
  <StyledHeader>
    <StyledHeaderBg />
    <StyledTitle>&lt;DenisKabana /&gt;</StyledTitle>
    <StyledSubtitle>Web and web app full stack developer and project manager.</StyledSubtitle>
    <StyledArrow href="#introduction" title="Scroll down to the next section" />
  </StyledHeader>
)

export default Header
