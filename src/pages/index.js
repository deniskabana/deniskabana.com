import React from 'react'
import Link from 'gatsby-link'

import Header from 'components/Header'
import Introduction from 'components/Introduction'
import Perks from 'components/Perks'
import Technology from 'components/Technology'
import Connect from 'components/Connect'
import Footer from 'components/Footer'

const IndexPage = () => (
  <div>
    <Header />
    <Introduction />
    <Perks />
    <Technology />
    <Connect />
    <Footer />
  </div>
)

export default IndexPage
