import React from 'react'
import styled from 'styled-components'

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
  min-height: 40rem;

  &:after {
    content: ' ';
    display: block;
    background: white;
    width: 130vw;
    height: 20rem;
    position: absolute;
    top: 98%;
    transform-origin: left bottom;
    transform: rotateZ(-2deg);
  }
`

const Header = () => (
  <StyledHeader>
      <StyledHeaderBg />
      <h1>&lt;DenisKabana /&gt;</h1>
      <h2>Web and web app full stack developer and project manager.</h2>
  </StyledHeader>
)

export default Header
