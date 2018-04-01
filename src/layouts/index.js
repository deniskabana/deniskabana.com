import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Denis Kabana - web and web app JS developer"
      meta={[
        { name: 'description', content: 'Hi! I\'m an experienced Javascript developer with great timings, prices and estimations. Check out my website for more details.' },
        { name: 'keywords', content: 'frontend, backend, fullstack, javascript, node, nodejs, react, reactjs' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
