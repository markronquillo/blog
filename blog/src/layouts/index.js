import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Container from "../components/container";

require("prismjs/themes/prism-okaidia.css");

import "./index.css";
import "./style.css";

const Header = () => (
  <Container className="header" column spaceBetween width="100%" height="250px">
    <Container spaceBetween column width="100%">
      <div className="name">Mark Joseph Ronquillo</div>
      <div>Software Engineer</div>
    </Container>
    <Container spaceBetween column width="100%">
      <div className="header-links">
        <Link to="/blog"> Blog </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/about"> About</Link>
      </div>
    </Container>
  </Container>
);

const TemplateWrapper = ({ children }) => (
  <Container column>
    <Helmet
      title="blog | markronquillo"
      meta={[
        { name: "description", content: "Blog" },
        { name: "keywords", content: "blog, markronquillo, developer" }
      ]}
    />
    <Header />

    {children()}
  </Container>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
