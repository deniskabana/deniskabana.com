import React from 'react'
import styled from 'styled-components'

import { Text, Title } from 'components/common/Text'
import Section from 'components/common/Section'
import Container from 'components/common/Container'

const StyledTitle = styled(Title)`
  display: block;
  margin-bottom: 20px;
  font-size: 48px;
`

const StyledText = styled(Text)`
  font-size: 20px;
`

const StyledTextContainer = styled.div`
  p {
    margin: 50px 0;
  }
`

const Technology = () => (
  <Section>
    <Container>
      <Section.Title>What I work with</Section.Title>
      <StyledTextContainer>
        <p>
          <StyledTitle>React</StyledTitle>
          <StyledText>I have worked with React for web applications for years and recently also for websites. It helps save time and introduce clean code from the beginning.</StyledText>
        </p>
        <p>
          <StyledTitle>HTML and CSS</StyledTitle>
          <StyledText>I worked with every single CSS preprocessor or superset there is to date. My favourites? Definitely styled-components and Stylus. I love svgs, animating and modular CSS (BEM, OOCSS)</StyledText>
        </p>
        <p>
          <StyledTitle>Javascript</StyledTitle>
          <StyledText>I work with Node.js, MongoDB and Express on the backend side. On frontend my tech stack includes always the latest Webpack, Babel, ESLint, React and others.</StyledText>
        </p>
      </StyledTextContainer>
    </Container>
  </Section>
)

export default Technology
