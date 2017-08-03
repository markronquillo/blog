import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Container from '../components/container';

import './index.css'
import './style.css'

const Header = () => (
  <Container className="header" spaceBetween width="100%">
    <Container spaceBetween column>
      <div className="name">Mark Joseph Ronquillo</div>
      <div>Software Engineer</div>
    </Container>
    <Container spaceBetween column>
      <div className="">
        Blog | Projects | About
      </div>
      <div>
        
      </div>
    </Container>
  </Container>
)

const TemplateWrapper = ({
  children
}) => (
    <Container column>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      
      {children()}
    </Container>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
