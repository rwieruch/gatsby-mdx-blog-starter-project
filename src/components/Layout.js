import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';

import 'prismjs/themes/prism-okaidia.css';

import Link from './Link';
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  ${() => {
    /* Override PrismJS Defaults */ return null;
  }}

  pre {
    background-color: #2f1e2e !important;
    border-radius: 4px;
    font-size: 14px;
  }

  .gatsby-highlight-code-line {
    background-color: #4f424c;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }
`;

const NAVIGATION = [
  { to: '/', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: 'https://roadtoreact.com', label: 'Courses' },
];

export default ({ site, frontmatter = {}, children }) => {
  const {
    title,
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata;

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter;

  const keywords = (frontmatterKeywords || siteKeywords).join(', ');
  const description = frontmatterDescription || siteDescription;

  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      >
        <html lang="en" />
      </Helmet>

      <GlobalStyle />

      <MDXProvider
        components={{
          ...MDXLayoutComponents,
          ...MDXGlobalComponents,
        }}
      >
        <Fragment>
          <ul>
            {NAVIGATION.map(navigation => (
              <li key={navigation.label}>
                <Link to={navigation.to}>{navigation.label}</Link>
              </li>
            ))}
          </ul>

          {children}
        </Fragment>
      </MDXProvider>
    </Fragment>
  );
};

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author
      keywords
    }
  }
`;
