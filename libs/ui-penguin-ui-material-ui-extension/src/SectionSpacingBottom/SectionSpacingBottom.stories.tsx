import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withKnobs } from "@storybook/addon-knobs";

import SectionSpacingBottom from './index';

export default {
  title: "SectionSpacingBottom",
  decorators: [withKnobs]
};

export const Basic = () => <div style={{backgroundColor: 'red'}}>
  <Typography>Basic 1</Typography>
  <SectionSpacingBottom/>
  <Typography>Basic 2</Typography>
</div>;
