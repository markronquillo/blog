import React from "react";
import Link from "gatsby-link";
import SectionTitle from "../components/section_title";
import ContentSummary from "../components/content_summary";
import Container from "../components/container";

const BlogPage = ({ data }) => (
  <div className="Page">
    <SectionTitle>Blog</SectionTitle>
    <Container column className="Blogs">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ContentSummary key={node.id} className="summary">
          <Link
            to={node.fields.slug}
            className="title"
            style={{ textDecoration: "none" }}
          >
            {node.frontmatter.title}{" "}
          </Link>
          <p className="date">{node.frontmatter.date}</p>
          <p className="excerpt">{node.excerpt}</p>
        </ContentSummary>
      ))}
    </Container>
  </div>
);

export const query = graphql`
  query Posts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
          }
          excerpt(pruneLength: 320)
          timeToRead
        }
      }
    }
  }
`;
export default BlogPage;
