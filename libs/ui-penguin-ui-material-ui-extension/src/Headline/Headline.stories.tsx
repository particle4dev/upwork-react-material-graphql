import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { withKnobs } from "@storybook/addon-knobs";

import Headline from './index';

export default {
  title: "Headline",
  decorators: [withKnobs]
};

export const Basic = () => <Headline>Basic</Headline>;

export const WithSubheader = () => <Headline subheader="subheader">WithSubheader</Headline>;

export const WithAction = () => <Headline subheader="subheader" action={
  <IconButton aria-label="forward">
    <ArrowForwardIcon />
  </IconButton>
}>WithAction</Headline>;


export const H1 = () => <Headline component="h1" subheader="subheader" action={
  <IconButton aria-label="forward">
    <ArrowForwardIcon />
  </IconButton>
}>WithAction</Headline>;
