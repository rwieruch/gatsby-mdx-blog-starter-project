import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import Layout from '../components/Layout';
import Link from '../components/Link';

const CategoryList = ({ list = [] }) => (
  <Fragment>
    Categories:
    <ul>
      {list.map(category => (
        <li key={category}>
          <Link to={`/categories/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.date}</h2>

      {mdx.frontmatter.banner && (
        <Img
          sizes={mdx.frontmatter.banner.childImageSharp.sizes}
          alt={site.siteMetadata.keywords.join(', ')}
        />
      )}

      <MDXRenderer>{mdx.body}</MDXRenderer>

      <div>
        <CategoryList list={mdx.frontmatter.categories} />

        <hr />

        {prev && (
          <span>
            Previous{' '}
            <Link to={prev.fields.slug}>{prev.fields.title}</Link>
          </span>
        )}
        {next && (
          <span>
            Next{' '}
            <Link to={next.fields.slug}>{next.fields.title}</Link>
          </span>
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        banner {
          childImageSharp {
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        slug
        categories
        keywords
      }
      body
    }
  }
`;
