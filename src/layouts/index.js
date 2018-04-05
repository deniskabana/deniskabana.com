import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'animate.css/animate.min.css'

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
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
