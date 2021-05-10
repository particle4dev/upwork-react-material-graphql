import * as React from 'react';
import { withKnobs, select } from "@storybook/addon-knobs";

import ProgressBar from './index';

export default {
  title: "ProgressBar",
  decorators: [withKnobs]
};

export const Basic = () => <ProgressBar color={select("color", ["primary", "secondary"], "primary")} />;
