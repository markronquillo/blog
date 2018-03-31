import React from "react";
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h2
        style={{
          borderBottom: "1px solid #eee",
          paddingBottom: "20px",
          marginBottom: "5px"
        }}
      >
        {post.frontmatter.title}
      </h2>
      <h4>
        <span style={{ color: "#999", fontWeight: 100, fontSize: "0.8em" }}>
          {post.frontmatter.date}
        </span>
      </h4>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`;
