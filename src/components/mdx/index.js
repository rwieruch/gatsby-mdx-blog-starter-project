import React from 'react';

import YouTube from 'react-youtube';

import Title from './Title';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';

import Link from '../Link';

export const MDXLayoutComponents = {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  p: props => <Paragraph {...props} />,
};

export const MDXGlobalComponents = {
  Link,
  YouTube,
};
