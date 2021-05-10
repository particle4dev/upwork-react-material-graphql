import * as React from 'react';
import NextHead from 'next/head';

const RobotoHead = () => (
  <NextHead>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />
    <link
      href="//fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700|Roboto:300,300i,400,400i,500,500i,700,700i|Roboto+Mono:300,400,500|Google+Sans:300,400|Google+Sans+Display:400,500"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </NextHead>
);

export default RobotoHead;
