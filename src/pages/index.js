import React from 'react'
import Link from 'gatsby-link'

import Header from 'components/Header'
import Introduction from 'components/Introduction'
import Perks from 'components/Perks'
import Technology from 'components/Technology'
import Connect from 'components/Connect'

const IndexPage = () => (
  <div>
    <Header />
    <Introduction />
    <Perks />
    <Technology />
    <Connect />
  </div>
)

export default IndexPage
