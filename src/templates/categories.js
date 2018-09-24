import React from 'react';
import { graphql } from 'gatsby';

import Link from '../components/Link';
import Layout from '../components/Layout';

const CategoryItem = ({ postsByCategory, category }) => (
  <div>
    <h1>
      {postsByCategory.length} post
      {postsByCategory.length === 1 ? '' : 's'} categoryged with{' '}
      {category}
    </h1>

    <ul>
      {postsByCategory.map(({ id, fields, excerpt }) => {
        return (
          <li key={id}>
            <h1>
              <Link to={fields.slug}>{fields.title}</Link>
            </h1>
            <p>{excerpt}</p>
          </li>
        );
      })}
    </ul>

    <hr />

    <Link to="/categories">All Categories</Link>
  </div>
);

const CategoryList = ({ postsByCategories }) => (
  <div>
    <h1>Categories</h1>
    <ul>
      {Object.keys(postsByCategories).map(key => (
        <li key={key}>
          <Link to={`/categories/${key}`}>{key}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Categories({ data: { site }, pageContext }) {
  return (
    <Layout site={site}>
      {pageContext.category ? (
        <CategoryItem {...pageContext} />
      ) : (
        <CategoryList {...pageContext} />
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
