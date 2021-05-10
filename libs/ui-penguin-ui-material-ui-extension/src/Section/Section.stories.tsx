import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withKnobs } from "@storybook/addon-knobs";
import Section from './Section';

export default {
  title: "Section",
  decorators: [withKnobs]
};

export const Basic = () => <div style={{backgroundColor: 'red'}}><Section><Typography>Basic</Typography></Section></div>;
