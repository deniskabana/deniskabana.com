import React from 'react'
import styled from 'styled-components'

import { Text } from 'components/common/Text'
import Section from 'components/common/Section'
import { Align } from 'components/common/helpers'
import Container from 'components/common/Container'

const StyledAvatar = styled.div`
  display: block;
  border-radius: 50%;
  margin-bottom: 200px;
  width: 320px;
  height: 320px;
  margin: 0 auto 100px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.6);
  background: url(files/denis.jpg) no-repeat center;
  background-size: cover;
`

const StyledIntroTitle = styled.h2`
  display: block;
  font-family: 'Raleway';
  font-size: 71px;
  font-weight: 600;
  margin-bottom: 60px;
`

const Introduction = () => (
  <Section id="about-me">
    <Container>
      <Align center>
        <StyledAvatar title="Denis Kabana" />
        <StyledIntroTitle>Hi, I'm Denis.</StyledIntroTitle>
        <Text size="24px">
          I love what I do and I can help you love your project too.
          <br />
          Besides being a developer I am also a music composer and project manager.
        </Text>
      </Align>
    </Container>
  </Section>
)

export default Introduction
