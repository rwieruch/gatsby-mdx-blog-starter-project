---
slug: "/mdx-example"
date: "2017-07-13T03:49:16.408Z"
title: "MDX Example"
description: "MDX Example Description ..."
categories: ["react"]
keywords: ["react"]
banner: "./images/banner.jpg"
---

import Link from "$components/Link";
import Counter from "$components/Counter";

When we shift gears toward GraphQL on the server side, we will implement a GraphQL API that can eventually be consumed into client-side operations. By the end, you should have a firm grasp about using GraphQL in almost all JavaScript applications. I say 'almost' because there are always new libraries, patterns, and best practices that need to be learned to keep up with emerging technology.

# A React component in Markdown:

<Counter />

## Code Snippet

Code Snippet:

```jsx{1,4-6}
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.onIncrement} type="button">
          Increment
        </button>
        <button onClick={this.onDecrement} type="button">
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
```

Hello `foo` bar

An external Link:

<Link to="https://roadtoreact.com/">Find out more about it</Link>

An Image:

![Some Cover Image](./images/banner.jpg)

That's it.