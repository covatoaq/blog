import React from 'react';
import Link from 'gatsby-link';

const IndexPage = props => {
  const { allMarkdownRemark } = props.data;
  const { totalCount, edges } = allMarkdownRemark;
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>{totalCount}</p>
      <Link to="/page-2/">Go to page 2</Link>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query AllPosts {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { id: { regex: "/_posts/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`;
